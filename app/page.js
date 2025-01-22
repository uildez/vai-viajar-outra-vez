import { Navbar } from "./containers/navbar";
import { Header } from "./containers/Header";
import { About } from "./containers/About";
import { Guides } from "./containers/Guides";
import { SocialMedia } from "./containers/SocialMedia";
import { Products } from "./containers/Products";
import { Youtube } from "./containers/Youtube";
import { Member } from "./containers/Member";
import { Footer } from "./containers/Footer";

export default function Home() {
  return (
    <div className="font-redonda overflow-hidden">
      <Navbar />
      <Header />
      <About />
      <Guides />
      <SocialMedia />
      <Products />
      <Youtube />
      <Member />
      <Footer />
    </div>
  );
}
