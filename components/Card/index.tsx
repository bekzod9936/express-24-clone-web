import Link from 'next/link';
import Image from 'next/image';
import styles from './card.module.scss';

interface IProps {
  value: any;
}

const Card = ({ value }: IProps) => {
  const { id, logo, image, name, category } = value;
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Link href={`/${id}`}>
          <a>
            <div className={styles.image}>
              <Image src={image} alt="macbro" />
              <div className={styles.logo}>
                <Image src={logo} alt="logo" width={60} height={60} />
              </div>
            </div>
            <div className={styles.body}>
              <div className={styles.title}>{name}</div>
              <div className={styles.category}>{category}</div>
              <div className={styles.wrapfeedback}>
                <Image
                  src={'/icons/star.svg'}
                  alt="star"
                  width={15}
                  height={15}
                />
                <div className={styles.feedback}>Мало отзывов</div>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
