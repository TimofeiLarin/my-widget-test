import { useEffect, useState } from 'react';

type TUseScrollUp = (
  length: number
) => [scrollUp: boolean, handleUp: () => void];

const useScrollUp: TUseScrollUp = (length) => {
  const [scrollUp, setScrollUp] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e: Event) => {
    const document = e.target as Document;
    if (document.documentElement.scrollTop > length) {
      setScrollUp(true);
    } else {
      setScrollUp(false);
    }
  };

  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return [scrollUp, handleUp];
};

export default useScrollUp;
