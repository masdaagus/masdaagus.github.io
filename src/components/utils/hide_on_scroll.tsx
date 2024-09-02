"use client";
import React, { useEffect, useState } from "react";
import { useWindowScroll, useMeasure } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";
interface PropsHideOnScroll {
  window?: unknown;
  children: React.ReactElement;
}

function HideOnScroll(props: PropsHideOnScroll) {
  const [old, setOld] = useState(0);
  const [isHide, setIsHide] = useState(false);
  const [ref, { width, height }] = useMeasure();
  const childHeight = height ?? 0;
  const [{ x, y }, scrollTo] = useWindowScroll();
  useEffect(() => {
    if ((y ?? 0) >= old + childHeight) {
      setOld(y ?? 0);
      setIsHide(true);
    }
    if ((y ?? 0) <= old - childHeight || y == 0) {
      setOld(y ?? 0);
      setIsHide(false);
    }
  }, [childHeight, old, y]);
  const updatedChildren = React.Children.map(props.children, (child, idx) =>
    React.cloneElement(child, {
      ref: ref,
      className: cn("transition-transform duration-500"),
      style: isHide
        ? {
            transform: `translateY(-${childHeight}px)`,
          }
        : {},
    })
  );
  return <>{updatedChildren}</>;
}

export default HideOnScroll;
