import Empty from "./index";

export default {
  title: "components/Empty",
  component: Empty,
};

export const Default = () => (
  <Empty
    title="We need to some data to calculate something"
    description="You can provide some data for input that placed to top"
  />
);
