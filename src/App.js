import { ProviderGlobal } from "./providers";
import "./App.css";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

import { Rotas } from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <ProviderGlobal>
        <Rotas />
      </ProviderGlobal>
    </div>
  );
}

export default App;
