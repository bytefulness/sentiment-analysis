import PropTypes from "prop-types";
import styled from "styled-components";
import { typography } from "theme";

const Title = ({ className, level, variant, children }) => {
  const Tag = `h${level}`;
  return (
    <StyledTitle className={className} as={Tag} level={level} variant={variant}>
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled(Title)`
  font-size: ${(props) => typography.heading[props.variant].fontSize};
  font-weight: ${(props) => typography.heading[props.variant].fontWeight};
  line-height: ${(props) => typography.heading[props.variant].lineHeight};
`;

Title.propTypes = {
  children: PropTypes.string.isRequired,

  /** Heading level */
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),

  /** Variants from the design tokens */
  variant: PropTypes.oneOf(["4xl", "3xl", "2xl", "xl", "lg", "md", "sm"]),
};

Title.defaultProps = {
  level: 1,
  variant: "xl",
  children: null,
};

export default Title;
