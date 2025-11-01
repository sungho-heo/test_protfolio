import styles from "../scss/Study.module.scss";
import globalStyles from "../scss/styles.module.scss";

// type
type StudyProps = {
  id: number;
  title: string;
  url: string;
  description: string[];
  tech: string[];
};

const studyList: StudyProps[] = [
  {
    id: 1,
    title: "Todo",
    url: "https://github.com/sungho-heo/Todo",
    description: [
      "프로젝트 하다보면 해야할일을 작성해둬야하는데 공부할겸 만들어보게되었습니다. ",
      "할일 생성/삭제/조회 기능을 구현, 로그인,회원가입을 구현하여 사용자의 할일을 저장하도록함.",
    ],
    tech: ["React, Express, Mongodb, Cloudtype, Github-page"],
  },
  {
    id: 2,
    title: "Hotube (YouTube Clone)",
    url: "https://github.com/sungho-heo/Hotube",
    description: [
      "Aws및 Mongodb사용하면서 역량을 기르기위해서 시작하게된 프로젝트입니다. ",
      "기능은 영상 업로드, 삭제, 로그인, 회원가입, 영상의 댓글달기 해당 프로젝트를 진행하면서 데이터가 DB에 어떻게 들어가며 DB와 웹의 송수신에 대해 이해하는데 많은 도움이 되었습니다.",
    ],
    tech: ["Javascript, MongoDB, Pug(탬플릿엔진), SASS, Webpack, Aws S3"],
  },
  {
    id: 3,
    title: "이것저것",
    url: "aa",
    description: ["aaa2"],
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
                {study.description.map((text) => (
                  <li className={styles.StudyDetails_description}>{text}</li>
                ))}
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
