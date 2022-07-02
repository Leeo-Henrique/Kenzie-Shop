import { useState } from "react";
import { Header } from "./header";
import { Shop } from "./products/index";
import { Container } from "./styles";
import { useContext } from "react";
import { ProductShop } from "../../providers/itens";
import { toast } from "react-toastify";
export const Home = () => {
  const [string, setString] = useState("");

  const [arrFiltrado, setArrFiltrado] = useState([]);

  const { products } = useContext(ProductShop);

  const filtro = (string) => {
    let filtrado = products.filter((filtrar) => {
      const valorAFiltrar = string.trim().toLowerCase();
      if (filtrar.name.toLowerCase() === valorAFiltrar) {
        return filtrar;
      } else if (filtrar.name !== valorAFiltrar && valorAFiltrar !== "") {
        return filtrar.name.toLowerCase().includes(valorAFiltrar);
      } else {
        return filtrar === valorAFiltrar;
      }
    });
    
    if (filtrado.length > 0) {
      setString("");
      toast.success("Produto encontrado");
    } else {
      setString("");
      toast.error("Produto nao encontrado!");
    }

    setArrFiltrado(filtrado);
  };

  return (
    <Container>
      <Header setString={setString} filtro={filtro} string={string} />
      <Shop arrFiltrado={arrFiltrado} />
    </Container>
  );
};
