import React from 'react';
import s from './UploadMediaModal.module.scss';
import Icon from '../../components/UI/Icon/Icon';
import ModalLayout from '../../layouts/ModalLayout/ModalLayout';
import video from '../../assets/videos/video.mp4';
import closeSvg from '../../assets/img/icons/close.svg';
import Button from '../../components/UI/Button/Button';
import MusicTrack from '../../components/MusicTrack/MusicTrack';
import ebalo from '../../assets/uploads/test/ebalo.png';
import DragAndDropFile from '../../components/DragAndDropFile/DragAndDropFile';

type UploadMediaModalProps = {
  onClose: () => void;
  button: any;
  mediaType: 'story' | 'audio';
};

const UploadMediaModal: React.FC<UploadMediaModalProps> = ({ onClose, button, mediaType }) => {
  const title = [
    { id: 1, title: 'Создать историю', type: 'story' },
    { id: 2, title: 'Добавить музыку', type: 'audio' },
  ].find(({ type }) => type === mediaType)?.title;

  const isMediaUploaded = false;

  return (
    <ModalLayout
      className={mediaType === 'audio' && isMediaUploaded ? 'audio' : 'media'}
      onClose={onClose}
      button={button}
      title={title}>
      {isMediaUploaded && mediaType === 'story' ? (
        <>
          <div className={s['video']}>
            <video src={video}></video>
            <button className={s['close']}>
              <Icon src={closeSvg} id={'close'} className={'white'} />
            </button>
          </div>
          <Button className={'add-media'} text={'Опубликовать'} />
        </>
      ) : isMediaUploaded && mediaType === 'audio' ? (
        <>
          <div className={s['track']}>
            <MusicTrack
              img={ebalo}
              title={'best dubstep'}
              author={'best author'}
              time={12}
              isRecs={false}
              className={'upload-music'}
            />
          </div>
          <Button className={'add-media'} text={'Опубликовать'} />
        </>
      ) : (
        <DragAndDropFile mediaType={'audio'} />
      )}
    </ModalLayout>
  );
};

export default UploadMediaModal;
