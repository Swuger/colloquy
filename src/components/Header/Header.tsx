import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/header/logo.svg';
import music from '../../assets/img/header/music.svg';
import shop from '../../assets/img/header/shop.svg';
import patterns from '../../assets/img/header/patterns.svg';
import achieve from '../../assets/img/header/achieve.svg';
import theme from '../../assets/img/header/theme.svg';
import notify from '../../assets/img/header/notify.svg';
import ebalo from '../../assets/uploads/test/image.png';
import arrow from '../../assets/img/header/arrow.svg';

import s from './Header.module.scss';
import Notify from '../UI/Notify/Notify';
import FastMessages from './../FastMessages/FastMessages';
import HeaderAvatar from '../UI/HeaderAvatar/HeaderAvatar';
import MusicDropDown from '../MusicHeader/MusicDropDown/MusicDropDown';
import MusicHeader from '../MusicHeader/MusicHeader';
import ShopHeader from '../ShopHeader/ShopHeader';
import PatternsHeader from '../PatternsHeader/PatternsHeader';

const Header: React.FC = () => {
  const notifies = 99;
  const achieveIndicator = 12;

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
              <FastMessages />
              <MusicHeader />
            </div>
            <div className={s.header__actions}>
              <ShopHeader />
              <PatternsHeader />
              <button className={`${s['header__actions-achieve']} ${s['header-hover']}`}>
                <div className={s['header__notify-indicator']}>
                  <img className={s['header-icon']} src={achieve} alt="achieve" />
                  {achieveIndicator > 0 && (
                    <Notify cName="header-notify" count={achieveIndicator} hasImage={false} />
                  )}
                </div>
              </button>
            </div>
            <div className={s.header__profile}>
              <button className={s['header__profile-theme']}>
                <img className={s['header-icon']} src={theme} alt="theme" />
              </button>
              <button className={`${s['header__profile-notify']} ${s['header-hover']}`}>
                <div className={s['header__notify-indicator']}>
                  <img className={s['header-icon']} src={notify} alt="notify" />
                  {notifies > 0 && (
                    <Notify cName="header-notify" count={notifies} hasImage={false} />
                  )}
                </div>
              </button>
              <div className={`${s['header__profile-info']} ${s['header-hover']}`}>
                <HeaderAvatar
                  hasDelete={false}
                  className={'header__profile-image'}
                  img={ebalo}
                  indicatorClass={'header-indicator'}
                  title="Олег"
                />
                <span className={s['header__profile-name']} title="Максимилиан">
                  Максимилиан
                </span>
                <button className={s['header__profile-arrow']}>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
