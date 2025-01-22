import Header from "./containers/header";

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
