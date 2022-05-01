import MenuLink from "./index";
import { BiHomeSmile } from "react-icons/bi";

export default {
  title: "Layout/Menu/MenuLink",
  component: MenuLink,
  args: {
    href: "#",
  },
};

const Template = (args) => <MenuLink {...args}>{args.children}</MenuLink>;

export const Basic = Template.bind({});
Basic.args = {
  icon: null,
  label: "Menu Name",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <BiHomeSmile />,
  label: "Homepage",
};
