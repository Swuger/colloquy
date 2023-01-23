import React from 'react';
import FastMessagesItem from '../../FastMessagesItem/FastMessagesItem';
import s from './FastMessagesList.module.scss';
import inputS from '../../../UI/Input/Input.module.scss';
import closeSvg from '../../../../assets/img/icons/close.svg';
import Input from '../../../UI/Input/Input';
import { Link } from 'react-router-dom';
import NotFoundBlock from '../../../NotFoundBlock/NotFoundBlock';
import Icon from '../../../UI/Icon/Icon';

type FastMessagesListProps = {
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

const FastMessagesList: React.FC<FastMessagesListProps> = ({ onClick }) => {
  const chats: {
    id: number;
    name: string;
    img: string;
  }[] = [
    { id: 1, name: 'Максимилиан Рабадонович', img: '../../assets/img/header/ebalo.png' },
    { id: 2, name: 'Пашок Кубыркин', img: '../../assets/img/header/ebalo.png' },
    { id: 3, name: 'Димон шкаф', img: '../../assets/img/header/ebalo.png' },
    { id: 4, name: 'Олег Киреев', img: '../../assets/img/header/ebalo.png' },
    { id: 5, name: 'Пашок Кубыркин', img: '../../assets/img/header/ebalo.png' },
    { id: 6, name: 'Димон шкаф', img: '../../assets/img/header/ebalo.png' },
    { id: 7, name: 'Олег Киреев', img: '../../assets/img/header/ebalo.png' },
    { id: 8, name: 'Пашок Кубыркин', img: '../../assets/img/header/ebalo.png' },
    { id: 9, name: 'Димон шкаф', img: '../../assets/img/header/ebalo.png' },
  ];
  return (
    <>
      <div className={s['wrapper-top']}>
        <h6 className={s['wrapper-heading']}>Чаты</h6>
        <Link onClick={onClick} to="/">
          <Icon src={closeSvg} id={'close'} className={'fms-close'} />
        </Link>
      </div>
      <div className={`${s['wrapper-content']} ${chats.length ? '' : s['nothing']}`}>
        {chats.length ? (
          chats.map(({ id, name, img }) => (
            <FastMessagesItem key={id} id={id} name={name} img={img} />
          ))
        ) : (
          <NotFoundBlock className="fm-nothing" text="У вас ещё нету чатов" />
        )}
      </div>
      <div className={s['wrapper-bottom']}>
        {/* <div className={s['input-block']}></div> */}
        <Input className="fm-input-search" type="text" placeholder="Поиск" inputType="search" />
      </div>
    </>
  );
};

export default FastMessagesList;
