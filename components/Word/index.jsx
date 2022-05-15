import PropTypes from "prop-types";
import styled from "styled-components";
import { Text } from "components";
import { colors, radii, spaces } from "theme";

const Word = ({ isPositive, children }) => {
  return (
    <StyledWord isPositive={isPositive}>
      <Text as="span">{children}</Text>
    </StyledWord>
  );
};

const StyledWord = styled.article`
  display: inline-block;
  padding: ${spaces[2]} ${spaces[8]};
  background-color: ${(p) =>
    p.isPositive ? colors.greenPalette[50] : colors.orangePalette[50]};
  border-radius: ${radii.md};
`;

Word.propTypes = {
  /** Status of Word. It gives color based on that status*/
  isPositive: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

export default Word;
