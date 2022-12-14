import React from 'react';
import HeaderAvatar from '../UI/HeaderAvatar/HeaderAvatar';
import s from './MobileSidebar.module.scss';
import img from '../../assets/uploads/test/ebalo.png';
import { Link, NavLink } from 'react-router-dom';
import Notify from '../UI/Notify/Notify';
import { useSelector } from 'react-redux';
import { setIsAuth } from '../../redux/auth/slice';
import { selectMobile } from '../../redux/mobile/selector';
import { setIsSidebarShow } from '../../redux/mobile/slice';
import useWindowSize from '../../hooks/useWindowResize';
import { useAppDispatch } from './../../redux/store';

const MobileSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const { width } = useWindowSize();
  const { mobile } = useSelector(selectMobile);
  const id = 'swugerd';
  const links = [
    {
      id: 1,
      img: (
        <svg
          className={`${s['nav-img']} ${s['friends']}`}
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.69233" cy="4.48719" r="4.48719" fill="white" />
          <path
            d="M14.7436 17.6282C14.7436 15.673 13.9669 13.798 12.5845 12.4155C11.202 11.033 9.32693 10.2563 7.37181 10.2563C5.41668 10.2563 3.54163 11.033 2.15915 12.4155C0.776671 13.798 2.95216e-07 15.673 0 17.6282L7.37181 17.6282H14.7436Z"
            fill="white"
          />
          <circle cx="17.3077" cy="4.68759" r="3.64584" fill="white" />
          <path
            d="M23.9584 16.7068C23.9584 15.3361 23.624 13.9926 22.9928 12.8271C22.3616 11.6616 21.4585 10.7203 20.3851 10.1089C19.3117 9.49752 18.1104 9.24028 16.9161 9.36607C15.7218 9.49186 14.319 9.89188 13.3614 10.7172C15.4022 12.4563 16.1258 16.7068 16.1258 16.7068L23.9584 16.7068Z"
            fill="white"
          />
        </svg>
      ),
      text: 'Друзья',
      path: 'friends',
    },
    {
      id: 2,
      img: (
        <svg
          className={`${s['nav-img']} ${s['circles']}`}
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="11.5" cy="10" rx="11.5" ry="10" fill="white" />
          <path
            d="M3.85089 22H2.5C2.64022 21.7196 2.87312 21.3827 3.11407 21.066C3.66346 20.3441 4.094 19.53 4.27192 18.6404L4.5 17.5L9 19.5C8.01356 20.4864 6.81099 21.2297 5.48754 21.6708L5.1158 21.7947C4.70793 21.9307 4.28082 22 3.85089 22Z"
            fill="white"
          />
          <rect x="7" y="7" width="7" height="6" rx="1" fill="black" />
          <path d="M14.5 8.5V11.5L17 13V7L14.5 8.5Z" fill="black" />
        </svg>
      ),
      text: 'Кружочки',
      path: 'circles',
    },
    {
      id: 3,
      img: (
        <svg
          className={`${s['nav-img']} ${s['voices']}`}
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="11.5" cy="10" rx="11.5" ry="10" fill="white" />
          <path
            className={s['micro-path']}
            d="M3.85089 22H2.5C2.64022 21.7196 2.87312 21.3827 3.11407 21.066C3.66346 20.3441 4.094 19.53 4.27192 18.6404L4.5 17.5L9 19.5C8.01356 20.4864 6.81099 21.2297 5.48754 21.6708L5.1158 21.7947C4.70793 21.9307 4.28082 22 3.85089 22Z"
            fill="white"
          />
          <rect x="9" y="3" width="5" height="9" rx="2.5" fill="black" />
          <path
            d="M16 8C16 9.5913 15.5259 11.1174 14.682 12.2426C13.8381 13.3679 12.6935 14 11.5 14C10.3065 14 9.16193 13.3679 8.31802 12.2426C7.47411 11.1174 7 9.5913 7 8L8 8V8.58421C8 9.1897 8.10544 9.79214 8.34613 10.3477C8.5458 10.8086 8.79676 11.3386 9 11.6096C9.71799 12.5669 10.4846 13 11.5 13C12.5154 13 13.282 12.5669 14 11.6096C14.3499 11.143 14.4413 10.7824 14.682 10.1869C14.9351 9.56043 15 8.69407 15 8H16Z"
            fill="black"
          />
          <path
            d="M11 15V13.5H12V15H14C14.2761 15 14.5 15.2239 14.5 15.5C14.5 15.7761 14.2761 16 14 16H9C8.72386 16 8.5 15.7761 8.5 15.5C8.5 15.2239 8.72386 15 9 15H11Z"
            fill="black"
          />
        </svg>
      ),
      text: 'Войсы',
      path: 'voices',
    },
    {
      id: 4,
      img: (
        <svg
          className={`${s['nav-img']} ${s['photos']}`}
          width="27"
          height="25"
          viewBox="0 0 27 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-inside-1_1216_5034" fill="white">
            <rect x="5" width="22" height="18" rx="2" />
          </mask>
          <rect
            x="5"
            width="22"
            height="18"
            rx="2"
            stroke="white"
            strokeWidth="5"
            mask="url(#path-1-inside-1_1216_5034)"
          />
          <path
            d="M10.0226 10.0569L7.5 13V15.5H24.5V10.5L21.6272 6.80643C21.2315 6.29761 20.623 6 19.9784 6C19.3584 6 18.7705 6.27536 18.3737 6.7516L14 12L12.4788 10.0985C12.1762 9.72022 11.718 9.5 11.2335 9.5C10.7679 9.5 10.3256 9.70344 10.0226 10.0569Z"
            fill="white"
          />
          <circle cx="11.5" cy="5.5" r="2.5" fill="white" />
          <path
            d="M0 17.5L3 8V15.0371C3 15.6732 3.12138 16.3034 3.35762 16.894L3.40579 17.0145C3.79129 17.9782 4.48189 18.7891 5.37196 19.3232C6.11009 19.7661 6.95471 20 7.81551 20H23.5L22.7993 22.8026C22.6093 23.5626 22.0968 24.2016 21.3961 24.552C20.8182 24.8409 20.1554 24.9116 19.5295 24.7512L1 20C0.359711 19.3597 0 18.4913 0 17.5858V17.5Z"
            fill="white"
          />
        </svg>
      ),
      text: 'Фотографии',
      path: 'photos',
    },
    {
      id: 5,
      img: (
        <svg
          className={`${s['nav-img']} ${s['videos']}`}
          width="33"
          height="25"
          viewBox="0 0 33 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="33" height="25" rx="4" fill="white" />
          <path
            d="M13 8.18317V16.8168C13 16.896 13.0875 16.9437 13.1541 16.901L19.8692 12.5841C19.9304 12.5448 19.9304 12.4552 19.8691 12.4159L13.1541 8.09905C13.0875 8.05627 13 8.10405 13 8.18317Z"
            stroke="black"
            strokeWidth="1.5"
          />
        </svg>
      ),
      text: 'Видео',
      path: 'videos',
    },
    {
      id: 6,
      img: (
        <svg
          className={`${s['nav-img']} ${s['achieve']}`}
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.2116 2H2.03988C1.5594 2 1.14783 2.34137 1.09233 2.81864C0.991763 3.68331 0.907707 5.05035 1.2116 6C1.64074 7.34107 2.17686 8.04504 3.2116 9C4.62483 10.3043 7.7116 11 7.7116 11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19.7116 2H23.8833C24.3638 2 24.7754 2.34137 24.8309 2.81864C24.9315 3.68331 25.0155 5.05035 24.7116 6C24.2825 7.34107 23.7464 8.04504 22.7116 9C21.2984 10.3043 17.7116 11 17.7116 11"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M15.2116 18C15.7961 19.281 16.5 21 16.5 21H9C9 21 10.2033 19.3131 10.7116 18C11.2799 16.5319 11.2116 16 11.2116 14C11.2116 13.5 9.41208 12.6801 8.71161 12C7.38996 10.7168 7.46486 10.1811 6.71161 8.5C5.49022 5.7742 5.21161 1 5.21161 1H19.7116C19.7116 1 19.7116 4.5 19.2116 6.5C18.7173 8.47735 18.2116 9.5 17.7116 10.5C16.7116 12.5 14.2116 13.5 14.2116 14C14.2116 15.118 14.5432 16.5351 15.2116 18Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M6.21161 24H19.2116" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M17.2116 21V24H8.21161V21H17.2116Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M16.2021 5.65891C16.1782 5.58224 16.1136 5.52754 16.0372 5.519V5.519C14.6554 5.37197 13.4627 4.48523 12.9239 3.20425L12.889 3.1212C12.858 3.04799 12.7883 3 12.7115 3C12.6347 3 12.5651 3.04759 12.5341 3.12161L12.499 3.20493C11.9602 4.48562 10.7677 5.37209 9.38602 5.519V5.519C9.3096 5.52713 9.24482 5.58245 9.22116 5.65891C9.1973 5.73558 9.21903 5.81977 9.27644 5.87345L9.32064 5.91491C10.3357 6.86679 10.7832 8.27783 10.5021 9.64072L10.4787 9.75373C10.4626 9.83243 10.4921 9.91378 10.5544 9.96116C10.5883 9.98698 10.6283 10 10.6684 10C10.702 10 10.7357 9.99085 10.766 9.97214V9.97214C11.9605 9.24306 13.4626 9.24296 14.6571 9.97214V9.97214C14.7234 10.0122 14.8064 10.0083 14.8687 9.96014C14.9307 9.91357 14.9606 9.83142 14.9445 9.75272L14.9212 9.63978C14.6401 8.27674 15.0877 6.86556 16.103 5.9137L16.147 5.87244C16.204 5.81956 16.2259 5.73537 16.2021 5.65891ZM14.1256 7.22253C14.0737 7.27134 14.0506 7.34556 14.0653 7.41715L14.0784 7.48077C14.2279 8.20547 13.4407 8.75939 12.8091 8.37395V8.37395C12.7488 8.33694 12.6743 8.33694 12.614 8.37395V8.37395C11.9821 8.75942 11.1948 8.20533 11.3443 7.48045L11.3574 7.41715C11.3721 7.34556 11.349 7.27134 11.297 7.22253L11.267 7.19439C10.7164 6.67819 11.0264 5.75384 11.7769 5.67396V5.67396C11.8463 5.66684 11.9064 5.62027 11.9347 5.55357V5.55357C12.224 4.86592 13.1985 4.8659 13.4877 5.55357V5.55357C13.516 5.62027 13.5762 5.66684 13.6456 5.67396V5.67396C14.3961 5.75385 14.7062 6.67822 14.1555 7.19448L14.1256 7.22253Z"
            fill="white"
          />
        </svg>
      ),
      text: 'Достижения',
      path: 'achievements',
    },
    {
      id: 7,
      img: (
        <svg
          className={`${s['nav-img']} ${s['achieve']}`}
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M23.0687 15.5001V24.0001H15.5687H2.06866V11.3098"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15.5687 17.5V23C15.5687 23.5523 15.1209 24 14.5687 24H10.5687C10.0164 24 9.56866 23.5523 9.56866 23V17.5C9.56866 16.9477 10.0164 16.5 10.5687 16.5H14.5687C15.1209 16.5 15.5687 16.9477 15.5687 17.5Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16.5687 9.5C17.2231 11.1192 18.8264 12.6213 20.5686 12.5C21.3493 12.4456 22.3527 11.9183 22.8149 11.6521C22.9825 11.5556 23.111 11.4072 23.1867 11.2292C23.4183 10.6846 23.9223 9.42966 24.0686 8.5C24.4425 6.12466 22.9647 2.79844 22.3377 1.52459C22.1764 1.19702 21.8417 1 21.4766 1H16.5686M16.5687 9.5C16.5687 5.98528 16.5686 1 16.5686 1M16.5687 9.5C15.8548 11.0939 14.3142 12.5568 12.5686 12.5C10.7275 12.4401 9.42931 11.1287 8.56866 9.5M16.5686 1H8.56862M8.56862 1H3.6594C3.29499 1 2.9608 1.19616 2.79908 1.52272C2.16507 2.80294 0.662484 6.16122 1.06862 8.5C1.22825 9.41927 1.71748 10.6619 1.94716 11.2146C2.02483 11.4015 2.15991 11.5568 2.33738 11.6541C2.87891 11.951 4.12963 12.5674 5.06862 12.5C6.74401 12.3797 7.91147 11.0458 8.56866 9.5M8.56862 1C8.56862 1 8.56866 5.98528 8.56866 9.5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      text: 'Магазин',
      path: 'shop',
    },
  ];
  return width <= 1151 ? (
    <div className={`${s['wrapper']} ${mobile.isSidebarShow ? s['active'] : ''}`}>
      <div className={s['top']}>
        <Link to={`/profile/${id}`} className={s['profile-link']}>
          <HeaderAvatar
            className={'mobile-sidebar'}
            img={img}
            title={'Олег'}
            onlineType={'pc-online'}
            indicatorClass={[`${width >= 550 ? 'lg-indicator' : 'md-indicator'}`, 'border-sub-bg']}
          />
          <div className={s['info']}>
            <span className={s['name']}>Олег Киреев</span>
            <p className={s['status']}>статус</p>
          </div>
        </Link>
        <div className={s['actions']}>
          <Link to="/settings" className={s['settings']}>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.0427 12.5432C22.0427 17.7899 17.7894 22.0432 12.5427 22.0432C7.29599 22.0432 3.04269 17.7899 3.04269 12.5432C3.04269 7.29651 7.29599 3.04321 12.5427 3.04321C17.7894 3.04321 22.0427 7.29651 22.0427 12.5432ZM7.54269 12.5432C7.54269 15.5794 9.50649 17.5432 12.5427 17.5432C15.5789 17.5432 17.5427 15.5794 17.5427 12.5432C17.5427 9.50701 15.5789 7.54321 12.5427 7.54321C9.50649 7.54321 7.54269 9.50701 7.54269 12.5432Z"
                fill="white"
              />
              <path
                d="M10.0427 0.0429267C9.54268 0.542601 9.54268 3.54236 9.54268 3.54236H15.5427C15.5427 3.54236 15.5427 0.542359 15.0427 0.0423476C14.9993 -0.00107004 10.1117 -0.02606 10.0427 0.0429267Z"
                fill="white"
              />
              <path
                d="M2.05285 5.3593C2.05262 6.06617 4.17377 8.18732 4.17377 8.18732L8.41641 3.94468C8.41641 3.94468 6.29509 1.82336 5.58798 1.82335C5.52658 1.82335 2.05288 5.2617 2.05285 5.3593Z"
                fill="white"
              />
              <path
                d="M23.4062 5.3593C23.4065 6.06617 20.9726 8.5 20.9726 8.5L16.5 4.48736C16.5 4.48736 19.164 1.82336 19.8711 1.82335C19.9325 1.82335 23.4062 5.2617 23.4062 5.3593Z"
                fill="white"
              />
              <path
                d="M23.0427 19.5424C23.0429 18.8355 21.0427 16.5423 21.0427 16.5423L16.5427 21.0424C16.5427 21.0424 18.8356 23.0423 19.5427 23.0423C19.6041 23.0423 23.0426 19.64 23.0427 19.5424Z"
                fill="white"
              />
              <path
                d="M2.04268 19.5423C2.04246 18.8354 4.5 16.585 4.5 16.585L8.54231 20.5427C8.54231 20.5427 6.2498 23.0423 5.54268 23.0423C5.48128 23.0423 2.04272 19.6399 2.04268 19.5423Z"
                fill="white"
              />
              <path
                d="M10.0427 25.0423C9.5427 24.6192 9.54269 21.5424 9.54269 21.5424H15.5427C15.5427 21.5424 15.5427 24.6189 15.0427 25.0424C14.9993 25.0791 10.1117 25.1008 10.0427 25.0423Z"
                fill="white"
              />
              <path
                d="M0.0426856 15.0424C0.54236 15.5424 3.54269 15.5424 3.54269 15.5424L3.54269 9.54236C3.54269 9.54236 0.54269 9.54236 0.0426788 10.0424C-0.000738814 10.0858 -0.0263012 14.9733 0.0426856 15.0424Z"
                fill="white"
              />
              <path
                d="M25.0427 15.0424C24.543 15.5424 21.5427 15.5424 21.5427 15.5424V9.54236C21.5427 9.54236 24.5427 9.54236 25.0427 10.0424C25.0861 10.0858 25.1117 14.9733 25.0427 15.0424Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className={s['main']}>
        <nav className={s['sidebar-nav']}>
          <ul className={s['main-list']}>
            {links.map(({ id, img, text, path }) => (
              <li className={s['nav-item']} key={id}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${s['active']} ${s['nav-link']}` : s['nav-link']
                  }
                  to={`/${path}`}>
                  {img}
                  <span className={s['text']}>{text}</span>
                  <div className={s['arrow']}>
                    <svg
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 1L6.79289 6.79289C7.18342 7.18342 7.81658 7.18342 8.20711 6.79289L14 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
          <ul className={s['sub-list']}>
            <li className={s['nav-item']}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${s['active']} ${s['nav-link']}` : s['nav-link']
                }
                to={'/notifies'}>
                <div className={s['nav-img']}>
                  <svg
                    width="25"
                    height="28"
                    viewBox="0 0 25 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 22.5H2.42653C1.87322 22.5 1.38198 22.1459 1.207 21.621V21.621C1.07695 21.2308 1.14143 20.802 1.38048 20.4673L2.58179 18.7855C3.18111 17.9464 3.52491 16.9519 3.57173 15.9219L3.89006 8.91876C3.96182 7.34002 4.48875 5.81574 5.40733 4.52974V4.52974C6.12643 3.523 7.06424 2.69223 8.15036 2.0998L8.22374 2.05978C10.5995 0.763883 13.4484 0.668498 15.9056 1.80258L16.6574 2.14955C17.8649 2.7069 18.9065 3.56915 19.6796 4.65141V4.65141C20.5413 5.85782 21.0343 7.28844 21.0987 8.7696L21.436 16.5276C21.4775 17.4827 21.8315 18.3978 22.4435 19.1322L23.5587 20.4705C23.8331 20.7997 23.9175 21.2474 23.782 21.6539V21.6539C23.6136 22.1592 23.1408 22.5 22.6081 22.5H17M8 22.5L8.9 24.3C9.28947 25.0789 9.92107 25.7105 10.7 26.1V26.1C11.8331 26.6666 13.1669 26.6666 14.3 26.1V26.1C15.0789 25.7105 15.7105 25.0789 16.1 24.3L17 22.5M8 22.5H17"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                  <Notify cName={'mobile-sidebar'} count={1} hasImage={false} />
                </div>
                <span className={s['text']}>Уведомления</span>
              </NavLink>
            </li>
            <li className={s['nav-item']}>
              <Link className={s['nav-link']} to="/" onClick={() => dispatch(setIsAuth(false))}>
                <div className={`${s['nav-img']} ${s['switch-acc']}`}>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" width="22" height="22" rx="2" fill="white" />
                    <circle cx="15" cy="7" r="4" fill="black" />
                    <path
                      d="M23 19C23 17.4087 22.1571 14.8826 20.6569 13.7574C19.1566 12.6321 17.1217 12 15 12C12.8783 12 10.8434 12.6321 9.34315 13.7574C7.84286 14.8826 7 17.4087 7 19L15 19H23Z"
                      fill="black"
                    />
                    <path
                      d="M3.5 23.5H22C22 24.432 21.5159 25.2971 20.7215 25.7845L20.3704 26H2C0.895431 26 0 25.1045 0 24V5.49995L0.167931 5.24806C0.687763 4.46834 1.56288 4 2.5 4V22.5C2.5 23.0522 2.94772 23.5 3.5 23.5Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className={s['text']}>Смена аккаунта</span>
              </Link>
            </li>
            <li className={s['nav-item']}>
              <Link className={s['nav-link']} to="/" onClick={() => dispatch(setIsAuth(false))}>
                <div className={`${s['nav-img']} ${s['exit']}`}>
                  <svg
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 1H3C1.89543 1 1 1.89543 1 3V22C1 23.1046 1.89543 24 3 24H15"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M8 12.5C8 12.5 15.6184 12.5 20.5 12.5M20.5 12.5C20 11.5 15 7 15 7M20.5 12.5C20.5 13 15 18 15 18"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <span className={s['text']}>Выйти</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button className={s['close']} onClick={() => dispatch(setIsSidebarShow(false))}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M28 2L2 28" stroke="white" strokeWidth="4" strokeLinecap="round" />
            <path d="M2 2L28 28" stroke="white" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MobileSidebar;
