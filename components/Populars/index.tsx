import styles from './populars.module.scss';
import useScroll from './useScroll';
import Image from 'next/image';
import { populars } from 'constants/items';

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
    <>
      <div className={styles.title}>Актуальные товары</div>
      <div className={styles.wrapproduct}>
        <div className={styles.image}>
          <Image src={item.image} layout="fill" alt="product.png" />
        </div>
        <div className={styles.body}>
          <div className={styles.product}>{item.product}</div>
          <div className={styles.price}>{item.price}</div>
          <div className={styles.company}>{item.company}</div>
        </div>
      </div>
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
            {populars.map((popular) => (
              <div key={popular.product} className={styles.popular}>
                {popular.company}
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
    </>
  );
};

export default Populars;
