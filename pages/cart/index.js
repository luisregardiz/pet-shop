import Head from "next/head";
import { useContext, useState } from "react";
import ShoppingCart from "../../components/ShoppingCart";
import { CartContext } from "../../context/CartContext";
import { Button, Section } from "../../styles/styles";
import styled from "@emotion/styled";
import { Box, Divider, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Cart = () => {
    const { cartProducts } = useContext(CartContext);
    const [error, setError] = useState(false);
    const router = useRouter();

    const calculateTotal = (products) => {
        return products.reduce(
            (ack, item) => ack + item.selectQty * item.price,
            0
        );
    };
    const totalPrice = calculateTotal(cartProducts);

    const handleCheckOut = () => {
        if (totalPrice < 1) return setError((prev) => !prev);

        return router.push("/checkout");
    };

    return (
        <>
            <Head>
                <title>Cart | Pet Mania</title>
            </Head>
            <Section bgColor={"#F472B6"} w={"150px"}>
                <h1>Cart</h1>
                <Grid>
                    <CartItems>
                        {totalPrice < 1 && (
                            <Text fontSize="1.5rem" fontWeight="bold">
                                Shopping cart is empty
                            </Text>
                        )}

                        {cartProducts.map((products) => {
                            return (
                                <ShoppingCart
                                    key={products.id}
                                    products={products}
                                />
                            );
                        })}
                    </CartItems>
                    <Divider orientation="vertical" />
                    <TotalPrice>
                        <h2>Total Price:</h2>
                        <h4>U$ {totalPrice} </h4>

                        <Button onClick={handleCheckOut}> Check Out</Button>
                        {error && (
                            <Box
                                bgColor="red"
                                py="1rem"
                                px="2rem"
                                borderRadius="10px"
                            >
                                <Text color="white" fontWeight="bold" size="xl">
                                    Sorry the shopping cart is empty
                                </Text>
                            </Box>
                        )}
                    </TotalPrice>
                </Grid>
            </Section>
        </>
    );
};
const CartItems = styled.div`
    display: flex;
    flex-direction: column;
`;
const Grid = styled.div`
    min-height: 100vh;
    background-color: white;
    margin: 2rem 5rem;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    color: black;
    display: grid;
    grid-template-columns: 60% 5% 35%;
    gap: 5;

    @media (max-width: 960px) {
        grid-template-columns: 1fr;
    }
`;
const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform: uppercase;
        border-bottom: 5px solid #000;
    }

    h4 {
        font-size: 1.3rem;
    }
`;
export default Cart;
