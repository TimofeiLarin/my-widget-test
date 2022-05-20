import { useEffect } from 'react';

type TUseVisibleScroll = (boolean: boolean) => void;

const useVisibleScroll: TUseVisibleScroll = (boolean) => {
  useEffect(() => {
    if (boolean) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [boolean]);
};

export default useVisibleScroll;
