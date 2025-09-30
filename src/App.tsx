import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
const App: React.FC = () => {
  return (
    <>
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;
