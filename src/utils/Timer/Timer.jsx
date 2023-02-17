import { TimerBar } from './Timer.styled';
import { useEffect, useState } from 'react';

export const Timer = ({ initialState = 30, handleEnableVerify }) => {
  const [count, setCount] = useState(initialState);
  const closeEffect = timer => {
    clearTimeout(timer);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      }
      if (count === 0) {
        handleEnableVerify();
      }
    }, 1000);
    return () => closeEffect(timer);
  }, [count, handleEnableVerify]);

  return <TimerBar>{count || ''}</TimerBar>;
};
