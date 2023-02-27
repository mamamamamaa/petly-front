import { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const useSwiper = (options = {}) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      // initialize the Swiper instance
      const swiper = new Swiper(swiperRef.current, options);

      // return a cleanup function to destroy the Swiper instance
      return () => {
        swiper.destroy(true, true);
      };
    }
  }, [options]);

  return swiperRef;
};

export default useSwiper;
