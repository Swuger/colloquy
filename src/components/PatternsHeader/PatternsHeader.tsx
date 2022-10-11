import React, { useRef, useState } from 'react';
import s from './PatternsHeader.module.scss';
import patterns from '../../assets/img/header/patterns.svg';
import useOnClickOutside from './../../hooks/useOnClickOutside';
import PatternsDropDown from './PatternsDropDown/PatternsDropDown';

const PatternsHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div
      className={`${s['header__actions-patterns']} ${s['header-hover']} ${
        isOpen ? s['active'] : ''
      }`}
      ref={ref}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg
          className={s['header-icon']}
          width="25"
          height="26"
          viewBox="0 0 25 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 18L9 20.5V25.5L5.5 23.5V18Z" fill="white" />
          <path d="M5.5 11L9 13.5V18.5L5.5 16.5V11Z" fill="white" />
          <path d="M0 7.5L4 10V15.5L0 13V7.5Z" fill="white" />
          <path d="M0 14.5L4 17V22.5L0 20V14.5Z" fill="white" />
          <path d="M16 4L19.5 6.5V11.5L16 9V4Z" fill="white" />
          <path d="M25 4L21 6.5V12L25 9V4Z" fill="white" />
          <path d="M19.5 14.5L16 17V22L19.5 20V14.5Z" fill="white" />
          <path d="M19 13L16 11V15L19 13Z" fill="white" />
          <path d="M14.3835 8.10854L14.3835 3.96189L11 5.99999L14.3835 8.10854Z" fill="white" />
          <path d="M14.5 18L10.5 20.5V25.5L14.5 23.5V18Z" fill="white" />
          <path d="M14.5 11L10.5 13.5V18.5L14.5 16.5V11Z" fill="white" />
          <path d="M10 7L6 9.5L10 12L14 9.5L10 7Z" fill="white" />
          <path d="M4.5 3.5L0.5 6L4.5 8.5L8.5 6L4.5 3.5Z" fill="white" />
          <path d="M10 0L6 2.5L10 5L14 2.5L10 0Z" fill="white" />
          <path d="M20.5 0L16.5 2.5L20.5 5L24.5 2.5L20.5 0Z" fill="white" />
        </svg>
      </button>
      {isOpen && <PatternsDropDown />}
    </div>
  );
};

export default PatternsHeader;
