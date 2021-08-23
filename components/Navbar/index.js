import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { Logo, Nav, NavItems } from "../../styles/styles";
import { MdPets } from "react-icons/md";
import styled from "styled-components";
import { Box, Flex } from "@chakra-ui/react";

const NavWrapper = styled.div`
    position: absolute;
    width: 100%;
    padding: 1rem 0;
`;

const Navbar = ({ childrenName }) => {
    return (
        <NavWrapper>
            <Nav page={childrenName}>
                <div>
                    <Link href="/">
                        <a>
                            <Logo>
                                <i>
                                    <MdPets />
                                </i>
                                <p>Pet Mania</p>
                            </Logo>
                        </a>
                    </Link>
                </div>
                <NavItems page={childrenName}>
                    <Link href="/food">
                        <a>Food</a>
                    </Link>
                    <Link href="/toys">
                        <a>Toys</a>
                    </Link>
                </NavItems>
                <NavItems page={childrenName}>
                    <Link href="/cart">
                        <a>
                            <Box position="relative" top=".5rem">
                                <FiShoppingCart />
                            </Box>
                        </a>
                    </Link>
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                    <Link href="/signup">
                        <a>Sign Up</a>
                    </Link>
                </NavItems>
            </Nav>
        </NavWrapper>
    );
};

export default Navbar;
