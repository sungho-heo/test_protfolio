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
    title: "Todo",
    url: "https://github.com/sungho-heo/Todo",
    description:
      "사용자의 할일을 작성하기위한 웹사이트 할일 생성/삭제/조회 기능을 구현, 로그인,회원가입을 구현하여 사용자의 할일을 저장하도록함.",
    tech: ["React, Express, Mongodb, Cloudtype ,Github-page"],
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
                  <ul className={styles["StudyDetails_teach-stacks"]}>
                    {study.tech.map((text) => (
                      <li className={styles["StudyDetails_teach-stack"]}>
                        <strong>{text}</strong>
                      </li>
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
