import styles from "../scss/Header.module.scss";
import { HiOutlineMenu } from "react-icons/hi";

// header type
type HeaderProps = {
  scrollToSection: (id: string) => void;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

// Header
export const Header: React.FC<HeaderProps> = ({
  scrollToSection,
  setShowSidebar,
}) => {
  return (
    <header className={styles.Header}>
      <div id="header" className={styles.Header_Title_Container}>
        <button
          className={styles.Header_Title}
          type="button"
          onClick={() => scrollToSection("header")}
        >
          HSH'Portfolio
        </button>
        {/* -명칭이 들어가면 styles.*로 작성할경우 연산으로 인식하기에 []안에 넣어줘야함 styles[""]이런식 */}
        <nav className={styles["Header_navigation-menu"]}>
          <button
            className={styles["Header_nav-button"]}
            type="button"
            onClick={() => scrollToSection("about-me")}
          >
            About me
          </button>
          <button
            className={styles["Header_nav-button"]}
            type="button"
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>
          <button
            className={styles["Header_nav-button"]}
            type="button"
            onClick={() => scrollToSection("archiving")}
          >
            Archiving
          </button>
          <button
            className={styles["Header_nav-button"]}
            type="button"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className={styles["Header_nav-button"]}
            type="button"
            onClick={() => scrollToSection("study")}
          >
            Study
          </button>
        </nav>
        <div
          className={styles.Header_menu}
          onMouseEnter={() => setShowSidebar(true)}
        >
          <HiOutlineMenu className={styles["Header_menu-icon"]} />
        </div>
      </div>
    </header>
  );
};
