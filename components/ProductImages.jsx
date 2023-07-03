"use client";

import { useState } from "react";
import { styled } from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const PrimaryImage = styled.img`
  max-width: 100%;
  max-height: 200px;
`;

const PrimaryImageWrapper = styled.div`
  text-align: center;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const ImageButton = styled.div`
  border: 2px solid;
  ${(props) => {
    if (props.active) {
      return `border-color: #ccc;`;
    } else {
      return `border-color: transparent;
            opacity: .5;`;
    }
  }}
  border-radius: 5px;
  height: 40px;
  padding: 5px;
  cursor: pointer;
`;

export default function ProductImages({ images }) {
  const [primaryImage, setPrimaryImage] = useState(images?.[0]);

  return (
    <>
      <PrimaryImageWrapper>
        <PrimaryImage src={primaryImage} alt="image"></PrimaryImage>
      </PrimaryImageWrapper>
      <ImageButtons>
        {images.map((image, index) => {
          return (
            <ImageButton active={image === primaryImage} key={index}>
              <Image
                onClick={() => setPrimaryImage(image)}
                src={image}
                alt={"product img"}
              ></Image>
            </ImageButton>
          );
        })}
      </ImageButtons>
    </>
  );
}
