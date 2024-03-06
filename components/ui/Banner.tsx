import { Picture, Source } from "apps/website/components/Picture.tsx";
import type { ImageWidget as LiveImage } from "apps/admin/widgets.ts";

export interface Banner {
  /** @description text to be rendered on top of the image */
  title?: string;
  /** @description text to be rendered on top of the image */
  subtitle?: string;
  image: {
    /** @description Image for big screens */
    desktop: LiveImage;
    /** @description Image for small screens */
    mobile: LiveImage;
    /** @description image alt text */
    alt?: string;
    /** @description width desktop */
    widthDesktop: number;
    /** @description height desktop */
    heightDesktop: number;
    /** @description width mobile */
    widthMobile: number;
    /** @description height mobile */
    heightMobile: number;
  };
}

export interface Props {
  banner: Banner;
}

function BannerUI(
  {
    banner,
  }: Props,
) {
  const {
    title,
    subtitle,
    image,
  } = banner;

  return (
    <div class="grid grid-cols-1 grid-rows-1">
      <Picture
        preload
        class="col-start-1 col-span-1 row-start-1 row-span-1 "
      >
        <Source
          src={image.mobile}
          width={image.widthMobile}
          height={image.heightMobile}
          media="(max-width: 767px)"
        />
        <Source
          src={image.desktop}
          width={image.widthDesktop}
          height={image.heightDesktop}
          media="(min-width: 767px)"
        />
        <img
          class={`w-screen max-h-[${image.heightDesktop}px] object-fill`}
          src={image.desktop}
          alt={image.alt}
        />
      </Picture>

      <div class="container flex flex-col items-center justify-center gap-7 sm:items-start col-start-1 col-span-1 row-start-1 row-span-1 w-full pl-4 md:pl-24">
        <h1 class="max-w-[700px]">
          <span class="text-5xl font-sora font-extrabold text-white">
            {title}
          </span>
        </h1>
        <h2 class="max-w-[596px]">
          <span class="text-lg font-sora font-regular text-white">
            {subtitle}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default BannerUI;
