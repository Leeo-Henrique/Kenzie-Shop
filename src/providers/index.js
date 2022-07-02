import { ProductProvider } from "./itens";
import { CartProvider } from "./carrinho";

export const ProviderGlobal = ({ children }) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};
