import Map from '../Map';
import Image from 'next/image';
import Modal from 'components/Modal';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './addressmodal.module.scss';

const AddressModal = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openMap, setOpenMap] = useState(false);

  const handleClick = useCallback(() => setOpen((prev) => !prev), []);

  const handleClickMap = useCallback(() => {
    setOpen(false);
    setOpenMap((prev) => !prev);
  }, []);

  return (
    <>
      <div className={styles.address} onClick={handleClick}>
        <Image src={'/icons/compos.svg'} width={30} height={30} alt="logo" />
        {t('address')}
      </div>
      <Modal open={open} onClick={handleClick}>
        <div className={styles.container}>
          <div className={styles.wrap}>
            <Image
              src={'/icons/location.svg'}
              alt="location.svg"
              width={120}
              height={120}
            />
            <div className={styles.title}>Доступ к геолокации</div>
            <div className={styles.text}>
              Чтобы мы могли автоматически определить ваш адрес, разрешите
              доступ к геолокации
            </div>
          </div>
          <button className={styles.button} onClick={handleClickMap}>
            Указать вручную
          </button>
        </div>
      </Modal>
      <Map open={openMap} onClick={handleClickMap} />
    </>
  );
};

export default AddressModal;
