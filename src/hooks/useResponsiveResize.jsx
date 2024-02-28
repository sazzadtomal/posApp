import { useEffect, useState } from "react";

const useResponsiveResize = () => {
  const [windowWidth, setWindowWidth] = useState();

  const windowWidthHandler = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowWidthHandler);
    windowWidthHandler();

    return () => {
      window.removeEventListener("resize", windowWidthHandler);
    };
  }, []);

  return windowWidth;
};

export default useResponsiveResize;
