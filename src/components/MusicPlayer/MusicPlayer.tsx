import React from 'react';
import s from './MusicPlayer.module.scss';
import trackIcon from '../../assets/uploads/test/image2.png';
import switchTrackIcon from '../../assets/img/icons/track-switch.svg';
import playIcon from '../../assets/img/icons/play.svg';
import pauseIcon from '../../assets/img/icons/pause.svg';
import volumeIcon from '../../assets/img/icons/volume.svg';
import repeatIcon from '../../assets/img/icons/repeat.svg';
import shuffleIcon from '../../assets/img/icons/shuffle.svg';
import forwardIcon from '../../assets/img/icons/forward.svg';
import closeIcon from '../../assets/img/icons/close.svg';
import addIcon from '../../assets/img/icons/add.svg';
import { Link } from 'react-router-dom';

const MusicPlayer: React.FC = () => {
  return (
    <div className={s['player']}>
      <div className={s['player-pannel']}>
        <button className={s['prev-track']}>
          <img src={switchTrackIcon} alt="prev-track" />
        </button>
        <button className={s['play-track']}>
          <img src={playIcon} alt="play" />
        </button>
        {/* <button className={s['pause-track']}>
                    <img src={pauseIcon} alt="pause" />
                </button> */}
        <button className={s['next-track']}>
          <img src={switchTrackIcon} alt="next-track" />
        </button>
      </div>
      <div className={s['track-wrapper']}>
        <div className={s['track-img']}>
          <img src={trackIcon} alt="track-img" />
        </div>
        <div className={s['track-info']}>
          <span className={s['track-name']}>best dubstep</span>
          <div className={s['track-row']}>
            <Link className={s['track-author']} to="/">
              best author
            </Link>
            <span className={s['track-time']}>01:12</span>
          </div>
          <div className={s['play-line']}>
            <div className={s['play-line-complete']}></div>
          </div>
        </div>
        <div className={s['volume-wrapper']}>
          <button className={s['volume-icon']}>
            <svg
              width="31"
              height="25"
              viewBox="0 0 31 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 6.5C20 6.5 20.6757 7.68922 21 8.5C21.1775 8.94364 21.349 9.36969 21.4435 9.65315C21.7466 10.5626 22 11.5887 22 12C22 13.5 21.7647 13.706 21.5 14.5C21 16 20 18 20 18"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M24.5 1.5C24.5 1.5 26.1324 3.76486 27 5.5C27.5 6.5 27.5 6.5 27.887 7.3063C28.1176 7.78679 28.2673 8.29929 28.3634 8.80654C28.6129 10.124 28.5 11.4061 28.5 12C28.5 13.5 28.4574 16.0853 28 17C26.5 20 24.5 23 24.5 23"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M5.51006 7.99993H1.01006C0.520792 7.99993 0.0112342 8.2654 0.0100588 8.75467C0.00346401 11.4999 0.000389557 13.4999 0.0100588 15.4999C0.0127289 16.0522 0.457774 16.4999 1.01006 16.4999H5.51006C6.00346 16.4999 5.5 16.4999 8.5 18.9999C9.22044 19.6003 10.268 20.4219 10.7498 20.7976C10.9231 20.9327 11.0867 21.0783 11.2483 21.227C11.6015 21.552 12.2983 22.1491 13 22.4999C13.2168 22.6083 13.511 22.627 13.7814 22.6117C14.2443 22.5854 14.6203 22.2642 14.8309 21.8511C14.9487 21.6203 15.01 21.3717 15.0098 21.1126C15.0082 18.9564 15.001 8.3217 15.0101 2.49995C15.0111 1.79592 13.6815 1.41505 13.5101 1.49993C12.8469 1.82818 12.408 2.15645 12.1847 2.34322C12.0647 2.44356 11.9522 2.54883 11.8328 2.64979C10.7903 3.53104 5.50411 7.99993 5.51006 7.99993Z"
                fill="white"
              />
            </svg>
          </button>
          <div className={s['volume-line']}>
            <div className={s['volume-line-complete']}></div>
            <div className={s['volume-line-point']}></div>
          </div>
        </div>
      </div>
      <div className={s['track-actions']}>
        <button className={s['repeat-icon']}>
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.04003 17.8256C2.75102 17.9433 2.40019 18.0549 2.1085 18.0549C1.81186 18.0549 1.45404 17.9395 1.16229 17.8196C0.790296 17.6667 0.502522 17.3712 0.301561 17.0228C0.104 16.6803 0 16.2919 0 15.8965V15.504L-2.28621e-06 15.4989C-0.000173499 15.4142 -0.00955918 10.5155 0.108728 9.5549C0.293437 8.05489 1.00303 6.99999 1.50326 6.5C2.00349 6.00001 1.60948 6.39052 2 6L2.49979 5.50021L2.50044 5.49957C3.0005 4.99993 3.46819 4.84707 4.1085 4.55489C4.60997 4.32606 5.36229 4.17619 5.78689 4.10442C6.00069 4.06829 6.21726 4.05489 6.43408 4.05489H24.4005C24.6431 4.05489 24.7575 3.74642 24.6085 3.55489C24.3404 3.21024 24.2032 2.98111 24.1085 2.55489C24.0238 2.17366 24.0238 1.93611 24.1085 1.55489C24.2032 1.12866 24.2998 0.863623 24.6085 0.554887C24.8171 0.346242 25.2005 0.191248 25.4271 0.11268C25.5472 0.0710649 25.6708 0.0417639 25.7969 0.0259936C26.0121 -0.000932792 26.3659 -0.025993 26.6085 0.0548865C27.1324 0.229534 27.6947 0.68912 28.1085 1.0549C28.4623 1.36767 28.747 1.75104 29.1085 2.0549C29.5501 2.42607 29.8743 2.7829 30.1085 3.0549C30.2508 3.22014 30.3798 3.3663 30.4861 3.48518C30.6819 3.7041 30.902 3.89968 31.1216 4.09479L31.1282 4.10065C31.2582 4.21614 31.4208 4.36721 31.6085 4.5549C31.9172 4.86364 32.0138 5.12867 32.1085 5.55489C32.1932 5.93611 32.1932 6.17366 32.1085 6.55489C32.0628 6.76032 31.945 7.00004 31.8352 7.19326C31.6948 7.44038 31.5075 7.65592 31.3065 7.85689L27.9105 11.2529C27.7095 11.4539 27.494 11.6412 27.2469 11.7816C27.0537 11.8914 26.8139 12.0092 26.6085 12.0549C26.2273 12.1396 25.9897 12.1396 25.6085 12.0549C25.1823 11.9602 24.9172 11.8636 24.6085 11.5549C24.2998 11.2462 24.2032 10.9811 24.1085 10.5549C24.0238 10.1737 24.0238 9.93611 24.1085 9.55489C24.2032 9.12866 24.3404 8.89953 24.6085 8.55489C24.7575 8.36335 24.6431 8.05489 24.4005 8.05489H6.84557C6.36085 8.05489 5.88279 8.16774 5.44924 8.38451C5.22292 8.49768 5.00847 8.6352 4.82868 8.81325C4.74967 8.8915 4.66888 8.97726 4.6085 9.05489C4.55846 9.11922 4.50969 9.19437 4.46344 9.27407C4.17822 9.76562 4.1085 10.3453 4.1085 10.9136V16.0669C4.1085 16.3878 4.03378 16.7043 3.89026 16.9914C3.70659 17.3587 3.42039 17.6706 3.04003 17.8256Z"
              fill="#9b9b9b"
            />
            <path
              d="M29.1318 14.2293C29.4209 14.1116 29.7717 14 30.0634 14C30.36 14 30.7178 14.1154 31.0096 14.2353C31.3816 14.3882 31.6694 14.6837 31.8703 15.0321C32.0679 15.3746 32.1719 15.763 32.1719 16.1584V16.5509L32.1719 16.556C32.172 16.6407 32.1814 21.5394 32.0631 22.5C31.8784 24 31.1688 25.0549 30.6686 25.5549C30.1684 26.0549 30.5624 25.6643 30.1719 26.0549L29.6721 26.5547L29.6714 26.5553C29.1714 27.0549 28.7037 27.2078 28.0634 27.5C27.5619 27.7288 26.8096 27.8787 26.385 27.9504C26.1712 27.9866 25.9546 28 25.7378 28L7.77142 28C7.52877 28 7.41441 28.3085 7.56338 28.5C7.83144 28.8446 7.96866 29.0738 8.06338 29.5C8.14809 29.8812 8.14809 30.1188 8.06338 30.5C7.96866 30.9262 7.87211 31.1912 7.56338 31.5C7.35473 31.7086 6.97138 31.8636 6.74475 31.9422C6.62471 31.9838 6.50107 32.0131 6.375 32.0289C6.15976 32.0558 5.80602 32.0809 5.56338 32C5.03943 31.8253 4.47717 31.3658 4.06338 31C3.70956 30.6872 3.42487 30.3038 3.06338 30C2.62181 29.6288 2.2976 29.272 2.06338 29C1.92109 28.8347 1.7921 28.6886 1.68576 28.5697C1.48994 28.3508 1.26985 28.1552 1.05028 27.9601L1.04369 27.9542C0.913721 27.8387 0.751066 27.6877 0.563377 27.5C0.254641 27.1912 0.158092 26.9262 0.0633774 26.5C-0.0213394 26.1188 -0.0213394 25.8812 0.0633774 25.5C0.109032 25.2945 0.226833 25.0548 0.33663 24.8616C0.477045 24.6145 0.664412 24.3989 0.865385 24.198L4.26137 20.802C4.46234 20.601 4.67789 20.4137 4.925 20.2732C5.11822 20.1634 5.35794 20.0456 5.56338 20C5.9446 19.9153 6.18215 19.9153 6.56338 20C6.9896 20.0947 7.25464 20.1912 7.56338 20.5C7.87211 20.8087 7.96866 21.0738 8.06338 21.5C8.14809 21.8812 8.14809 22.1188 8.06338 22.5C7.96866 22.9262 7.83144 23.1553 7.56338 23.5C7.41441 23.6915 7.52877 24 7.77142 24L25.3263 24C25.811 24 26.2891 23.8871 26.7226 23.6704C26.949 23.5572 27.1634 23.4197 27.3432 23.2416C27.4222 23.1634 27.503 23.0776 27.5634 23C27.6134 22.9357 27.6622 22.8605 27.7084 22.7808C27.9937 22.2892 28.0634 21.7096 28.0634 21.1413V15.988C28.0634 15.6671 28.1381 15.3505 28.2816 15.0635C28.4653 14.6962 28.7515 14.3842 29.1318 14.2293Z"
              fill="#9b9b9b"
            />
          </svg>
        </button>
        <button className={s['shuffle-icon']}>
          <svg
            width="32"
            height="30"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.94657 4.5C2.56162 4.5 0 4.5 0 4.5V8.70216H3.95974H4.85385C4.85385 8.70216 5.02186 8.82 5.5 9C5.85878 9.13506 6.13343 9.26281 6.5 9.5C7.75884 10.3145 8 11 8 11C8 11 9.02369 12.4379 10 14L12.5 18L14 20.5L15.5 22.5L17 24L19 25L21 25.5H23.5V29L24 29.5C24.5 30 25.5 29.5 25.5 29.5C25.5 29.5 26.3958 28.5668 27 28C27.0964 27.9096 32 24.5 32 23.5V23L31 22L28 19.5C28 19.5 27.2248 18.6541 26.5 18C26.09 17.63 25 17 25 17L24.5 17L24 17C24 17 23.5 17.2929 23.5 18V21C23.5 21 20.8493 21.1746 20.5 21C20.253 20.8765 19.6953 20.6953 19.5 20.5L18.5 19.5L17.5 18L16.5 16.5L15 14L14 12.5L12.5 10C11.9142 9.02369 11.1858 7.70433 11 7.5C10.8142 7.29567 10.7617 7.26172 10.5 7L10 6.5L9.5 6L8.5 5.5L7.5 5L6 4.50001L4.5 4.5C5.13296 4.5 4.7262 4.5 3.94657 4.5Z"
              fill="#9b9b9b"
            />
            <path
              d="M17 13L14.5 9L15.5025 7.22223C15.5025 7.22223 16.3695 6.41505 17 6C17.7294 5.51988 19 5 19 5L21 4.5H23.5V1L24 0.5C24.5 -1.90735e-06 25.5 0.5 25.5 0.5C25.5 0.5 32 5.5 32 6.5C32 7.6527 31.5 7.5 30.0573 8.72223C29.2471 9.4086 28 10.5 28 10.5C28 10.5 27.2273 11.0681 26.5025 11.7222C26.0924 12.0922 25.2078 12.7222 25.2078 12.7222C25.2078 12.7222 24.7761 13 24.5 13C24.2239 13 24.0025 12.7222 24.0025 12.7222C24.0025 12.7222 23.5025 12.4293 23.5025 11.7222V8.72223C23.5025 8.72223 20.8493 8.82535 20.5 9C20.253 9.12349 19.6953 9.30474 19.5 9.5C19.1095 9.89052 18.5025 10.2222 18.5025 10.2222L18 11L17.5025 11.7222L17 13Z"
              fill="#9b9b9b"
            />
            <path
              d="M12 21L10 18L9.5 17L8 19C7.50294 19.6627 6.63508 20.4325 6.5 20.5C6.36492 20.5675 5.31377 21.3006 5 21.3006H0V25.5H1.5H6C6.5 25.5 8.5 24.5 10.5 23C10.6439 22.8921 12 21 12 21Z"
              fill="#9b9b9b"
            />
          </svg>
        </button>
        <button className={s['forward-icon']}>
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
        <button className={s['add-icon']}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <line
              x1="7"
              y1="1"
              x2="7"
              y2="13"
              stroke="#9b9b9b"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="13"
              y1="7"
              x2="1"
              y2="7"
              stroke="#9b9b9b"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
