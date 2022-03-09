import Image from 'next/image';
import styles from './popular.module.scss';
interface IProps {
  values: {
    product: string;
    company: string;
    price: number;
    logo: string;
    image: string;
  };
}
const Popular = ({ values }: IProps) => {
  const { product, company, price, logo, image } = values;
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Image
          src={image}
          alt="prodectimage.png"
          width={'100%'}
          height={'100%'}
        />
      </div>
      <div className={styles.body}>
        <div className={styles.title}>{product}</div>
        <div className={styles.price}>{price}</div>
        <div className={styles.company}>{company}</div>
        <div className={styles.logo}>
          <Image src={logo} alt="logo.svg" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
