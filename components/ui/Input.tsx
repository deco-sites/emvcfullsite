import Icon, { AvailableIcons } from "./Icon.tsx";
import { HTMLAttributes, Ref } from "preact/compat";

export interface Props extends HTMLAttributes<HTMLInputElement> {
  valueRef: Ref<HTMLInputElement> | undefined;
  iconId?: AvailableIcons;
}

export default function Input(
  { iconId, valueRef, ...rest }: Props,
) {
  return (
    <div class="relative text-gray-600 w-full">
      {iconId && (
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            aria-label={iconId}
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline text-black w-8"
          >
            <Icon id={iconId} strokeWidth={0} width={32} />
          </button>
        </span>
      )}
      <input
        {...rest}
        ref={valueRef}
        class="py-4 text-sm rounded-[3px] text-gray-500 bg-white pl-12 w-full placeholder:text-gray-500 border-[2px] border-black-900"
      />
    </div>
  );
}
