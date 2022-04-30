import PropTypes from "prop-types";
import styledComponents from "styled-components";
import { typography } from "styles/theme";

const Title = ({ level, children }) => {
  const Tag = `h${level}`;
  return (
    <StyledTitle as={Tag} level={level}>
      {children}
    </StyledTitle>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

Title.defaultProps = {
  level: 1,
  children: null,
};

export default Title;

const StyledTitle = styledComponents(Title)`
    font-size: ${(props) => typography.title[props.level]?.fontSize};
    font-weight: ${(props) => typography.title[props.level]?.fontWeight};
`;
