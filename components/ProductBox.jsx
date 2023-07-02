import { styled } from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled.h2`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

export default function ProductBox({ _id, title, description, price, images })
 {

  const {addProduct} = useContext(CartContext);

  const addToCart = _ => {
    addProduct(_id);
  }

    const url = '/products/'+_id;

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images[0]}></img>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title>{title}</Title>
        <PriceRow>
          <Price>{price}$</Price>
          <Button onClick={addToCart} primary={1} outline={1}>Add to Cart</Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
