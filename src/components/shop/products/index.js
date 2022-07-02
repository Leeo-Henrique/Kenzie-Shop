import { Vitrine } from "./style";
import { Item } from "./Item";
import { ProductShop } from "../../../providers/itens";
import { useContext } from "react";

export const Shop = ({ arrFiltrado }) => {
  const { products } = useContext(ProductShop);
  return (
    <Vitrine>
      {arrFiltrado.length > 0
        ? arrFiltrado.map((product, index) => {
            return <Item product={product} key={index}></Item>;
          })
        : products.map((product, index) => {
            return <Item product={product} key={index}></Item>;
          })}
    </Vitrine>
  );
};
