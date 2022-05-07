import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors, radii, spaces } from "theme";

const Button = ({ variant, fullWidth, children }) => {
  return (
    <StyledButton variant={variant} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: inline-block;
  width: ${(props) => props.fullWidth && "100%"};
  font-size: inherit;
  padding: ${spaces[4]} ${spaces[10]};
  border: none;
  border-radius: ${radii.md};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${colors.black};
      color: ${colors.white};

      &:hover {
        background-color: ${colors.grayPalette[700]};
      }
    `};

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: ${colors.white};
      color: ${colors.grayPalette[900]};
      border: 1px solid ${colors.grayPalette[900]};

      &:hover {
        background-color: ${colors.grayPalette[700]};
        color: ${colors.white};
      }
    `};

  &:active {
    transform: scale(0.95);
  }
`;

Button.propTypes = {
  /** Type of button */
  variant: PropTypes.oneOf(["primary", "secondary"]),

  /** Children of button */
  children: PropTypes.node.isRequired,
};

export default Button;
