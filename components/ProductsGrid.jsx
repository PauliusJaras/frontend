'use client';

import { styled } from "styled-components";
import ProductBox from "./ProductBox";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding-top: 30px;
    @media screen and (min-width: 768px){
        grid-template-columns: repeat(4, 1fr);
    }
`;

export default function ProductsGrid({products}){
    return (
        <>
            <StyledProductsGrid>
                {products?.length > 0 && (
                    products.map((product, index) => (
                        <ProductBox key={index} {...product}>

                        </ProductBox>
                    ))
                )}
            </StyledProductsGrid>
        </>
    )
}