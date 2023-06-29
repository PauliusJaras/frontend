"use client";

import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  padding-top: 30px;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin: 30px 0 20px;
    font-weight: 500;
`

export default function NewProducts({ children }) {
  return (
    <Center>
        <Title>New Arrivals</Title>
      <ProductsGrid>
        {children?.map((child, index) => (
          <ProductBox key={index} {...child}></ProductBox>
        ))}
      </ProductsGrid>
    </Center>
  );
}
