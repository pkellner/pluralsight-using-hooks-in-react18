import Header from "./Header";
import Menu from "./Menu";
import { MenuProvider } from "../../contexts/MenuContext";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <MenuProvider>
        <Menu />
        {children}
      </MenuProvider>
    </div>
  );
}
