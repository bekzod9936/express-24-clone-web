import Link from 'next/link';
import Image from 'next/image';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import styles from './navbar.module.scss';
import Search from './components/Search';
import AddressModal from './components/AddressModal';

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.logo}>
          <Link href={'/'} passHref>
            <a>
              <Image
                src={'/icons/header-logo.svg'}
                width={150}
                height={40}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className={styles.leftside}>
          <div className={styles.inside}>
            <Search value="" onChange={() => {}} />
            <AddressModal />
          </div>
          <div className={styles.buttons}>
            <SignIn />
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
