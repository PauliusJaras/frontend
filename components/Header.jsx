"use client";

import Link from "next/link";
import { styled } from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "@/context/CartContext";
import { MenuIcon } from "./icons/MenuIcon";

const StyledHeader = styled.header`
  background-color: #222;
`;

const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  z-index: 3;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const StyledNav = styled.nav`
  ${props => props.active ? `display: block;` : `display: none;`}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px){
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavLink = styled(Link)`
display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px){
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  color: white;
  border: 0;
  cursor: pointer;
  z-index: 3;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

export default function Header() {

  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Ecommerce</Logo>
          <StyledNav active={mobileNavActive}>
            <NavLink onClick={() => setMobileNavActive(prev => !prev)} href={"/"}>Home</NavLink>
            <NavLink onClick={() => setMobileNavActive(prev => !prev)} href={"/products"}>All Products</NavLink>
            <NavLink onClick={() => setMobileNavActive(prev => !prev)} href={"/categories"}>Categories</NavLink>
            <NavLink onClick={() => setMobileNavActive(prev => !prev)} href={"/account"}>Account</NavLink>
            <NavLink onClick={() => setMobileNavActive(prev => !prev)} href={"/cart"}>Cart ({cartProducts?.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <MenuIcon></MenuIcon>
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
