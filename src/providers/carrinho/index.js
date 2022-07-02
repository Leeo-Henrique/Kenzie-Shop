import { createContext, useEffect, useState } from "react";

export const CartShop = createContext([]);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsLocal = JSON.parse(localStorage.getItem("cart")) || [];
    setProducts(productsLocal);
  }, []);

  const addCartList = (item) => {
    setProducts([...products, item]);
    const listLocal = JSON.parse(localStorage.getItem("cart")) || [];
    listLocal.push(item);
    localStorage.setItem("cart", JSON.stringify(listLocal));
  };

  const removeFromCart = (item) => {
    const newProducts = products.filter((itemCart) => itemCart.id !== item.id);
    localStorage.setItem("cart", JSON.stringify(newProducts));

    setProducts(newProducts);
  };

  return (
    <CartShop.Provider value={{ addCartList, removeFromCart, products }}>
      {children}
    </CartShop.Provider>
  );
};
