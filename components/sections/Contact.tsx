import { useRef } from "preact/hooks";
import Icon, { AvailableIcons } from "../ui/Icon.tsx";
import Input from "../ui/Input.tsx";

export interface Props {
  address: string;
  phone: string;
  openHour: string;
  closeHour: string;
  contactEmail: string;
  links: {
    iconId: AvailableIcons;
    url: string;
    title: string;
  }[];
}

function Contact(
  { address, closeHour, openHour, phone, contactEmail, links }: Props,
) {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputContentRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div class="w-full bg-gray-600 py-8 md:py-[158px] px-12">
      <section class="flex justify-center">
        <div class="grid grid-cols-1 md:grid-cols-custom-grid-manifest gap-8 md:gap-[100px] md:py-32 md:px-20">
          <div class="flex flex-col justify-between">
            <div>
              <h5 class="font-sora font-bold text-5xl text-gray-500 mb-9">
                Entre em contato
              </h5>

              <form class="flex flex-col gap-6">
                <Input
                  name="name"
                  placeholder="Insira seu nome aqui"
                  valueRef={inputNameRef}
                  iconId="InputUser"
                />
                <Input
                  name="email"
                  placeholder="Insira seu email aqui"
                  valueRef={inputEmailRef}
                  iconId="InputEmail"
                />
                <textarea
                  ref={inputContentRef}
                  placeholder="Mensagem..."
                  class="py-4 text-sm rounded-[3px] text-gray-500 bg-white pl-4 w-full placeholder:text-gray-500 border-[2px] border-black-900 min-h-[218px] "
                />

                <button class="w-full bg-blue-500 text-white font-inter font-bold text-8 transition hover:opacity-90 py-[10px] uppercase">
                  Enviar
                </button>
              </form>
            </div>
          </div>

          <div class="flex flex-col justify-between">
            <div class="flex flex-col gap-8">
              <div>
                <p class="font-inter font-regular text-sm text-gray-800 uppercase">
                  ENDEREÇO
                </p>
                <p class="font-inter font-regular text-2xl text-gray-500 uppercase">
                  {address}
                </p>
              </div>
              <div>
                <p class="font-inter font-regular text-sm text-gray-800 uppercase">
                  TELEFONE
                </p>
                <p class="font-inter font-regular text-2xl text-gray-500 uppercase">
                  {phone}
                </p>
              </div>
              <div>
                <p class="font-inter font-regular text-sm text-gray-800 uppercase">
                  NOSSO HORÁRIO
                </p>
                <p class="font-inter font-regular text-2xl text-gray-500 uppercase">
                  {openHour} - {closeHour}
                </p>
              </div>
            </div>

            <div>
              <p class="font-inter font-bold text-[30px] text-blue-900 mb-9">
                {contactEmail}
              </p>

              <div class="flex gap-12 items-center">
                {links?.map((link) => (
                  <a href={link.url} key={link.iconId} title={link.title}>
                    <Icon
                      id={link.iconId}
                      width={48}
                      height={48}
                      strokeWidth={0}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
