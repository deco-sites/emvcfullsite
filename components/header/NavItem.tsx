export interface INavItem {
  label: string;
  href: string;
  color?: string;
}

function NavItem({ item }: { item: INavItem }) {
  const { href, label, color = "white" } = item;

  return (
    <li class="group flex items-center">
      <a href={href} class={`text-[15px] text-${color} font-inter font-medium`}>
        <span class="group-hover:underline">
          {label}
        </span>
      </a>
    </li>
  );
}

export default NavItem;
