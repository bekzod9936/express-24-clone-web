import Image from 'next/image';
import Logo from 'public/header-logo.svg';
import Compos from 'public/compos.svg';
import search from 'public/search.svg';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <Link href={'/'} passHref>
            <a>
              <Image src={Logo} width={150} height={40} alt="logo" />
            </a>
          </Link>
        </div>
        <div className={styles.leftside}>
          <div className={styles.inside}>
            <div className={styles.wrapinput}>
              <input placeholder={t('search')} className={styles.input} />
              <div className={styles.search}>
                <Image src={search} width={40} height={40} alt="logo" />
              </div>
            </div>
            <div className={styles.address}>
              <Image src={Compos} width={30} height={30} alt="logo" />
              {t('address')}
            </div>
          </div>
          <div className={styles.buttons}>
            <button>{t('signin')}</button>
            <button>{t('signup')}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
