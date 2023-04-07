import { useEffect, useRef, useState } from "react";

const useScrollPercentage = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const scrollPercentage = Math.max(
          0,
          Math.min(1, (windowHeight - top) / height)
        );
        setScrollPercentage(Math.ceil(scrollPercentage * 100));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);

  return {
    percentage: scrollPercentage,
  };
};

export default useScrollPercentage;
