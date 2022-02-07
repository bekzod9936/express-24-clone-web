import Image from 'next/image';
import styles from './search.module.scss';
import { useTranslation } from 'react-i18next';

interface IProps {
  value: string;
  onFocus?: () => void;
  onChange: (e: any) => void;
}

const Search = ({ value, onFocus, onChange }: IProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapinput}>
      <input
        value={value}
        onChange={onChange}
        placeholder={t('search')}
        className={styles.input}
        onBlur={onFocus}
        onFocus={onFocus}
      />
      <div className={styles.search}>
        <Image src={'/icons/search.svg'} width={40} height={40} alt="search" />
      </div>
    </div>
  );
};

export default Search;
