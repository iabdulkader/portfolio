import React, { useEffect } from "react";

type Props = {
  target: React.RefObject<HTMLDivElement>;
};

function useElementPercentage({ target }: Props) {
  const [percentage, setPercentage] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = target.current;
      if (divElement) {
        const rect = divElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.max(
          0,
          Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
        );
        const visiblePercentage =
          (visibleHeight / divElement.offsetHeight) * 100;
        setPercentage(Math.ceil(visiblePercentage));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [target]);

  return { percentage };
}

export default useElementPercentage;
