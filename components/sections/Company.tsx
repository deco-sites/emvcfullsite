import type { IImage } from "deco-sites/emvcfullsite/components/ui/Image.tsx";
import Image from "deco-sites/emvcfullsite/components/ui/Image.tsx";

export interface Props {
  images: IImage[];
}

export default function Company({ images }: Props) {
  return (
    <section class="grid grid-cols-3 md:grid-cols-6 items-center justify-between gap-5 px-14 py-8 bg-blue-900">
      {images.map((image) => (
        <div class="flex justify-center">
          <Image image={image} preload key={image.alt} />
        </div>
      ))}
    </section>
  );
}
