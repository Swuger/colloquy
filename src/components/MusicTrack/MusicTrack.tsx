import React from 'react';
import s from './MusicTrack.module.scss';
import ebalo from '../../assets/uploads/test/image2.png';
import { Link } from 'react-router-dom';
import formatTime from '../../utils/formatTime';

type MusicTrackProps = {
  img: string;
  title: string;
  author: string;
  time: number;
  isRecs: boolean;
};

const MusicTrack: React.FC<MusicTrackProps> = ({ img, title, author, time, isRecs }) => {
  return (
    <div className={`${s['wrapper']} ${isRecs && s['recs-wrapper']}`}>
      <div className={s['track-img']}>
        <img src={ebalo} alt="track" />
      </div>
      <div className={`${isRecs ? s['track-recs'] : s['track-info']}`}>
        <span className={isRecs ? s['recs-title'] : s['track-title']} title={title}>
          {title}
        </span>
        {!isRecs && <span className={s['separator']}>&mdash;</span>}
        <Link className={isRecs ? s['recs-author'] : s['track-author']} to="/" title={author}>
          {author}
        </Link>
        <span className={`${s['track-time']} ${isRecs && s['recs-time']}`}>{formatTime(time)}</span>
      </div>
      <div className={isRecs ? s['recs-actions'] : s['track-actions']}>
        <button className={isRecs ? s['recs-forward'] : s['forward']}>
          <svg
            width="38"
            height="30"
            viewBox="0 0 38 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.9986 8C19.5398 7.67914 21.9986 7.5 21.9986 7.5V1C21.9986 0.400341 22.4986 0 22.9986 0C23.4986 0 23.9986 0.5 23.9986 0.5L30.4986 7L36.9986 13L37.5 13.5L36.9986 14L35.4986 15.5L23.4986 27H22.4986L21.9986 26V19.5H18.9986C18.9986 19.5 16.8398 19.6717 15.4986 20C13.8782 20.3967 13.0167 20.8081 11.4986 21.5C10.704 21.8621 10.2429 22.0433 9.49864 22.5C9.12567 22.7289 7.92084 23.6557 6.99864 24.5C6.38761 25.0594 6.04506 25.3773 5.49864 26C4.85468 26.7338 3.99864 28 3.99864 28C3.60812 28.5858 3.29605 29.0556 2.99978 29.5C2.7035 29.9444 2.99864 30 1.99864 30C1.7225 30 1.49978 30 0.998641 29.5C0.860414 29.3621 0.999777 28 0.999777 28C0.999777 28 0.99933 27.5 0.999777 26.5C1 26 1.49864 24 1.49864 24C1.49864 24 2.02844 22.1419 2.49864 21C2.99737 19.7888 3.34374 19.1344 3.99864 18C4.70264 16.7806 5.09299 16.0782 5.99864 15C6.70909 14.1542 7.16103 13.7201 7.99864 13C8.73899 12.3636 9.19911 12.0603 9.99864 11.5C10.5752 11.096 10.8964 10.8647 11.4986 10.5C12.619 9.82145 13.2797 9.47949 14.4986 9C15.8215 8.47964 16.607 8.28974 17.9986 8Z"
              fill="#9b9b9b"
            />
          </svg>
        </button>
        <button className={s['delete']}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M28 2L2 28" stroke="#9b9b9b" strokeWidth="4" strokeLinecap="round" />
            <path d="M2 2L28 28" stroke="#9b9b9b" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MusicTrack;
