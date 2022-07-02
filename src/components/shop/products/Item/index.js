import { useContext } from "react";
import { toast } from "react-toastify";
import { CartShop } from "../../../../providers/carrinho";
import { FaCartArrowDown } from "react-icons/fa"

export const Item = ({ product }) => {
  const { addCartList } = useContext(CartShop);
  return (
    <li>
      <div className="front">
        <figure>
          <img src={product.image} alt={product.name} />
        </figure>
        <article>
          <h1>{product.name}</h1>
          <p>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </article>
        <button
          onClick={() => {
            addCartList(product);
            toast.success("Item adicionado");
          }}
        >
          Adicionar ao carrinho
        </button>
      </div>
      <div className="back">
        <img src={product.image} alt={product.name} />
        <button
          onClick={() => {
            addCartList(product);
            toast.success("Item adicionado");
          }}
        >
          <FaCartArrowDown/>
        </button>
      </div>
    </li>
  );
};
