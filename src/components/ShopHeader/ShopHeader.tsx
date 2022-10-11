import React, { useRef, useState } from 'react';
import s from './ShopHeader.module.scss';
import shop from '../../assets/img/header/shop.svg';
import { Link } from 'react-router-dom';
import ShopDropDown from './ShopDropDown/ShopDropDown';
import useOnClickOutside from './../../hooks/useOnClickOutside';

const ShopHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div
      className={`${s['header__actions-shop']} ${s['header-hover']} ${isOpen ? s['active'] : ''}`}
      ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg
          className={s['header-icon']}
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
      </button>
      {isOpen ? <ShopDropDown /> : ''}
    </div>
  );
};

export default ShopHeader;
