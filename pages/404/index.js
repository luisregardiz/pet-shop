import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import styled from "styled-components";
import { Button } from "../../styles/styles";

const ErrorPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const Error = () => {
  return (
    <ErrorPage>
      <h1>Opssssssss....</h1>
      <p>That Page cannot be found</p>
      <p>Go back to home</p>
      <Link href="/">
        <a>
          <Button size="1.2rem" padding=".8rem 2rem">
            <AiFillHome />
          </Button>
        </a>
      </Link>
    </ErrorPage>
  );
};

export default Error;
