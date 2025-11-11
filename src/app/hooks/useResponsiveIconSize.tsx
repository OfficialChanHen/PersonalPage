"use client";

import { useState, useEffect } from "react";

type useResponsiveIconSizeProps = {
    base: number,
    sm: number,
    md: number,
    lg: number,
};

export default function useResponsiveIconSize({base, sm, md, lg}: useResponsiveIconSizeProps) {
  const [imgSize, setImgSize] = useState<number>();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setImgSize(base);
      else if (window.innerWidth < 768) setImgSize(sm);
      else if (window.innerWidth < 1024) setImgSize(md);
      else setImgSize(lg);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return imgSize;
}