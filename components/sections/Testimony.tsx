import Slider from "deco-sites/emvcfullsite/components/ui/Slider.tsx";
import SliderJS from "deco-sites/emvcfullsite/components/ui/SliderJS.tsx";
import Image, { IImage } from "../ui/Image.tsx";
import Icon from "../ui/Icon.tsx";

export interface Props {
  title: string;
  id: string;
  testimonials: {
    image: IImage;
    title: string;
    subtitle: string;
    content: string;
  }[];
}

function Testimony({ title, id, testimonials }: Props) {
  return (
    <div class="w-full flex flex-col items-center py-[70px] px-4">
      <p class="font-sora font-bold text-black-800 text-[50px] mb-16">
        {title}
      </p>

      <div class="relative" id={id}>
        <Slider class="carousel gap-6 max-w-[920px]">
          {testimonials?.map((testimonial, index) => (
            <Slider.Item
              index={index}
              class="carousel-item w-full justify-center"
            >
              <div class="w-full grid grid-cols-1 md:grid-cols-custom-grid-slider">
                <Image
                  image={testimonial.image}
                  className="md:rounded-l-xl rounded-t-xl rounded-b-0"
                />

                <div class="px-12 flex flex-col justify-center bg-gray-100 rounded-b-xl rounded-r-0 md:rounded-r-xl relative py-8 md:py-0">
                  <p class="font-inter font-semibold text-gray-500 text-3xl mb-1">
                    {testimonial.title}
                  </p>
                  <span class="font-inter font-regular text-gray-500 text-xl mb-6">
                    {testimonial.subtitle}
                  </span>

                  <p class="font-inter font-regular text-gray-500 text-xl leading-8">
                    {testimonial.content}
                  </p>

                  <div class="absolute -top-8 right-8">
                    <Icon size={70} id="Testimonial" strokeWidth={0} />
                  </div>
                </div>
              </div>
            </Slider.Item>
          ))}
        </Slider>

        {testimonials?.length && (
          <>
            <Slider.PrevButton class="absolute left-0 md:-left-[4.5rem] top-1/2 btn btn-circle btn-outline">
              <Icon size={30} id="ChevronLeft" strokeWidth={3} />
            </Slider.PrevButton>

            <Slider.NextButton class="absolute right-0 md:-right-[4.5rem] top-1/2 btn btn-circle btn-outline">
              <Icon size={30} id="ChevronRight" strokeWidth={3} />
            </Slider.NextButton>
          </>
        )}
      </div>

      <SliderJS infinite rootId={id}></SliderJS>
    </div>
  );
}

export default Testimony;
