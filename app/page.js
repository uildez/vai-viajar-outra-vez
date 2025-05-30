import About from "./containers/about";
import { Ebook } from "./containers/ebook";
import { Grupovip } from "./containers/grupovip";
import Footer from "./containers/footer";
import Guides from "./containers/guides";
import Header from "./containers/header";
import Member from "./containers/member";
import Navbar from "./containers/navbar";
// import Products from "./containers/products";
import SocialMedia from "./containers/socialMedia";
import Youtube from "./containers/youtube";

export default function Home() {
  return (
    <div className="font-redonda overflow-hidden max-w-screen">
      <Navbar />
      <Header />
      <About />
      <Guides />
      <SocialMedia />
      <Ebook />
      <Grupovip />
      {/* <Products /> */}
      <Youtube />
      <Member />
      <Footer />
    </div>
  );
}
