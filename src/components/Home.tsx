import homeStyles from "../scss/Home.module.scss";
import globalStyles from "../scss/styles.module.scss";
import { Aboutme } from "./Aboutme";
export const Home = () => {
  return (
    <>
      {/* 간단 자기소개 */}
      <div className={homeStyles.Centerhead_container}>
        <div className={homeStyles.Centerhead_content}>
          <h1 className={homeStyles.Centerhead_title}>
            - 허성호 -
            <br />
            프론트 엔드 개발자 포트폴리오
          </h1>
          <hr className={homeStyles.Centerhead_divide} />
          <h3 className={homeStyles.Centerhead_description}>
            안녕하세요,
            <br />
            프론트엔드 개발자 허성호입니다.
          </h3>
        </div>
      </div>
      {/* About me */}
      <Aboutme />
      {/* Skills */}
      <section id="skills" className={homeStyles.Skills_section}>
        <div className={homeStyles.Skills_content}>
          <div className={globalStyles.SectionTitle_content}>
            <h2
              className={globalStyles.SectionTitle_title}
              style={{ color: "#ffffff" }}
            >
              SKILLS
            </h2>
          </div>
          <div className={homeStyles["Skills_skill-sets"]}>
            <div className={homeStyles.Skills_skill_container}>
              <div className={homeStyles.Skills_name}>
                <h3>Language</h3>
              </div>
              <ul className={homeStyles.Skills_list}>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#3178C6", color: "#ffffff" }}
                >
                  TypeScript
                </li>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#F7DF1E" }}
                >
                  JavaScript
                </li>
              </ul>
            </div>
            <div className={homeStyles.Skills_skill_container}>
              <div className={homeStyles.Skills_name}>
                <h3>Frontend</h3>
              </div>
              <ul className={homeStyles.Skills_list}>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#61DAFB" }}
                >
                  React
                </li>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#FF4154", color: "#ffffff" }}
                >
                  React-Query
                </li>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#646CFF", color: "#ffffff" }}
                >
                  Vite
                </li>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#DB7093", color: "#ffffff" }}
                >
                  Styled-Components
                </li>
              </ul>
            </div>
            <div className={homeStyles.Skills_skill_container}>
              <div className={homeStyles.Skills_name}>
                <h3>Database</h3>
              </div>
              <ul className={homeStyles.Skills_list}>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#47A248", color: "#ffffff" }}
                >
                  Mongodb
                </li>
              </ul>
            </div>
            <div className={homeStyles.Skills_skill_container}>
              <div className={homeStyles.Skills_name}>
                <h3>Tools&dev</h3>
              </div>
              <ul className={homeStyles.Skills_list}>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#000000", color: "#ffffff" }}
                >
                  Vercel
                </li>
                <li
                  className={homeStyles.Skills_skill}
                  style={{ backgroundColor: "#181717", color: "#ffffff" }}
                >
                  Github
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Archiving */}
      <section>
        <div>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>ARCHIVING</h2>
          </div>
          <div>
            <div>
              <h3>Github</h3>
            </div>
            <div>
              <p>
                <a href="https://github.com/sungho-heo">
                  github.com/sungho-heo
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section>
        <div>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>PROJECTS</h2>
          </div>
          <div>
            <h3>Project1</h3>
            <div>
              <h5>프로젝트1 간단설명</h5>
              <ul>
                <li>프로젝트1 기능설명</li>
              </ul>
              <div>
                <p>link들어갈 자리</p>
              </div>
              <div>
                <p>사용된 skills 서술</p>
              </div>
              <div>
                <p>readme 들어갈곳</p>
              </div>
            </div>
          </div>
          <div>
            <h3>Project2</h3>
            <div>
              <h5>프로젝트2 간단설명</h5>
              <ul>
                <li>프로젝트2 기능설명</li>
              </ul>
              <div>
                <p>link 들어갈자리</p>
              </div>
              <div>
                <p>사용된 skills 서술</p>
              </div>
              <div>
                <p>readme 들어갈곳</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Study */}
      <section>
        <div>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>STUDY</h2>
          </div>
          <div>
            <h4>학습한거1</h4>
            <div>
              <h5>대표적으로 설명할 간단 설명1</h5>
              <ul>
                <li>학습설명 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
