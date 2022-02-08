import Card from 'components/Card';
import type { NextPage } from 'next';
import styles from 'styles/home.module.scss';
import { items, categories } from 'constants/items';
import Categories from 'components/Categories';
import Populars from 'components/Populars';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Categories />
        <div>Все маркет</div>
        <div className={styles.wraplist}>
          {items.map((v) => {
            return <Card value={v} key={v.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
