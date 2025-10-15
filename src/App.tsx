import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  // Id값에 따른 이동
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <Home scrollToSection={scrollToSection} />
      <Footer />
    </>
  );
};

export default App;
