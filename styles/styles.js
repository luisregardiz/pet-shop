import styled from "styled-components";

//Color logic
const colorPage = (page) => {
    if (page === "Home" || page === "Error") {
        return "#000";
    }

    return "#eee";
};
const colorCategory = (category) => {
    switch (category) {
        case "Dog":
            return "#e67e22";
        case "Cats":
            return "#9b59b6";
        case "Fish":
            return "#16a085";

        default:
            return "#eee";
    }
};

//Homepage
export const HomePage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0 5rem;
    color: #000;
    min-height: 100vh;

    h1 {
        font-size: 3rem;
        font-weight: 900;
        text-transform: uppercase;
    }
`;
export const Divider = styled.div`
    border-left: 8px solid #000;
    height: 200px;
    margin-top: 4rem;
    margin-right: 2rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    border: 2px solid #000;
    background-color: #000;
    margin-top: 1rem;
    font-weight: 600;
    color: #eee;
    font-size: ${(props) => props.size || "1rem"};
    border-radius: 5px;
    padding: ${(props) => props.padding || "1rem 2rem"};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        border: 2px solid #000;
        background: transparent;
        color: #000;
    }
    i {
        margin-left: 0.8rem;
        padding-top: 0.25rem;
        font-size: 1.2rem;
    }
`;
//Navbar
export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        margin-left: 1rem;
        font-size: 1.3rem;
        font-weight: 800;
    }
    i {
        padding-top: 0.25rem;
        font-size: 1.5rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    background: ${(props) => props.bgColor || "transparent"};
    color: ${(props) => colorPage(props.page)};
    align-items: center;
    padding: 0 5rem;

    @media (max-width: 768px) {
        padding: 0 2rem;
    }
`;

export const NavItems = styled.div`
    a {
        display: inline-block;
        margin-left: 3rem;
        font-weight: 600;
    }
    a:after {
        display: block;
        content: "";
        border-bottom: solid 3px;
        border-color: ${(props) => colorPage(props.page)};
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
    }
    a:hover:after {
        transform: scaleX(1);
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const DropDownFood = styled.div`
    z-index: 20;
    position: absolute;
    right: 180px;
    margin: 0.5rem 0;
    display: ${(props) => props.show || "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #eee;
    padding: 1rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 5px;

    a {
        display: inline-block;
        margin: 0.5rem 0;
        font-weight: 600;
    }
    a:after {
        display: block;
        content: "";
        border-bottom: solid 3px #eee;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
    }
    a:hover:after {
        transform: scaleX(1);
    }
`;

export const DropDownToy = styled.div`
    z-index: 20;
    position: absolute;
    right: 100px;
    margin: 0.5rem 0;
    display: ${(props) => props.show || "none"};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000;
    color: #eee;
    padding: 1rem 3rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    border-radius: 5px;

    a {
        display: inline-block;
        margin: 0.5rem 0;
        font-weight: 600;
    }
    a:after {
        display: block;
        content: "";
        border-bottom: solid 3px #eee;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
        transform-origin: 0% 50%;
    }
    a:hover:after {
        transform: scaleX(1);
    }
`;
//Sections
export const Section = styled.section`
    min-height: 100vh;
    background-color: ${(props) => props.bgColor || "#eee"};
    color: ${(props) => props.color || "#eee"};
    padding: 4rem 0;
    h1 {
        text-transform: uppercase;
        font-weight: 900;
        text-align: center;
        border-bottom: 8px solid #eee;
        margin: 2rem auto;
        font-size: 3rem;
        width: ${(props) => props.w || "200px"};
    }
`;

export const SectionProduct = styled.section`
    min-height: 100vh;
    background-color: ${(props) => colorCategory(props.category)};
    color: ${(props) => props.color || "#eee"};
    padding: 4rem 0;
`;

//Card style
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
    margin: 2rem 5rem;
    padding: 2rem;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    @media (max-width: 768px) {
        margin: 2rem;
    }
`;
export const Card = styled.div`
    background-color: white;
    color: #000;
    padding: 1rem;
    border-radius: 5px;

    cursor: pointer;

    img {
        object-fit: cover;
    }
`;

export const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TagProduct = styled.span`
    display: inline-flex;
    background-color: ${(props) => colorCategory(props.category)};
    color: ${(props) => props.color || "#eee"};
    margin-bottom: 1rem;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    font-weight: 500;
`;

export const CardTitle = styled.p`
    font-size: 1rem;
    font-weight: 500;
`;

export const CardPrice = styled.p`
    padding-bottom: 1rem;
    margin: 0;
    font-size: 1.5rem;
    font-weight: bold;
`;

export const CardButton = styled.button`
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 2px solid #eee;
    color: #eee;
    margin-bottom: 1rem;
    background-color: #000;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #000;
        border-color: #000;
        background-color: white;
    }

    i {
        margin-left: 0.5rem;
    }
`;

//Product style
export const Product = styled.article`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 2rem 5rem;
    padding: 2rem;
    background-color: white;
    color: #000;
    border-radius: 10px;
    align-items: center;

    img {
        object-fit: cover;
    }

    .description {
        grid-column: 1/3;
    }
    .divider {
        border-top: 5px solid #000;
        width: 30px;
        margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        margin: 2rem;

        .description {
            grid-column: 1/2;
        }
    }
`;

export const ProductDetail = styled.div`
    h2 {
        text-transform: uppercase;
        font-weight: 900;
        margin-bottom: 0.25rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    .tag {
        display: inline-block;
        margin: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 50px;
        background-color: #000;
        color: white;
    }
    .qty {
        display: flex;
        flex-direction: column;

        select {
            width: 80px;
            margin: 0.5rem 0;
            text-align: center;
            font-size: 16px;
        }

        span {
            font-size: 0.8rem;
            opacity: 70%;
        }
    }

    .btn {
        display: inline-flex;

        button {
            margin-right: 1rem;
            padding: 0.5rem 1rem;
        }
    }
`;
