import { useEffect, useState } from "react";

const POS_EXPECTED_WIDTH = 480;

export const useIsMobile = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, [width]);

  return width < POS_EXPECTED_WIDTH
}