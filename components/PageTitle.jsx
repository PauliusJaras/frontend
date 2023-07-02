'use client';

import { styled } from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
`;

export default function PageTitle({children}){
    return (
        <>
                <Title>{children}</Title>   
        </>
    )
}