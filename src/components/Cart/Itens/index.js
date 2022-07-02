import { useContext } from "react";
import { toast } from "react-toastify";
import { CartShop } from "../../../providers/carrinho";
import {FaTrashRestoreAlt} from "react-icons/fa"

export const ItemCard = ({ product }) => {
  const { removeFromCart } = useContext(CartShop);
  

  return (
    <li>
      <figure>
        <img src={product.image} alt={product.name} />
      </figure>
      <article>
        <h1>{product.name}</h1>
        <p>
          Preço
          <span>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
      </article>
      <button style={{cursor: "pointer"}}
        onClick={() => {
          removeFromCart(product);
          toast.success("Item removido");
        }}
      >
        <FaTrashRestoreAlt/>
      </button>
    </li>
  );
};
