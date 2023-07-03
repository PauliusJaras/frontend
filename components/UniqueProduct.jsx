'use client';

import { styled } from "styled-components";
import PageTitle from "./PageTitle";
import ProductImages from "./ProductImages";
import Button from "./Button";
import { CartIcon } from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    margin-top: 40px;
    gap: 40px;
`;

const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const PriceRow = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Price = styled.span`
    font-size: 1.5rem;
    font-weight: medium;
`;

export default function UniqueProduct({product}){

    const {addProduct} = useContext(CartContext);

    return (
        <>
            <ColumnWrapper>
                <WhiteBox>
                    <ProductImages images={product.images}></ProductImages>
                </WhiteBox>
                <div>
                    <PageTitle>{product.title}</PageTitle>
                    <p>
                        {product.description}
                    </p>
                    <PriceRow>
                    <Price>${product.price}</Price>
                    <Button onClick={() => addProduct(product._id)} primary={1}>
                        <CartIcon></CartIcon>
                        Add To Cart
                    </Button>
                    </PriceRow>
                </div>
            </ColumnWrapper>
        </>
    )
}