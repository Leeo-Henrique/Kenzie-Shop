import { createContext, useState } from "react";

export const ProductShop = createContext([]);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Placa de Video RTX 3090 Nvidia",
      price: 20990.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61wbV8oqAbL.__AC_SY300_SX300_QL70_ML2_.jpg",
    },
    {
      name: "Intel Processador Core i9",
      price: 5875.29,
      image: "https://m.media-amazon.com/images/I/51q4V9fOZSL._AC_SX522_.jpg",
    },
    {
      name: "ASUS, ROG Strix Z690-E",
      price: 4290.0,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81hQTzzTLrL.__AC_SX300_SY300_QL70_ML2_.jpg",
    },
    {
      name: "SAMSUNG 980 PRO SSD 2TB",
      price: 2549.79,
      image: "https://m.media-amazon.com/images/I/81zJ87YqekL._AC_SX522_.jpg",
    },
    {
      name: "Monitor Gamer 27 240Hz",
      price: 1740.15,
      image:
        "https://m.media-amazon.com/images/I/614wG7ko+yL._AC_SY300_SX300_.jpg",
    },
    {
      name: "GABINETE SERAPH",
      price: 649.92,
      image:
        "https://media.pichau.com.br/media/catalog/product/cache/2f958555330323e505eba7ce930bdf27/p/g/pgse-0e1-rgb621320.jpg",
    },
  ]);

  const addList = (item) => {
    setProducts([...products, item]);
  };
  
  const removeFromList = (item) => {
    const newProducts = products.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setProducts(newProducts);
  };

  return (
    <ProductShop.Provider value={{ addList, removeFromList, products }}>
      {children}
    </ProductShop.Provider>
  );
};
