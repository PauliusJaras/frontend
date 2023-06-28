'use client';

import { styled } from "styled-components"
import Center from "./Center";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`

export default function NewProducts({children}){
    return (
        <Center>
        <ProductsGrid>
            {children?.map((c, index) => <div key={index}>{c.title}</div>)}
        </ProductsGrid>
        </Center>
    )
}