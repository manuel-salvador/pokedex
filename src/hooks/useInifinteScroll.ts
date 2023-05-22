import { useEffect, useRef } from 'react';

export default function useInifinteScroll(onScrollEnd: () => void) {
  const scrollRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const element = scrollRef.current;

    const handleScroll = () => {
      if (element && element.scrollTop + element.clientHeight === element.scrollHeight) {
        onScrollEnd();
      }
    };

    if (element) {
      element.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onScrollEnd]);
  return { scrollRef };
}
