import useMap from './useMap';
import Image from 'next/image';
import Search from '../Search';
import Modal from 'components/Modal';
import styles from './map.module.scss';
import Select from 'components/Select';
import { YMaps, ZoomControl, Map } from 'react-yandex-maps';

interface IProps {
  open: boolean;
  onClick: () => void;
}

const YandexMap = ({ open, onClick }: IProps) => {
  const {
    focus,
    search,
    regions,
    handleRef,
    searchList,
    handleFocus,
    handlePlaceMark,
    handleSearchChage,
    defaultToshkentAddress,
  } = useMap();

  return (
    <Modal open={open} onClick={onClick}>
      <div className={styles.container}>
        <button className={styles.closebutton} onClick={onClick}>
          <Image src={'/icons/close.svg'} alt="close" width={20} height={20} />
        </button>
        <div className={styles.pointer}>
          <Image
            src={'/icons/pointer.svg'}
            alt="pointer"
            width={35}
            height={35}
          />
        </div>
        <div className={styles.searchmap}>
          <div className={styles.searchwrap}>
            <Search
              onFocus={handleFocus}
              value={search}
              onChange={handleSearchChage}
            />
            {focus && searchList?.length && search ? (
              <ul className={styles.ul}>
                {searchList?.map((v: any) => (
                  <li key={v.GeoObject.name}>{v.GeoObject.name}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className={styles.mapselect}>
          <div className={styles.selectwrap}>
            <button className={styles.button}>Подтвердить адрес</button>
            <Select options={regions} defaultValue={5} onChange={() => {}} />
          </div>
        </div>
        <YMaps
          query={{
            ns: 'use-load-option',
            apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_KEY,
            load: 'Map,control.GeolocationControl,control.FullscreenControl',
          }}
        >
          <Map
            instanceRef={handleRef}
            className={styles.map}
            onBoundsChange={handlePlaceMark}
            defaultState={{
              center: defaultToshkentAddress,
              zoom: 14,
            }}
          >
            <ZoomControl options={{ float: 'left' }} />
          </Map>
        </YMaps>
      </div>
    </Modal>
  );
};

export default YandexMap;
