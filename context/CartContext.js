const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {

  const [cartProducts, setCartProducts] = useState([]);

  function addProduct(productId) {
    setCartProducts((prev) => [...prev, productId]);
  }

  function removeProduct(productId){
    setCartProducts((prev) => {
      const pos = prev.indexOf(productId);
      if(pos !== -1){
        return prev.filter((value, index) => index !== pos);
      } else{
        return prev;
      }
    })
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'));
    if(data !== null){
      setCartProducts([...data]);
    }
  }, [])

  useEffect(() => {
    if (cartProducts?.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
