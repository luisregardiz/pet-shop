import "../styles/globals.css";
import Layout from "../components/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <CartProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </CartProvider>
        </ChakraProvider>
    );
}

export default MyApp;
