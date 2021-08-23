import Head from "next/head";
import SignUpForm from "../../components/SignUpForm";
import { Section } from "../../styles/styles";

const Signup = () => {
    return (
        <>
            <Head>
                <title>Sign Up | Pet Mania</title>
            </Head>
            <Section bgColor={"#ECC94B"} w={"200px"}>
                <SignUpForm />
            </Section>
        </>
    );
};

export default Signup;
