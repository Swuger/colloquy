import { FilesService } from './../files/files.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesService } from './../roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/users.model';
import { Op, Sequelize } from 'sequelize';
import { UploadedFile } from 'src/files/files.service';
import { FriendsService } from 'src/friends/friends.service';
import { UserQueryParams } from './validators/user-query.validator';
import * as moment from 'moment';
import { FriendsRequests } from 'src/friends/models/friend-requests.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
    @InjectModel(FriendsRequests)
    private readonly friendsRequestsRepository: typeof FriendsRequests,
    private readonly roleService: RolesService,
    private readonly fileService: FilesService,
    private readonly friendsService: FriendsService,
  ) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByValue('user');

    await user.$set('roles', [role.id]);
    user.roles = [role];
    return user;
  }

  async getUserByEmailOrLogin(type: 'login' | 'registration', ...rest: string[]) {
    const [email, login] = rest;
    const emailOrLogin = type === 'login' && rest[0];
    const user = await this.userRepository.findOne({
      where: {
        [Op.or]:
          type === 'login'
            ? { user_email: emailOrLogin, user_nickname: emailOrLogin }
            : { user_email: email, user_nickname: login },
      },
      include: { all: true },
    });
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({
      include: { all: true },
    });
    return users;
  }

  async getAllUsersWithoutMe(id: number) {
    const friendsIds = (await this.friendsService.getFriendsById(id)).map(
      (item) => item[Number(id) === item.friend.id ? 'user' : 'friend'].id,
    );

    const friendsReqsIds = (
      await this.friendsRequestsRepository.findAll({
        where: { [Op.or]: { user_income_id: id, user_outcome_id: id } },
      })
    ).map((item) => {
      return Number(item.user_income_id) === Number(id)
        ? item.user_outcome_id
        : item.user_income_id;
    });

    const users = await this.userRepository.findAll({
      where: { [Op.not]: { id: [id, ...friendsIds, ...friendsReqsIds] } },
      include: { all: true },
      order: Sequelize.fn('random'),
    });
    return users;
  }

  async getUserById(id: number) {
    const user = await this.userRepository.findByPk(id, { include: { all: true } });
    return user;
  }

  async getUserByNickname(nickname: string) {
    const user = await this.userRepository.findOne({
      where: { user_nickname: nickname },
      include: { all: true },
    });
    return user;
  }

  async updateUserById(id: number, dto: UpdateUserDto, image?: UploadedFile) {
    const user = await this.userRepository.findByPk(id, { include: { all: true } });

    for (const key in dto) {
      if (dto[key] === '') {
        dto[key] = null;
      }

      if (key === 'user_phone' || key === 'user_sub_phone') {
        if (dto[key] !== null) {
          dto[key] = dto[key].replace(/\D/g, '');
          if (dto[key].length !== 11 || dto[key][0] !== '7') {
            throw new HttpException(
              'Неверный формат телефона +7 (777) 777 77-77',
              HttpStatus.BAD_REQUEST,
            );
          }
          continue;
        }
      }
    }

    return user.update({
      ...dto,
      user_avatar: image ? await this.fileService.createFile(image, user.id) : user.user_avatar,
    });
  }

  async deleteUserById(id: number) {
    const user = await this.userRepository.findByPk(id, { include: { all: true } });

    await this.fileService.deleteFile(user.user_avatar);

    return user.destroy();
  }

  async filterUsers(query: UserQueryParams) {
    const { userId, q, city, ageFrom, ageTo, femaleGender, maleGender, online } = query;

    const today = new Date();
    const ageFromTimestamp = ageTo ? today.getFullYear() - ageTo : 1900;
    const ageToTimestamp = ageFrom ? today.getFullYear() - ageFrom : 2009;

    const friendsIds = (await this.friendsService.getFriendsById(userId)).map(
      (item) => item[Number(userId) === item.friend.id ? 'user' : 'friend'].id,
    );

    const friendsReqsIds = (
      await this.friendsRequestsRepository.findAll({
        where: { [Op.or]: { user_income_id: userId, user_outcome_id: userId } },
      })
    ).map((item) => {
      return Number(item.user_income_id) === Number(userId)
        ? item.user_outcome_id
        : item.user_income_id;
    });

    const where = {
      [Op.not]: { id: [userId, ...friendsIds, ...friendsReqsIds] },
      ...(q
        ? {
            [Op.or]: [
              { user_name: { [Op.like]: `%${q}%` } },
              { user_nickname: { [Op.like]: `%${q}%` } },
            ],
          }
        : {}),
      ...(city ? { city_id: city } : {}),
      ...{
        user_birthdate: {
          [Op.between]: [
            moment(`${ageFromTimestamp}-01-01`).format('YYYY-MM-DD HH:mm:ssZ'),
            moment(`${ageToTimestamp}-12-31`).format('YYYY-MM-DD HH:mm:ssZ'),
          ],
        },
      },
      ...(maleGender
        ? { user_gender: maleGender }
        : femaleGender
        ? { user_gender: femaleGender }
        : maleGender && femaleGender
        ? { user_gender: { [Op.or]: [maleGender, femaleGender] } }
        : {}),
      ...(online ? { online_type: { [Op.notIn]: ['pc-offline'] } } : {}),
    };

    const users = this.userRepository.findAll({ where });
    return users;
  }
}
