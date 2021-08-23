import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import { Button, Divider, HomePage } from "../styles/styles";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    img {
      margin-top: 2rem;
    }
  }
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Pet Mania</title>
      </Head>
      <Flex>
        <div>
          <Image
            src="/assets/img/shop-home.svg"
            alt="shop-home"
            width={600}
            height={600}
          />
        </div>
        <Divider />
        <HomePage>
          <h1>Welcome to Pet Mania</h1>
          <Link href="/food">
            <a>
              <Button>
                Go to Food Shop
                <i>
                  <FiShoppingCart />
                </i>
              </Button>
            </a>
          </Link>
        </HomePage>
      </Flex>
    </>
  );
}
