import styles from "../scss/Study.module.scss";
import globalStyles from "../scss/styles.module.scss";

// type
type StudyProps = {
  id: number;
  title: string;
  url: string;
  description: string;
  tech: string[];
};

const studyList: StudyProps[] = [
  {
    id: 1,
    title: "Movie web",
    url: "https://github.com/sungho-heo/movieweb",
    description: "aaaa",
    tech: ["Javascript"],
  },
  {
    id: 2,
    title: "이것저것",
    url: "aa",
    description: "aaa",
    tech: ["Javascript"],
  },
  {
    id: 3,
    title: "이것저것",
    url: "aa",
    description: "aaa2",
    tech: ["Javascript"],
  },
];

export const Study = () => {
  return (
    <>
      <section id="study" className={styles.Study_section}>
        <div className={globalStyles.SectionTitle_content}>
          <h2 className={globalStyles.SectionTitle_title}>STUDY</h2>
        </div>
        <div className={styles.Studies_lists}>
          {studyList.map((study) => (
            <div className={styles.StudyDetails_content}>
              <div className={styles.StudyDetails_card}>
                <h4 className={styles.StudyDetails_title}>
                  <a href={study.url}>{study.title}</a>
                </h4>
                <p className={styles.StudyDetails_description}>
                  {study.description}
                </p>
                <div>
                  <ul className={styles["StudyDetails_teach-stack"]}>
                    {study.tech.map((text) => (
                      <li>{text}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
