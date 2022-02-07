import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import {
  ISProps,
  IPProps,
  ILProps,
  socialList,
  pagesList,
  linkList,
  langList,
} from './constants';
import Select from 'components/Select';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');

  const handleChange = useCallback(
    (e) => {
      setLang(e.target.value);
      i18n.changeLanguage(e.target.value);
    },
    [i18n]
  );

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.leftside}>
          <div className={styles.left}>
            <div>Ⓒ 2021 Express 24</div>
            <div className={styles.social}>
              {socialList.map(({ path, icon, alt }: ISProps) => {
                return (
                  <Link href={path} key={alt} passHref>
                    <a>
                      <Image src={icon} alt={alt} width={20} height={20} />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={styles.right}>
            <div>
              {pagesList.map(({ path, title }: IPProps) => {
                return (
                  <Link href={path} key={title}>
                    {t(title)}
                  </Link>
                );
              })}
            </div>
            <div>
              {linkList.map(({ path, title }: IPProps) => {
                return (
                  <Link href={path} key={title}>
                    {t(title)}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <Select
            options={langList}
            defaultValue={lang}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
