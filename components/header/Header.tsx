import NavBar from "deco-sites/emvcfullsite/components/header/NavBar.tsx";
import Modals from "./Modals.tsx";

export interface NavItemProps {
  label: string;
  href: string;
  color?: string;
}

export interface HeaderProps {
  navItems?: NavItemProps[];
}

export default function Header({ navItems = [] }: HeaderProps) {
  return (
    <header>
      <NavBar navItems={navItems} />
      <Modals
        menu={{ items: navItems }}
      />
    </header>
  );
}
