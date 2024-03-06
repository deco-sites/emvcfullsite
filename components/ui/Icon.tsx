import { asset } from "$fresh/runtime.ts";
import type { JSX } from "preact";

export type AvailableIcons =
  | "Logo"
  | "Vector"
  | "ChevronLeft"
  | "ChevronRight"
  | "Testimonial"
  | "Behance"
  | "Drible"
  | "Twitter"
  | "InputUser"
  | "InputEmail"
  | "LogoWithoutText"
  | "BehanceFooter"
  | "TwitterFooter"
  | "DribbleFooter"
  | "XMark"
  | "Bars3";

interface Props extends JSX.SVGAttributes<SVGSVGElement> {
  id: AvailableIcons;
  size?: number;
}

function Icon(
  { id, strokeWidth = 16, size, width, height, ...otherProps }: Props,
) {
  return (
    <svg
      {...otherProps}
      width={width ?? size}
      height={height ?? size}
      strokeWidth={strokeWidth}
    >
      <use href={asset(`/sprites.svg#${id}`)} />
    </svg>
  );
}

export default Icon;
