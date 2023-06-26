"use client";

import { styled } from "styled-components";
import Center from "./Center";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured() {
  return (
    <>
      <Bg>
        <Center>
          <Wrapper>
            <Column>
              <div>
                <Title>Pro anywhere</Title>
                <Description>
                  <span>
                    Culpa ipsa et ducimus rem, consequuntur, eius iste beatae
                    esse numquam, eaque facilis! Optio expedita ut reprehenderit
                    eum est repudiandae hic, neque odio magni laboriosam quod
                    voluptates! Officia, iste repudiandae.
                  </span>
                </Description>
              </div>
            </Column>
            <Column>
              <img
                src="https://kainos-img.dgn.lt/photos2_25_125332528/img.jpg"
                alt="macbook"
              />
            </Column>
          </Wrapper>
        </Center>
      </Bg>
    </>
  );
}
