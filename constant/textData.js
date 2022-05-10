const empty = {
  title: "We need to some data to calculate something",
  description: "You can provide some data for input that placed to top",
};

const sentimentInputPlaceholder = "Enter some text to analyze";

const statusCards = {
  sentiment: {
    title: "Sentiment",
    description: "Sentiment analysis of phare",
    positive: "Positive 😊",
    negative: "Negative 😔",
  },

  score: {
    title: "Score",
    description: "Score of phare",
  },

  positiveWords: {
    title: "Positive Words",
    description: "Positive words of phare",
  },

  negativeWords: {
    title: "Negative Words",
    description: "Negative words of phare",
  },
};

export default { empty, sentimentInputPlaceholder, statusCards };
