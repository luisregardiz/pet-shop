import { Grid, Section } from "../../styles/styles";
import CardProduct from "../../components/CardProduct";
import Head from "next/head";

export const getStaticProps = async () => {
    const URL = `${process.env.NEXT_PUBLIC_URL}/foods`;

    const res = await fetch(URL);
    const foods = await res.json();

    return {
        props: {
            foods,
        },
    };
};

const Food = ({ foods }) => {
    return (
        <>
            <Head>
                <title>Food | Pet Mania</title>
            </Head>
            <Section bgColor={"#e67e22"} w={"150px"}>
                <h1>Food</h1>
                <Grid>
                    {foods.map(
                        ({ id, title, price, weight, image, pet, slug }) => {
                            const { name } = pet;
                            const { url } = image[0];
                            return (
                                <div key={id}>
                                    <CardProduct
                                        id={id}
                                        slug={slug}
                                        title={title}
                                        price={price}
                                        weight={weight}
                                        name={name}
                                        url={url}
                                        section="food"
                                    />
                                </div>
                            );
                        }
                    )}
                </Grid>
            </Section>
        </>
    );
};

export default Food;
