import Head from "next/head";
import styled from "styled-components";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Container = styled.main`
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  const childrenName = children.type.name;
  return (
    <>
      <Navbar childrenName={childrenName} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
