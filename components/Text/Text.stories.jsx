import Text from "./index";

export default {
  title: "components/Text",
  component: Text,
};

const Template = (args) => <Text {...args}>{args.children}</Text>;

export const Default = Template.bind({});
Default.args = {
  children: "Text",
  variant: "md",
  as: "p",
};
