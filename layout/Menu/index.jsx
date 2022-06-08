import styled from "styled-components";
import PropTypes from "prop-types";
import { Avatar } from "components";
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
      <Avatar className="avatar" image="/avatar.png" name="Erhan" isOnline />
    </StyledMenu>
  );
};

const StyledMenu = styled.aside`
  display: none;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1px solid ${colors.grayPalette[300]};
    padding: ${spaces[8]};
    height: 100vh;
  }

  .avatar {
    margin: 0 auto;
  }
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
