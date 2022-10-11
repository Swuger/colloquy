import React, { useRef, useState } from 'react';
import Notify from '../UI/Notify/Notify';
import s from './NotifyHeader.module.scss';
import notifyIcon from '../../assets/img/header/notify.svg';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import NotifyDropDown from './NotifyDropDown/NotifyDropDown';

const NotifyHeader: React.FC = () => {
  const notifies = 99;
  const [isOpen, setisOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setisOpen(false));
  return (
    <div
      className={`${s['header__profile-notify']} ${s['header-hover']} ${isOpen ? s['active'] : ''}`}
      ref={ref}>
      <button onClick={() => setisOpen(!isOpen)}>
        <div className={s['header__notify-indicator']}>
          <svg
            className={s['header-icon']}
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
          {notifies > 0 && <Notify cName="header-notify" count={notifies} hasImage={false} />}
        </div>
      </button>
      {isOpen && <NotifyDropDown />}
    </div>
  );
};

export default NotifyHeader;
