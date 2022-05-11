import Word from "./index";

export default {
  title: "components/Word",
  component: Word,
};

export const Positive = () => <Word isPositive>Positive Word</Word>;
export const Negative = () => <Word>Negative Word</Word>;
