import { useEffect, useRef, useState } from 'react';

const useScroll = () => {
  const ref: any = useRef(null);
  const [scrollWrap, setScrollWrap]: any = useState(null);
  const [scrollMax, setScrollMax] = useState(0);
  const [scroll, setScroll] = useState(0);
  const [client, setClient] = useState(0);

  useEffect(() => {
    setScrollWrap(ref.current);
    setScrollMax(ref.current.scrollWidth);
    setClient(ref.current.clientWidth);
  }, [ref]);

  const onScrollLeft = (scrollAmount: any) => {
    scrollWrap.scrollTo({
      top: 0,
      left: (scrollAmount -= 100),
      behavior: 'smooth',
    });
  };

  const onScrollRight = (scrollAmount: any) => {
    scrollWrap.scrollTo({
      top: 0,
      left: (scrollAmount += 100),
      behavior: 'smooth',
    });
  };

  const handleScroll = (e: any) => setScroll(Math.trunc(e.target.scrollLeft));

  return {
    ref,
    client,
    scroll,
    scrollMax,
    handleScroll,
    onScrollLeft,
    onScrollRight,
  };
};

export default useScroll;
