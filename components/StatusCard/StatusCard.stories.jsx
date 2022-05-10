import StatusCard from "./index";
import styled from "styled-components";

export default {
  title: "components/StatusCard",
  component: StatusCard,
};

const Template = (args) => <StyledStatusCard {...args} />;

const StyledStatusCard = styled(StatusCard)`
  width: 100%;
  max-width: 380px;
`;

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
