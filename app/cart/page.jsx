"use client";

import Button from "@/components/Button";
import Center from "@/components/Center";
import Input from "@/components/Input";
import Table from "@/components/Table";
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

const ProductInfoCell = styled.td`
  padding: 10px 0;
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function Cart() {
  const { cartProducts, addProduct, removeProduct } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  let totalAmount = 0;
  for (const productId of cartProducts) {
    const price = products.find((p) => p._id === productId)?.price || 0;
    totalAmount += price;
  }

  useEffect(() => {
    if (cartProducts?.length > 0) {
      axios
        .post("/api/products", { ids: cartProducts })
        .then((response) => setProducts(response.data));
    } else {
      setProducts([]);
    }
  }, [cartProducts]);

  const addQuantity = (id) => {
    addProduct(id);
  };

  const removeQuantity = (id) => {
    removeProduct(id);
  };

  async function submitData() {
    event.preventDefault();
    const data = {
      name,
      email,
      city,
      postalCode,
      address,
      country,
      products: cartProducts.join(","),
    };
    const response = await axios.post("/api/checkout", data);
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  if (window?.location.href.includes("success")) {
    return (
      <>
        <Center>
          <ColumnWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnWrapper>
        </Center>
      </>
    );
  }

  return (
    <>
      <Center>
        <ColumnWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products?.map((cart, index) => (
                    <tr key={index}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={cart.images[0]} alt="product image"></img>
                        </ProductImageBox>
                        {cart.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => removeQuantity(cart._id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {cartProducts.filter((id) => id === cart._id).length}
                        </QuantityLabel>
                        <Button onClick={() => addQuantity(cart._id)}>+</Button>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === cart._id).length *
                          cart.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>{totalAmount}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <form onSubmit={submitData}>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></Input>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                  ></Input>
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(e) => setPostalCode(e.target.value)}
                  ></Input>
                </CityHolder>
                <Input
                  type="text"
                  placeholder="Street Address"
                  value={address}
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                ></Input>
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={(e) => setCountry(e.target.value)}
                ></Input>
                <input
                  type="hidden"
                  name="products"
                  value={cartProducts.join(",")}
                />
                <Button block={1} primary={1}>
                  Continue to payment
                </Button>
              </form>
            </Box>
          )}
        </ColumnWrapper>
      </Center>
    </>
  );
}
