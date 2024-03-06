import BannerUI, {
  Banner as IBanner,
} from "deco-sites/emvcfullsite/components/ui/Banner.tsx";

export interface Props {
  image: IBanner;
  title: string;
  infoNumbers: {
    number: string;
    title: string;
  }[];
}

export default function BigNumbers({ image, title, infoNumbers }: Props) {
  return (
    <section>
      <div class="relative flex justify-center ">
        <BannerUI banner={image} />

        <div class="absolute w-full flex flex-col items-center top-14 md:top-20 px-4 md:px-0">
          <p class="font-sora font-bold text-gray-400 text-[40px] md:text-[50px] text-white mb-16">
            {title}
          </p>

          <div class="w-full grid grid-cols-2 md:grid-cols-4 items-center text-center">
            {infoNumbers.map((infoNumber) => (
              <p key={infoNumber.title} class="flex flex-col">
                <span class="text-[50px] md:text-[70px] text-blue-500 font-sora font-bold">
                  {infoNumber.number}
                </span>
                <span class="text-2xl md:text-[30px] text-white font-sora font-regular">
                  {infoNumber.title}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
