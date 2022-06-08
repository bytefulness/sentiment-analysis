import styled from "styled-components";
import { menus } from "constant";
import Menu from "./Menu";
import { spaces } from "theme";

const Layout = ({ children }) => {
  return (
    <Main>
      <Menu menus={menus} />
      <Content>{children}</Content>
    </Main>
  );
};

const Main = styled.main`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 300px 1fr;
  }
`;

const Content = styled.div`
  padding: ${spaces[10]};
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

export default Layout;
