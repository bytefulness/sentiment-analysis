import { useState, useEffect } from "react";
import Sentiment from "sentiment";
import styled from "styled-components";
import { textData } from "constant";
import {
  Button,
  Empty,
  Text,
  TextArea,
  Title,
  StatusCard,
  Word,
} from "components";
import { spaces } from "theme";

const Dashboard = () => {
  const [sentiment, setSentiment] = useState(null);
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const { empty, sentimentInputPlaceholder, statusCards } = textData;

  useEffect(() => {
    setSentiment(new Sentiment());
  }, []);

  const isPositiveWords = data?.positive.length > 0;
  const isNegativeWords = data?.negative.length > 0;

  const handleAnalyze = () => {
    const result = sentiment.analyze(inputValue);
    setData(result);
  };

  const handleChange = (e) => {
    const inputData = e.target.value;
    if (!inputData) setData(null);
    setInputValue(e.target.value);
  };

  const checkPhareScore = (score) => {
    if (score > 0.5) return statusCards.sentiment.positive;
    return statusCards.sentiment.negative;
  };

  return (
    <>
      <Container>
        <HeaderWrapper>
          <Title level={1} variant="4xl">
            Sentiment Analysis
          </Title>
          <Text variant="2xl" color="#909090">
            Find sentiment for your sentences.
          </Text>
        </HeaderWrapper>

        <ContentWrapper>
          <StyledTextArea
            placeholder={sentimentInputPlaceholder}
            fullWidth
            rows={14}
            value={inputValue}
            onChange={handleChange}
          />
          <Button variant="primary" onClick={handleAnalyze}>
            Analyze Pharese
          </Button>
        </ContentWrapper>

        {data ? (
          <>
            <StatsWrapper>
              <StatusCard
                color="#FFEEE2"
                title={statusCards.sentiment.title}
                description={statusCards.sentiment.description}
                value={checkPhareScore(data.score)}
              />

              <StatusCard
                color="#EEFCEF"
                title={statusCards.score.title}
                description={statusCards.score.description}
                value={data.score}
              />

              <StatusCard
                color="#E6F5FA"
                title={statusCards.positiveWords.title}
                description={statusCards.positiveWords.description}
                value={data.positive.length}
              />

              <StatusCard
                color="#E6F5FA"
                title={statusCards.negativeWords.title}
                description={statusCards.negativeWords.description}
                value={data.negative.length}
              />
            </StatsWrapper>

            <WordsWrapper>
              <StyledTitle level={2} variant="xl">
                Positive Words
              </StyledTitle>
              <Words>
                {isPositiveWords ? (
                  data.positive.map((word, index) => (
                    <Word key={`positiveWord${index}`} isPositive>
                      {word}
                    </Word>
                  ))
                ) : (
                  <Text variant="sm">There is no positive words</Text>
                )}
              </Words>

              <StyledTitle level={2} variant="xl">
                Negative Words
              </StyledTitle>
              <Words>
                {isNegativeWords ? (
                  data.negative.map((word, index) => (
                    <Word key={`negativeWord${index}`}>{word}</Word>
                  ))
                ) : (
                  <Text variant="sm">There is no negative words</Text>
                )}
              </Words>
            </WordsWrapper>
          </>
        ) : (
          <Empty title={empty.title} description={empty.description} />
        )}
      </Container>
    </>
  );
};
const Container = styled.div`
  max-width: 960px;
`;

const HeaderWrapper = styled.header`
  text-align: center;
  margin-bottom: ${spaces[20]};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: ${spaces[16]};
`;

const StyledTextArea = styled(TextArea)`
  margin-bottom: ${spaces[4]};
`;

const StatsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(370px, 1fr));
  gap: ${spaces[6]};
  margin-bottom: ${spaces[9]};
`;

const WordsWrapper = styled.div`
  margin-bottom: ${spaces[20]};
`;

const StyledTitle = styled(Title)`
  margin-bottom: ${spaces[6]};
`;

const Words = styled.div`
  &:not(:last-child) {
    margin-bottom: ${spaces[10]};
  }
`;

export default Dashboard;
