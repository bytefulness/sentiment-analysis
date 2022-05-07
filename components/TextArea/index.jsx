import styled from "styled-components";
import PropTypes, { string } from "prop-types";
import { colors, typography, spaces, radii } from "theme";

const TextArea = ({ className, fullWidth, ...props }) => {
  return (
    <StyledTextArea className={className} fullWidth={fullWidth} {...props} />
  );
};

const StyledTextArea = styled.textarea`
  font-size: ${typography.body.md.fontSize};
  font-family: inherit;
  background-color: #f9f8f3;
  color: #7b7b7b;
  border-radius: ${radii.sm};
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: ${(props) => (props.fullWidth ? spaces[8] : spaces[6])};
  resize: none;
  border: none;

  &:focus {
    outline: 1.5px solid #7b7b7b;
  }
`;

TextArea.propTypes = {
  /** Whether or not to make the input full width */
  fullWidth: PropTypes.bool,
};

export default TextArea;
