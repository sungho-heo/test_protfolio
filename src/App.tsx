import React, { useState } from "react";
import styles from "./scss/styles.module.scss";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";

const App: React.FC = () => {
  // Id값에 따른 이동
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  // 숨겨진 sidebar 출력
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <div className={styles.main_background}>
        <Header
          scrollToSection={scrollToSection}
          setShowSidebar={setShowSidebar}
        />
        <Home
          scrollToSection={scrollToSection}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
