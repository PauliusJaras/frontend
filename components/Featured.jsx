'use client';

import { styled } from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { CartIcon } from "./icons/CartIcon";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({children}) {


  return (
    <>
      <Bg>
        <Center>
          <ColumnWrapper>
            <Column>
              <div>
                <Title>{children?.title}</Title>
                <Description>
                  {children?.description}
                </Description>
                <ButtonWrapper>
                  <ButtonLink href={`/products/` + children._id} outline={1} white={1} size={"l"}>
                    Read more
                  </ButtonLink>
                  <Button white={1} size={"l"}>
                    {CartIcon()}
                    Add to cart
                  </Button>
                </ButtonWrapper>
              </div>
            </Column>
            <Column>
              <img
                src={children?.images[0]}
                alt={children?.title}
              />
            </Column>
          </ColumnWrapper>
        </Center>
      </Bg>
    </>
  );
}
