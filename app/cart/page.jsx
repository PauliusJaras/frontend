"use client";

import Button from "@/components/Button";
import Center from "@/components/Center";
import { CartContext } from "@/context/CartContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { styled } from "styled-components";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

export default function Cart() {
  const { cartProducts } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      axios
        .post("/api/products", { ids: cartProducts })
        .then((response) => setProducts(response.data));
    }
  }, [cartProducts]);

  return (
    <>
      <Center>
        <ColumnWrapper>
          <Box>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <>
                <h2>Cart</h2>
                {products?.map((cart) => cart.title)}
              </>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <input type="text" placeholder="Address"></input>
              <input type="text" placeholder="Address 2"></input>
              <Button block={1} primary={1}>
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnWrapper>
      </Center>
    </>
  );
}
