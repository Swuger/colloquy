import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/header/logo.svg';
import chat from '../../assets/img/header/chat.svg';
import music from '../../assets/img/header/music.svg';
import shop from '../../assets/img/header/shop.svg';
import patterns from '../../assets/img/header/patterns.svg';
import achieve from '../../assets/img/header/achieve.svg';
import theme from '../../assets/img/header/theme.svg';
import notify from '../../assets/img/header/notify.svg';
import ebalo from '../../assets/img/header/ebalo.png';
import arrow from '../../assets/img/header/arrow.svg';

import s from './Header.module.scss';

const Header: React.FC = () => {
  console.log(s);

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.header__nav}>
          <div className={s.header__left}>
            <div className={s.header__logo}>
              <Link className={s['header__logo-link']} to="/">
                <img className={s['header__logo-img']} src={logo} alt="logo" />
                <span className={s['header__logo-title']}>colloquy</span>
              </Link>
            </div>
          </div>
          <div className={s.header__right}>
            <div className={s.header__act}>
              <button className={s['header__messages-btn']}>
                <img
                  className={`${s['header__messages-img']} ${s['header-msgs']}`}
                  src={chat}
                  alt="fast-messages"
                />
              </button>
              <button className={`${s['header__music-btn']} ${s['header-hover']}`}>
                <img className={s['header-icon']} src={music} alt="music" />
              </button>
            </div>
            <div className={s.header__actions}>
              <button className={`${s['header__actions-shop']} ${s['header-hover']}`}>
                <img className={s['header-icon']} src={shop} alt="shop" />
              </button>
              <button className={`${s['header__actions-patterns']} ${s['header-hover']}`}>
                <img className={s['header-icon']} src={patterns} alt="patterns" />
              </button>
              <button className={`${s['header__actions-achieve']} ${s['header-hover']}`}>
                <img className={s['header-icon']} src={achieve} alt="achieve" />
              </button>
            </div>
            <div className={s.header__profile}>
              <button className={s['header__profile-theme']}>
                <img className={s['header-icon']} src={theme} alt="theme" />
              </button>
              <button className={`${s['header__profile-notify']} ${s['header-hover']}`}>
                <img className={s['header-icon']} src={notify} alt="notify" />
              </button>
              <button className={`${s['header__profile-info']} ${s['header-hover']}`}>
                <div className={s['header__profile-image']}>
                  <img src={ebalo} alt="profile" />
                </div>
                <span className={s['header__profile-name']}>Олег</span>
                <button className={s['header__profile-arrow']}>
                  <img src={arrow} alt="arrow" />
                </button>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
