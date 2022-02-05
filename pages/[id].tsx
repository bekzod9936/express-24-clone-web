import { useRouter } from 'next/router';

const Comapany = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Comapany: {id}</p>;
};

export default Comapany;
