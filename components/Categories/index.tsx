import Image from 'next/image';
import useScroll from './useScroll';
import { categories } from 'constants/items';
import styles from './categories.module.scss';

const Categories = () => {
  const {
    ref,
    client,
    scroll,
    scrollMax,
    handleScroll,
    onScrollLeft,
    onScrollRight,
  } = useScroll();

  return (
    <div className={styles.container}>
      {!!scroll && (
        <button
          onClick={() => {
            onScrollLeft(scroll);
          }}
          className={styles.button}
        >
          <Image
            src={'/icons/down.svg'}
            alt="down.svg"
            width={10}
            height={10}
          />
        </button>
      )}
      <div className={styles.wrap}>
        <div
          ref={ref}
          id="scrollWrap"
          className={styles.scrollwrap}
          onScroll={handleScroll}
        >
          {categories.map((category) => (
            <div key={category} className={styles.category}>
              {category}
            </div>
          ))}
        </div>
      </div>
      {!(scrollMax === scroll + client) && (
        <button
          onClick={() => {
            onScrollRight(scroll);
          }}
          className={styles.button}
        >
          <Image
            src={'/icons/down.svg'}
            alt="down.svg"
            width={10}
            height={10}
          />
        </button>
      )}
    </div>
  );
};

export default Categories;
