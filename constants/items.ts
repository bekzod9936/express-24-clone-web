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
