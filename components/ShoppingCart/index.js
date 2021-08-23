import {
    Heading,
    Link as LinkStyle,
    Button as ButtonChakra,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

import Image from "next/image";
import Link from "next/link";
import { CartContext } from "../../context/CartContext";

const ShoppingCart = ({ products }) => {
    const { id, title, price, selectQty, quantity, slug, image, pet, section } =
        products;
    const { url } = image[0];
    const { name } = pet;
    const { setCartProducts } = useContext(CartContext);

    const handleAddItem = (id) => {
        setCartProducts((prev) => {
            const isItemInCart = prev.find((item) => item.id === id);

            if (isItemInCart) {
                return prev.map((item) =>
                    item.id === id
                        ? { ...item, selectQty: item.selectQty + 1 }
                        : item
                );
            }
        });
    };

    const handleRemoveItem = () => {
        setCartProducts((prev) =>
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    return [...ack, { ...item, selectQty: item.selectQty - 1 }];
                } else {
                    return [...ack, item];
                }
            }, [])
        );
    };

    const handleDeleteItem = (id) => {
        setCartProducts((prev) => prev.filter((item) => item.id !== id));
    };

    const totalPrice = price * selectQty;

    return (
        <>
            <Items>
                <Image
                    src={`${process.env.NEXT_PUBLIC_URL}${url}`}
                    alt={title}
                    width={80}
                    height={80}
                    objectFit="cover"
                />
                <div className="cart-content-item">
                    <Heading>
                        <Link
                            href={`http://localhost:3000/${section.name}/${slug}`}
                        >
                            <a>
                                <LinkStyle as="p">{title}:</LinkStyle>
                            </a>
                        </Link>
                    </Heading>
                    <h4>US$ {price}</h4>
                    <Qty>
                        <ButtonChakra
                            colorScheme="black"
                            variant="outline"
                            onClick={handleRemoveItem}
                            size="sm"
                            isDisabled={selectQty === 1 && true}
                        >
                            -
                        </ButtonChakra>
                        <p>{selectQty}</p>
                        <ButtonChakra
                            colorScheme="black"
                            variant="outline"
                            onClick={() => handleAddItem(id)}
                            size="sm"
                            isDisabled={selectQty === quantity && true}
                        >
                            +
                        </ButtonChakra>
                    </Qty>
                    <span>Pet: {name}</span>
                </div>
                <div className="total-price">
                    <p>Total: US$ {totalPrice}</p>
                </div>
                <div className="btn-delete">
                    <button onClick={() => handleDeleteItem(id)}>
                        <RiDeleteBinLine />
                    </button>
                </div>
            </Items>
        </>
    );
};
const Qty = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 1rem 0;
`;

const Items = styled.div`
    border: 1px solid #444;
    border-radius: 10px;
    padding: 1rem 3rem;

    display: flex;
    margin: 0.5rem 2rem;
    align-items: center;
    gap: 2rem;

    h2 {
        font-size: 1.2rem;
        font-weight: bold;
    }
    h4 {
        font-size: 1.2rem;
    }
    span {
        display: flex;
    }
    .cart-content-item {
        flex: 1;
    }
    .total-price {
        font-size: 1.2rem;
        font-weight: bold;
    }
    .btn-delete {
        color: red;
        font-size: 1.3rem;
    }
`;

export default ShoppingCart;
