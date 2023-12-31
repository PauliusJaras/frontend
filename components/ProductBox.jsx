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
  font-size: 1.1rem;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  @media screen and (min-width: 768px){
    display: flex;
    gap: 10px
  }
`;

const Price = styled.div`
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    @media screen and (min-width: 768px){
      font-size: 1.5rem;
      text-align: left;
    }
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
          <Button block onClick={addToCart} primary={1} outline={1}>Add to Cart</Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
