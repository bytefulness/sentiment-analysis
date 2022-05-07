import Button from "./index";

export default {
  title: "components/Button",
  component: Button,
};

const Template = (args) => <Button {...args}> {args.children} </Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Button",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  variant: "primary",
  fullWidth: true,
  children: "Full Width Button",
};
