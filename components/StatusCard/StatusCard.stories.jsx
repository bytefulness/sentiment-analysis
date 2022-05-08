import StatusCard from "./index";

export default {
  title: "components/StatusCard",
  component: StatusCard,
};

const Template = (args) => <StatusCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: "#FFEEE2",
  title: "Sentiment",
  description: "Sentiment analysis of phare",
  value: "POSITIVE 😊",
  hasChart: false,
};

export const WithChart = Template.bind({});
WithChart.args = {
  color: "#FFEEE2",
  title: "Sentiment",
  description: "Sentiment analysis of phare",
  value: "10",
  hasChart: true,
};
