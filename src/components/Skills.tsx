import styles from "../scss/Skills.module.scss";
import globalStyles from "../scss/styles.module.scss";
export const Skills = () => {
  return (
    <>
      <section id="skills" className={styles.Skills_section}>
        <div className={styles.Skills_content}>
          <div className={globalStyles.SectionTitle_content}>
            <h2
              className={globalStyles.SectionTitle_title}
              style={{ color: "#ffffff" }}
            >
              SKILLS
            </h2>
          </div>
          <div className={styles["Skills_skill-sets"]}>
            <div className={styles.Skills_skill_container}>
              <div className={styles.Skills_name}>
                <h3>Language</h3>
              </div>
              <ul className={styles.Skills_list}>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#3178C6", color: "#ffffff" }}
                >
                  TypeScript
                </li>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#F7DF1E" }}
                >
                  JavaScript
                </li>
              </ul>
            </div>
            <div className={styles.Skills_skill_container}>
              <div className={styles.Skills_name}>
                <h3>Frontend</h3>
              </div>
              <ul className={styles.Skills_list}>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#61DAFB" }}
                >
                  React
                </li>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#FF4154", color: "#ffffff" }}
                >
                  React-Query
                </li>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#646CFF", color: "#ffffff" }}
                >
                  Vite
                </li>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#DB7093", color: "#ffffff" }}
                >
                  Styled-Components
                </li>
              </ul>
            </div>
            <div className={styles.Skills_skill_container}>
              <div className={styles.Skills_name}>
                <h3>Database</h3>
              </div>
              <ul className={styles.Skills_list}>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#47A248", color: "#ffffff" }}
                >
                  Mongodb
                </li>
              </ul>
            </div>
            <div className={styles.Skills_skill_container}>
              <div className={styles.Skills_name}>
                <h3>Tools&dev</h3>
              </div>
              <ul className={styles.Skills_list}>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                >
                  Vercel
                </li>
                <li
                  className={styles.Skills_skill}
                  style={{ backgroundColor: "#181717", color: "#ffffff" }}
                >
                  Github
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
