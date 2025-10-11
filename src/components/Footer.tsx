import styles from "../scss/Footer.module.scss";
export const Footer = () => {
  return (
    <footer className={styles.Footer_Details}>
      &copy; {new Date().getFullYear()}. Heo Sung Ho All rights reserved
    </footer>
  );
};
