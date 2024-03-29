import React, { useEffect, useRef } from 'react';
import searchSvg from '../../../assets/img/icons/search.svg';
import closeSvg from '../../../assets/img/icons/close.svg';
import sendSvg from '../../../assets/img/icons/send.svg';
import s from './Input.module.scss';
import Icon from '../Icon/Icon';
import { useAppDispatch } from '../../../redux/store';
import { setIsUploadFilesModalOpen } from '../../../redux/modal/slice';

type InputProps = {
  className: string;
  placeholder: string;
  type: string;
  inputType: 'send' | 'search' | 'default';
  id?: string;
  isTextarea?: boolean;
  page?: string;
  button?: any;
  initialValue?: string;
  value: string | null;
  setValue: (value: any) => void;
  name: string;
  classOptions?: {
    searchIcon?: string;
    closeIcon?: string;
    paperclipIcon?: string;
    smileIcon?: string;
    microIcon?: string;
    sendIcon?: string;
  };
  onChange?: (value: any) => void;
};

const Input: React.FC<InputProps> = ({
  className,
  placeholder,
  type = 'default',
  inputType,
  button,
  isTextarea,
  id,
  page,
  name,
  value,
  setValue,
  initialValue,
  onChange,
  classOptions = {
    searchIcon: 'search-icon',
    closeIcon: 'close-icon',
    paperclipIcon: 'paperclip-icon',
    smileIcon: 'smile-icon',
    microIcon: 'micro-icon',
    sendIcon: 'send-icon',
  },
}) => {
  // const [value, setValue] = useState(initialValue ? initialValue : '');
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { searchIcon, closeIcon, paperclipIcon, smileIcon, microIcon, sendIcon } = classOptions;

  const dispatch = useAppDispatch();

  const handleModalOpen = (e: any) => {
    e.stopPropagation();
    dispatch(setIsUploadFilesModalOpen(true));
  };

  useEffect(() => {
    if (button) button.current = buttonRef.current;
    if (inputRef.current && initialValue) {
      inputRef.current.style.width = initialValue?.length * 20 + 'px';
    }
  }, [button, initialValue]);

  const textAreaAdjust = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = '1px';
    e.target.style.height = `${e.target.scrollHeight}px`;
    if (e.target.value === '') {
      e.target.style.height = '1px';
    }
    setValue({ [name]: e.target.value });
  };

  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange ? onChange(e) : setValue({ [name]: e.target.value });
  };

  const clearInputHandler = () => {
    setValue({ [name]: '' });
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      {inputType === 'default' && (
        <div className={s['input-block']}>
          <input
            className={`${s['input']} ${s[className]}`}
            type={type}
            placeholder={placeholder}
            value={value ? value : ''}
            name={name}
            onChange={changeValueHandler}
            id={id}
            ref={inputRef}
          />
        </div>
      )}
      {inputType === 'search' && (
        <div className={s['input-block']}>
          <Icon src={searchSvg} id={'search'} className={'inp-search'} />
          <input
            className={`${s['input']} ${s[className]}`}
            type={type}
            placeholder={placeholder}
            value={value ? value : ''}
            name={name}
            onChange={changeValueHandler}
            ref={inputRef}
            id={id}
          />
          <button
            className={`${s[closeIcon ? closeIcon : 'close-icon']} ${value && s.active}`}
            onClick={clearInputHandler}>
            <Icon
              src={closeSvg}
              id={'close'}
              className={'close-inp'}
              hoverClass={value ? 'active' : ''}
            />
          </button>
        </div>
      )}
      {inputType === 'send' && (
        <div className={s['input-block']}>
          {isTextarea ? (
            <textarea
              className={s[className]}
              placeholder={placeholder}
              name={name}
              onChange={textAreaAdjust}></textarea>
          ) : (
            <input
              className={`${s['input']} ${s[className]}`}
              type={type}
              placeholder={placeholder}
              value={value ? value : ''}
              name={name}
              onChange={changeValueHandler}
              id={id}
            />
          )}
          {page === 'message' ? (
            <button className={s[sendIcon ? sendIcon : 'send-icon']}>
              <Icon src={sendSvg} id={'send'} className={'gray'} />
            </button>
          ) : (
            ''
          )}
        </div>
      )}
    </>
  );
};

export default Input;
