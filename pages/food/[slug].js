import { SectionProduct } from "../../styles/styles";
import Products from "../../components/Products";
import Head from "next/head";

export const getStaticPaths = async () => {
    const URL = `${process.env.NEXT_PUBLIC_URL}/foods`;
    const res = await fetch(URL);
    const foods = await res.json();

    const paths = foods.map((food) => ({
        params: {
            slug: food.slug,
        },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const URL = `${process.env.NEXT_PUBLIC_URL}/foods/${params.slug}`;

    const res = await fetch(URL);
    const food = await res.json();

    return {
        props: {
            food,
        },
    };
};

const FoodDetail = ({ food }) => {
    const { name } = food.pet;
    const { title } = food;

    return (
        <>
            <Head>
                <title>{title} | Pet Mania</title>
            </Head>

            <SectionProduct category={name}>
                <Products section={food} />
            </SectionProduct>
        </>
    );
};

export default FoodDetail;
