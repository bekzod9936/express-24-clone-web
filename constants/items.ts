import Zoo from 'public/items/zoo.jpeg';
import MacBro from 'public/items/macbro.jpeg';
import Burger from 'public/items/burger.jpeg';
import ZooLogo from 'public/items/zoologo.jpeg';
import BurgerLogo from 'public/items/burgerlogo.jpeg';
import MacBroLogo from 'public/items/macbrologo.jpeg';

export const items = [
  {
    id: 0,
    logo: ZooLogo,
    image: Zoo,
    name: 'Zooplaneta',
    category: 'Зоотовары',
  },
  {
    id: 1,
    logo: BurgerLogo,
    image: Burger,
    name: 'Полуфабрикаты от Burger & Lounge Grill Bar',
    category: 'Продукты',
  },
  {
    id: 2,
    logo: MacBroLogo,
    image: MacBro,
    name: 'MacBro',
    category: 'Новинки, Электроника',
  },
];

export const categories = [
  'Новинки',
  'Продукты',
  'Красота',
  'Детям',
  'Дом и сад',
  'Электроника',
  'Мебель',
  'Для ремонта',
  'Спорт',
  'Одежда',
  'Аксессуары',
  'Автотовары',
  'Зоотовары',
  'Канцтовары',
  'Книги',
  'Творчество',
  'Здоровье',
  'Цветы',
  'ПП',
];
interface IPProps {
  product: string;
  company: string;
  price: number;
  logo: string;
  image: string;
}
export const populars: IPProps[] = [
  {
    price: 205000,
    product: 'Набор шахматы+фляга',
    company: 'Бюро Находок - Магазин подарков',
    logo: '/populars/pic1logo.jpeg',
    image: '/populars/pic1.jpeg',
  },
  {
    price: 150000,
    product:
      'Ароматизатор для авто ESTER #1 c ароматом Paco Rabanna One Million',
    company: 'Автопарфюм ESTER',
    logo: '/populars/pic2logo.jpeg',
    image: '/populars/pic2.jpeg',
  },

  {
    price: 540000,
    product: 'Philips MG3731/15 Multigroomer',
    company: 'Philips',
    logo: '/populars/pi3logo.jpeg',
    image: '/populars/pic3.jpeg',
  },
  {
    price: 990000,
    product: 'HUGO BOSS BOTTLED EDT 100ml',
    company: 'AROMA PARFUM',
    logo: '/populars/pic4logo.jpeg',
    image: '/populars/pic4.jpeg',
  },
  {
    price: 255000,
    product: 'Ночник "Какаши. Наруто" ',
    company: 'Welight',
    logo: '/populars/pic5logo.jpeg',
    image: '/populars/pic5.jpeg',
  },
];
