import { Section, Grid } from "../../styles/styles";
import CardProduct from "../../components/CardProduct";
import Head from "next/head";

export const getStaticProps = async () => {
    const URL = `${process.env.NEXT_PUBLIC_URL}/toys`;
    const res = await fetch(URL);
    const toys = await res.json();

    return {
        props: {
            toys,
        },
    };
};

const Toys = ({ toys }) => {
    return (
        <>
            <Head>
                <title>Toys | Pet Mania</title>
            </Head>
            <Section bgColor={"#27ae60"} w={"150px"}>
                <h1>Toys</h1>
                <Grid>
                    {toys.map(({ id, title, price, image, pet, slug }) => {
                        const { name } = pet;
                        const { url } = image[0];
                        return (
                            <div key={id}>
                                <CardProduct
                                    id={id}
                                    slug={slug}
                                    title={title}
                                    price={price}
                                    name={name}
                                    url={url}
                                    section="toys"
                                />
                            </div>
                        );
                    })}
                </Grid>
            </Section>
        </>
    );
};

export default Toys;
