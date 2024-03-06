import Image, { IImage } from "deco-sites/emvcfullsite/components/ui/Image.tsx";

export interface Props {
  image: IImage;
  title: string;
  content: string;
  manifestUrl: string;
  textButton?: string;
}

export default function Manifest(
  { image, title, content, textButton = "BAIXE NOSSO MANIFESTO", manifestUrl }:
    Props,
) {
  return (
    <section class="flex justify-center">
      <div class="grid md:grid-cols-custom-grid-manifest gap-[30px] py-[70px] md:py-32 md:px-20 px-4 grid-cols-1">
        <div class="flex flex-col justify-between gap-4 md:gap-0">
          <div>
            <h4 class="font-sora font-bold text-5xl text-gray-500 mb-9">
              {title}
            </h4>
            <p class="font-inter font-regular text-gray-500 text-lg leading-9">
              {content}
            </p>
          </div>

          <a
            class="py-[20px] w-full bg-gradient-default rounded-[10px] font-sora font-regular text-lg text-white hover:opacity-90 transition cursor-pointer flex items-center justify-center"
            href={manifestUrl}
            download
          >
            {textButton}
          </a>
        </div>

        <div class="order-1">
          <Image image={image} preload />
        </div>
      </div>
    </section>
  );
}
