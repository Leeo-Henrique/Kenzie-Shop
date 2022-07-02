import { Container, StyledTextField } from "./style";
import { useNavigate } from "react-router-dom";
import { CgEnter } from "react-icons/cg";
import {BsCartCheckFill} from "react-icons/bs"

export const Header = ({ setString, string, filtro }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <h1
        onClick={() => {
          window.location.reload();
        }}
      >
        Kenzie Shop
      </h1>

      <nav>
        <div>
          <StyledTextField
            id="outlined-basic"
            label="Procurar"
            value={string}
            variant="outlined"
            placeholder="Procure seu item"
            onChange={(e) => setString(e.target.value)}
            type="text"
            autoComplete="off"
          />
          <button
          className="pesquisar"
            onClick={() => {
              filtro(string);
            }}
          >
            Pesquisar
          </button>
        </div>
        <div>
          <button
            style={{cursor:"pointer"}}
            className="Button"
            onClick={() => {
              navigate("/Cart");
            }}
          >
            < BsCartCheckFill/>Carrinho
          </button>
          <button>
            <CgEnter />
            Entrar
          </button>
        </div>
      </nav>
    </Container>
  );
};
