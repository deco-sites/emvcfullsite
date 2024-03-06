import Icon from "deco-sites/emvcfullsite/components/ui/Icon.tsx";
import Button from "deco-sites/emvcfullsite/components/ui/Button.tsx";
import { useUI } from "deco-sites/emvcfullsite/sdk/useUI.ts";

function MenuButton() {
  const { displayMenu } = useUI();

  return (
    <Button
      class="btn-square btn-ghost text-white"
      aria-label="open menu"
      onClick={() => {
        displayMenu.value = true;
      }}
    >
      <Icon id="Bars3" width={30} height={30} strokeWidth={0.01} />
    </Button>
  );
}

function HeaderButton({ variant }: { variant: "menu" }) {
  if (variant === "menu") {
    return <MenuButton />;
  }

  return null;
}

export default HeaderButton;
