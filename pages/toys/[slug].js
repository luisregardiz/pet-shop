import Head from "next/head";
import Products from "../../components/Products";
import { SectionProduct } from "../../styles/styles";

export const getStaticPaths = async () => {
    const URL = `${process.env.NEXT_PUBLIC_URL}/toys`;
    const res = await fetch(URL);
    const toys = await res.json();

    const paths = toys.map((toy) => ({
        params: {
            slug: toy.slug,
        },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
    const URL = `${process.env.NEXT_PUBLIC_URL}/toys/${params.slug}`;

    const res = await fetch(URL);
    const toy = await res.json();

    return {
        props: {
            toy,
        },
    };
};

const ToysDetail = ({ toy }) => {
    const { name } = toy.pet;
    const { title } = toy;

    return (
        <>
            <Head>
                <title>{title} | Pet Mania</title>
            </Head>
            <SectionProduct category={name}>
                <Products section={toy} />
            </SectionProduct>
        </>
    );
};

export default ToysDetail;
