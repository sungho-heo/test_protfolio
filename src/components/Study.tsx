import styles from "../scss/Study.module.scss";
import globalStyles from "../scss/styles.module.scss";
export const Study = () => {
  return (
    <>
      <section id="study" className={styles.Study_section}>
        <div className={globalStyles.SectionTitle_content}>
          <h2 className={globalStyles.SectionTitle_title}>STUDY</h2>
        </div>
        <div className={styles.Studies_lists}>
          <div className={styles.StudyDetails_content}>
            <div className={styles.StudyDetails_card}>
              <h4 className={styles.StudyDetails_title}>
                <a href="https://github.com/sungho-heo/movieweb">Movie web</a>
              </h4>
              <p className={styles.StudyDetails_description}>설명 부분</p>
              <div>
                <ul className={styles["StudyDetails_teach-stack"]}>
                  <li>Javascript</li>
                  <li>aaa</li>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.StudyDetails_content}>
            <div className={styles.StudyDetails_card}>
              <h4 className={styles.StudyDetails_title}>
                <a>이것저것</a>
              </h4>
              <p className={styles.StudyDetails_description}>설명 부분</p>
              <div>
                <ul className={styles["StudyDetails_teach-stack"]}>
                  <li>Javascript</li>
                  <li>aaa</li>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.StudyDetails_content}>
            <div className={styles.StudyDetails_card}>
              <h4 className={styles.StudyDetails_title}>
                <a>이것저것</a>
              </h4>
              <p className={styles.StudyDetails_description}>설명 부분</p>
              <div>
                <ul className={styles["StudyDetails_teach-stack"]}>
                  <li>Javascript</li>
                  <li>aaa</li>
                  <li>a</li>
                  <li>b</li>
                  <li>c</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
