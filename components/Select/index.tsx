import Image from 'next/image';
import styles from './select.module.scss';
import { useTranslation } from 'react-i18next';

interface IOProps {
  value: string | number;
  label: string;
}

interface IProps {
  defaultValue: number | string;
  options: IOProps[];
  onChange: (e: any) => void;
}

const Select = ({ defaultValue, options = [], onChange }: IProps) => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map(({ value, label }: IOProps) => {
          return (
            <option value={value} key={value}>
              {t(label)}
            </option>
          );
        })}
      </select>
      <div className={styles.down}>
        <Image src={'/icons/down.svg'} alt="down" width={12} height={15} />
      </div>
    </div>
  );
};

export default Select;
