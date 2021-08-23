import Image from "next/image";
import {
    Card,
    CardDetail,
    CardPrice,
    CardTitle,
    TagProduct,
} from "../../styles/styles";
import Link from "next/link";
const CardProduct = ({
    id,
    title,
    price,
    weight,
    name,
    url,
    section,
    slug,
}) => {
    return (
        <Link href={`/${section}/${slug}`}>
            <a>
                <Card>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_URL}${url}`}
                        alt="image-product"
                        width={300}
                        height={300}
                    />
                    <CardDetail>
                        <CardTitle>{title}</CardTitle>
                        <div>
                            {weight ? (
                                <TagProduct color={"#000"}>{weight}</TagProduct>
                            ) : null}
                            <TagProduct category={name}>{name}</TagProduct>
                        </div>
                        <CardPrice>USD$ {price}</CardPrice>
                    </CardDetail>
                </Card>
            </a>
        </Link>
    );
};

export default CardProduct;
