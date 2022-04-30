import Menu from "./Menu";

const Layout = ({ children }) => {
  return (
    <main>
      <Menu />
      <div>{children}</div>
    </main>
  );
};

export default Layout;
