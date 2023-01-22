import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import chatSvg from '../../../assets/img/icons/chat.svg';
import Icon from '../../UI/Icon/Icon';
import s from './FastMessagesBtn.module.scss';

type FastMessagesBtnProps = {
  className: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
};

const FastMessagesBtn: React.FC<FastMessagesBtnProps> = ({ className, onClick }) => {
  return (
    <Link className={className} to="/fms" onClick={onClick}>
      {/* <svg
        className={`${s['header__messages-img']} ${s['header-msgs']}`}
        width="21"
        height="22"
        viewBox="0 0 21 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.6796 8.5C18.0149 7.7849 16.6796 7 16.6796 7C16.6796 7 17.07 9.48746 16.6796 11C16.3523 12.2683 15.1796 14 15.1796 14L13.1796 16C12.3986 16.781 12 16.7007 11.1796 17C10.4233 17.276 9.97746 17.3922 9.17963 17.5C8.21211 17.6307 6.67963 17.5 6.67963 17.5C6.67963 17.5 7.2268 18.4609 7.67963 19C8.4838 19.9574 9.03895 20.4881 10.1796 21C11.4393 21.5653 12.3062 21.6421 13.6796 21.5C14.908 21.3729 16.6796 20.5 16.6796 20.5C16.6796 20.5 17.7113 21.2547 18.6796 21.5C20.1796 22 20.353 21.4312 20.6796 21.5L20.1796 20V18L20.6796 16C20.6796 16 21.079 13.5102 20.6796 12C20.2771 10.4781 19.0708 8.92086 18.6796 8.5Z"
          fill="white"
        />
        <path
          d="M2.17965 16.4998C1.60389 16.6078 0.679626 16.4998 0.679626 16.4998L1.17963 14.9998C1.17963 14.9998 1.25905 13.9851 1.17965 13.3429C1.08814 12.6027 0.897191 12.2132 0.679647 11.4998C0.499528 10.9092 0.309026 10.6036 0.179647 9.99983C-0.0658316 8.85426 -0.0538582 8.14789 0.179647 6.99983C0.389224 5.9694 0.605236 5.38059 1.17965 4.49983C1.78304 3.57463 2.31029 3.18121 3.17965 2.49983C4.07576 1.79747 5 1.20638 5.67963 0.999796C6.21527 0.836983 7.8384 0.73659 9.17965 0.999825C10.6389 1.28622 11.516 1.57387 12.6796 2.49983C13.658 3.27834 14.0942 3.89508 14.6796 4.99983C15.4336 6.42257 15.7623 7.39178 15.6796 8.99983C15.594 10.6659 14.9589 11.7333 14.1796 12.9998C13.5245 14.0647 12.1796 14.9998 12.1796 14.9998C12.1796 14.9998 10.7831 15.7193 9.67963 15.9998C8.73342 16.2404 7.67963 16.4999 7.17963 16.4998C5.94468 16.4998 4.17965 15.4998 4.17965 15.4998C4.17965 15.4998 3.03793 16.3389 2.17965 16.4998Z"
          fill="white"
        />
        <circle cx="4" cy="9" r="1" fill="black" />
        <circle cx="8" cy="9" r="1" fill="black" />
        <circle cx="12" cy="9" r="1" fill="black" />
      </svg> */}
      <div className={s['header__messages-img']}>
        <Icon src={chatSvg} id={'messages'} className={'header-messages'} />
      </div>
    </Link>
  );
};

export default FastMessagesBtn;
