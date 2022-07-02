import { ItemCard } from "./Itens";
import { Container, Header } from "./style";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgEnter } from "react-icons/cg";

import { CartShop } from "../../providers/carrinho";

export const Cart = () => {
  const navigate = useNavigate();
  const [myProducts, setMyProducts] = useState([]);

  const value = useContext(CartShop);

  useEffect(() => {
    async function addProducts() {
      if (value.products.length > 0) {
        setMyProducts(value.products);
      }
      if (value.products.length === 0) {
        setMyProducts([]);
      }
    }
    addProducts();
  }, [value]);

  const total = myProducts.reduce((act, next) => {
    return act + next.price;
  }, 0);

  return (
    <>
      <Header>
        <h1>Seu carrinho</h1>
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <CgEnter />
          Voltar
        </div>
      </Header>
      <Container myProducts={myProducts}>
        <ul>
          {myProducts.length > 0 ? (
            myProducts.map((product, index) => {
              product.id = index;
              return <ItemCard product={product} key={index} />;
            })
          ) : (
            <>
              <h1 className="Vazio">Carrinho vazio</h1>
              <h1
                className="Link-Voltar"
                onClick={() => {
                  navigate("/");
                }}
              >
                Adicionar Produtos
              </h1>
            </>
          )}
        </ul>
        <div style={{ justifyContent: "space-around" }}>
          <h1>Carrinho</h1>
          <h2>
            <p>Total:</p>
            <p>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </h2>
          <button
            className="Finalizar"
            style={{ cursor: "pointer" }}
            onClick={() => {
              console.log("Pagina finalizar");
            }}
          >
            Finalizar compra
          </button>
        </div>
      </Container>
    </>
  );
};
