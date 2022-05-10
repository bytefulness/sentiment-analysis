import PropTypes from "prop-types";
import styled from "styled-components";
import { typography } from "theme";

const Text = ({ className, as, color, variant, children }) => {
  const Tag = as;
  return (
    <StyledText className={className} as={Tag} variant={variant} color={color}>
      {children}
    </StyledText>
  );
};

const StyledText = styled(Text)`
  font-size: ${(props) => typography.body[props.variant].fontSize};
  color: ${(props) => props.color};
`;

Text.propTypes = {
  children: PropTypes.string.isRequired,
  /** Define type of html element */
  as: PropTypes.oneOf(["p", "span"]),

  /** Define color of text */
  color: PropTypes.string,

  /** Variants from the design tokens */
  variant: PropTypes.oneOf([
    "6xl",
    "5xl",
    "4xl",
    "3xl",
    "2xl",
    "xl",
    "lg",
    "md",
    "sm",
    "xs",
  ]),
};

Text.defaultProps = {
  as: "p",
  variant: "md",
};

export default Text;
