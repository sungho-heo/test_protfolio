import styles from "../scss/Header.module.scss";
export const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={styles.Header_Title_Container}>
        <h1 className={styles.Header_Title}>HSH'Portfolio</h1>
        {/* -명칭이 들어가면 styles.*로 작성할경우 연산으로 인식하기에 []안에 넣어줘야함 styles[""]이런식 */}
        <nav className={styles["Header_navigation-menu"]}>
          <button className={styles["Header_menu-button"]} type="button">
            About me
          </button>
          <button className={styles["Header_menu-button"]} type="button">
            Skills
          </button>
          <button className={styles["Header_menu-button"]} type="button">
            Archiving
          </button>
          <button className={styles["Header_menu-button"]} type="button">
            Projects
          </button>
          <button className={styles["Header_menu-button"]} type="button">
            Study
          </button>
        </nav>
      </div>
    </header>
  );
};
