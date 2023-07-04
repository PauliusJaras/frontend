'use client';

import Header from "@/components/Header";
import { CartContextProvider } from "@/context/CartContext";

export default function PageWrapper({children, roboto}){
    return (

        <CartContextProvider>
        <body className={roboto.className}>
          <Header></Header>
          {children}
        </body>
        </CartContextProvider>

    )
}