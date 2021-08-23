import styled from "styled-components";

const Foot = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #eee;
  color: #000;
  height: 10vh;
  font-weight: 600;
`;
const Footer = () => {
  return (
    <Foot>
      <p>Copyright &copy;2021 Food Mania</p>
    </Foot>
  );
};

export default Footer;
