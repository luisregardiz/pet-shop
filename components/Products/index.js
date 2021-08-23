import { Flex, Heading } from "@chakra-ui/react";
import { Button as ButtonChakra } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from "../../context/CartContext";
import { Button, Product, ProductDetail } from "../../styles/styles";
import { useToast } from "@chakra-ui/react";
import styled from "@emotion/styled";

const Products = ({ section }) => {
    const { title, price, description, weight, pet, image, quantity } = section;
    const { url } = image[0];
    const { name } = pet;
    const [qty, setQty] = useState(1);
    const [getProduct, setGetProduct] = useState({});

    const { setCartProducts } = useContext(CartContext);
    const toast = useToast();

    const handleAddItem = () => {
        setQty((prev) => {
            if (prev < quantity) {
                return prev + 1;
            }

            return prev;
        });
    };

    const handleRemoveItem = () => {
        setQty((prev) => {
            if (prev > 1) {
                return prev - 1;
            }

            return prev;
        });
    };
    useEffect(() => {
        setGetProduct({ ...section, selectQty: qty });
    }, [qty, section]);

    const handleAddProduct = async () => {
        try {
            await setCartProducts((old) => {
                const itemExist = old.some((item) => item.id === getProduct.id);
                if (itemExist) {
                    toast({
                        title: "Added to cart again",
                        status: "info",
                        position: "top",
                        isClosable: true,
                    });
                    return old.map((item) =>
                        item.id === getProduct.id
                            ? {
                                  ...item,
                                  selectQty: (item.selectQty =
                                      getProduct.selectQty),
                              }
                            : item
                    );
                }
                toast({
                    title: "Added to cart",

                    status: "success",
                    position: "top",
                    isClosable: true,
                });
                return [...old, getProduct];
            });
        } catch (error) {
            toast({
                title: `${error}`,
                status: "error",
                position: "top",
                isClosable: true,
            });
        }
    };

    return (
        <Product>
            <Image
                src={`${process.env.NEXT_PUBLIC_URL}${url}`}
                alt={title}
                width={500}
                height={500}
                objectFit="contain"
            />
            <ProductDetail>
                <Heading>{title}</Heading>
                <div className="divider" />
                {weight ? <span className="tag"> Weight: {weight}</span> : null}
                <span className="tag">Category: {name}</span>
                <h4>USD$ {price}</h4>
                <Qty>
                    <ButtonChakra
                        colorScheme="black"
                        variant="outline"
                        onClick={handleRemoveItem}
                        isDisabled={qty === 1 && true}
                    >
                        -
                    </ButtonChakra>
                    <p>{qty}</p>
                    <ButtonChakra
                        colorScheme="black"
                        variant="outline"
                        onClick={handleAddItem}
                        isDisabled={qty === quantity && true}
                    >
                        +
                    </ButtonChakra>
                </Qty>
                <Flex direction="column" mt="1rem">
                    <span>Available: {quantity}</span>
                    <div className="btn">
                        <Button onClick={handleAddProduct}>
                            Add to Cart
                            <i>
                                <FiShoppingCart />
                            </i>
                        </Button>
                        <Button>
                            Buy
                            <i>
                                <AiOutlineCreditCard />
                            </i>
                        </Button>
                    </div>
                </Flex>
            </ProductDetail>
            <div className="description">
                <h2>Description</h2>
                <div className="divider" />
                <p>{description}</p>
            </div>
        </Product>
    );
};

const Qty = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
`;

export default Products;
