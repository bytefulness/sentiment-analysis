import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import { colors, radii, spaces } from "theme";

const MenuLink = ({ icon, label, href }) => {
  return (
    <Link href={href ? href : "#"} passHref>
      <StyledMenuLink>
        {icon && <Icon>{icon}</Icon>}
        {label}
      </StyledMenuLink>
    </Link>
  );
};

const StyledMenuLink = styled.a`
  display: inline-flex;
  align-items: center;
  padding: ${spaces[3]} ${spaces[4]};
  border-radius: ${radii.lg};

  &:hover {
    background-color: ${colors.grayPalette[50]};
  }

  &:active {
    background-color: ${colors.grayPalette[100]};
  }
`;

const Icon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-right: ${spaces[4]};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

MenuLink.propTypes = {
  /** You can use any JSX element, **react-icons** etc. */
  icon: PropTypes.node,

  /** The label of the menu item */
  label: PropTypes.string.isRequired,

  /** The href of the menu item */
  href: PropTypes.string.isRequired,
};

MenuLink.defaultProps = {
  icon: null,
  label: "",
  href: "#",
};

export default MenuLink;
