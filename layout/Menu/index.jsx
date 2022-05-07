import styled from "styled-components";
import PropTypes from "prop-types";
import MenuLink from "./MenuLink";
import { colors, spaces } from "theme";

const Menu = ({ menus }) => {
  return (
    <StyledMenu>
      <Navbar>
        {menus.map((menu, index) => (
          <MenuLink
            key={`menu${index}`}
            label={menu.label}
            icon={menu.icon}
            href="#"
          />
        ))}
      </Navbar>
    </StyledMenu>
  );
};

const StyledMenu = styled.aside`
  border-right: 1px solid ${colors.grayPalette[300]};
  padding: ${spaces[8]};
  min-height: 100vh;
`;

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 1fr;
`;

Menu.propTypes = {
  /** An array includes menu item to render */
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default Menu;
