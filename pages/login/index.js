import Head from "next/head";
import LoginForm from "../../components/LoginForm";
import { Section } from "../../styles/styles";

const Login = () => {
    return (
        <>
            <Head>
                <title>Login | Pet Mania</title>
            </Head>
            <Section bgColor={"#0BC5EA"} w={"200px"}>
                <LoginForm />
            </Section>
        </>
    );
};

export default Login;
