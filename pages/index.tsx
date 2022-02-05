import Card from 'components/Card';
import type { NextPage } from 'next';
import styles from 'styles/home.module.scss';
import { items } from 'constants/items';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
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
