import Menu from "./index";

export default {
  title: "Layout/Menu/Menu",
  component: Menu,
};

export const Basic = (args) => <Menu {...args} />;
Basic.args = {
  menus: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Settings",
      href: "/settings",
    },
  ],
};
