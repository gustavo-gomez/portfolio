import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

export const Breakpoints = {
  xs: 480, // mobile
  sm: 768, // tablet portrait
  md: 1024, // tablet landscape, small desktops
  lg: 1200, // large tabled landscape, desktops
};

const getDeviceSize = () => {
  const width = window.innerWidth;
  const breakpoints = {
    isXS: false,
    isSM: false,
    isMD: false,
    isLG: false,
    width,
    isMobile: false
  };

  if (width <= Breakpoints.xs) {
    breakpoints.isXS = true;
    breakpoints.isMobile = true;
  } else if (width > Breakpoints.xs && width <= Breakpoints.sm) {
    breakpoints.isSM = true;
    breakpoints.isMobile = true;
  } else if (width > Breakpoints.sm && width <= Breakpoints.md) {
    breakpoints.isMD = true;
    breakpoints.isMobile = false;
  } else if (width > Breakpoints.md) {
    breakpoints.isLG = true;
    breakpoints.isMobile = false;
  }
  return breakpoints;
};

export const useBreakpoint = () => {
  const [sizeInfo, setSizeInfo] = useState(getDeviceSize());

  useEffect(() => {
    const onResize = throttle(() => {
      setSizeInfo(getDeviceSize());
    }, 500);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return sizeInfo;
};
