import styles from './populars.module.scss';
import useScroll from './useScroll';
import { populars } from 'constants/items';
import Popular from './Popular';

const Populars = () => {
  const {
    ref,
    client,
    scroll,
    scrollMax,
    handleScroll,
    onScrollLeft,
    onScrollRight,
  } = useScroll();

  const item = populars[0];

  return (
    <div className={styles.container}>
      <Popular values={item} />
    </div>
  );
};

export default Populars;
