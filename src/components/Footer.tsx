import styles from "../scss/Footer.module.scss";

// Footer
export const Footer = () => {
  return (
    <footer className={styles.Footer_Details}>
      {/* 연도마다 갱신 */}
      &copy; {new Date().getFullYear()}. Heo Sung Ho All rights reserved
    </footer>
  );
};
