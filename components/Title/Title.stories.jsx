import Title from "./index";

export default {
  title: "components/Title",
  component: Title,
};

const Template = (args) => <Title {...args}>{args.children}</Title>;

export const Default = Template.bind({});
Default.args = {
  children: "Title",
  level: 1,
};
