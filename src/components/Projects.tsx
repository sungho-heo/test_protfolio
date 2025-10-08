import globalStyles from "../scss/styles.module.scss";
import styles from "../scss/Projects.module.scss";
export const Projects = () => {
  return (
    <>
      <section id="projects" className={styles.Projects_section}>
        <div className={styles.Projects_content}>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>PROJECTS</h2>
          </div>
          <div className={styles["ProjectDetails_project-details"]}>
            <div className={styles["ProjectDetails_project-detail"]}>
              <h4 className={styles.ProjectsDetails_name}>1세대 포켓몬 도감</h4>
              <span className={styles["ProjectDetails_period"]}>
                2024.05.20~2024.09.24 (1인 프로젝트)
              </span>
              <div className={styles.ProjectDetails_container}>
                <h5 className={styles.ProjectDetails_title}>
                  1세대 포켓몬 정보를 빠르게 알기위한 포켓몬 도감
                </h5>
                <ul className={styles.ProjectDetails_summary}>
                  <li>
                    포켓몬을 평소에 좋아해서 1세대 포켓몬정보를 정리하기위해
                    제작
                  </li>
                </ul>
              </div>
              <div className={styles.ProjectsDetails_url}>
                <a
                  href="https://sungho-heo.github.io/poke2_front/"
                  target="_blank"
                >
                  https://sungho-heo.github.io/poke2_front/
                </a>
              </div>
              <span className={styles["ProjectDetails_teach-stack"]}>
                TypeScript, React, styled-css, github
              </span>
              <div className={styles["ProjectDetails_button-container"]}>
                <button
                  className={styles["ProjectDetails_readme-button"]}
                  type="button"
                >
                  README
                </button>
                <button
                  className={styles["ProjectDetails_image-button"]}
                  type="button"
                >
                  PREVIEW
                </button>
              </div>
            </div>
            <div className={styles["ProjectDetails_project-detail"]}>
              <h4 className={styles.ProjectsDetails_name}>
                날씨에 따라 옷차림 추천
              </h4>
              <span className={styles["ProjectDetails_period"]}>
                2024.09.01~2024.12.21
              </span>
              <div className={styles.ProjectDetails_container}>
                <h5 className={styles.ProjectDetails_title}>
                  날씨와 온도에 따라 밖에 나갈옷을 추천해주는 날씨웹
                </h5>
                <ul className={styles.ProjectDetails_summary}>
                  <li>프로젝트2 기능설명</li>
                </ul>
              </div>
              <div className={styles.ProjectsDetails_url}>
                <a
                  href="https://sungho-heo.github.io/weather_tuto/"
                  target="_blank"
                >
                  https://sungho-heo.github.io/weather_tuto/
                </a>
              </div>
              <span className={styles["ProjectDetails_teach-stack"]}>
                TypeScript, React, styled-css, github
              </span>
              <div className={styles["ProjectDetails_button-container"]}>
                <button
                  className={styles["ProjectDetails_readme-button"]}
                  type="button"
                >
                  README
                </button>
                <button
                  className={styles["ProjectDetails_image-button"]}
                  type="button"
                >
                  PREVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
