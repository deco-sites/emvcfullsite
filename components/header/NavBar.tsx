import Icon from "deco-sites/emvcfullsite/components/ui/Icon.tsx";
import NavItem from "deco-sites/emvcfullsite/components/header/NavItem.tsx";
import type { NavItemProps } from "./Header.tsx";
import HeaderButton from "./Buttons.tsx";

interface NavBarProps {
  navItems: NavItemProps[];
}

export default function NavBar({ navItems }: NavBarProps) {
  return (
    <div class="w-full bg-gray-900 py-7 md:px-[78px] px-4 flex flex-row md:items-center justify-between gap-4 md:gap-0">
      <a href="/" aria-label="Store logo">
        <Icon id="Logo" width={205} height={59} />
      </a>

      <div class="md:hidden flex items-center">
        <HeaderButton variant="menu" />
      </div>

      <ul class="justify-right flex-auto gap-4 hidden md:flex">
        {navItems.map((navItem) => (
          <NavItem key={navItem.label} item={navItem} />
        ))}
      </ul>
    </div>
  );
}
