import Header from "./Header";
import AppMenu from "./AppMenu";
import About from "../about/About";
import Speakers from "../speakers/Speakers";

export default function Layout({ url }) {
  console.log(url);
  return (
    <div>
      <Header />
      <AppMenu />
      {url === "/about" && <About />}
      {url === "/" && <Speakers />}
    </div>
  );
}
