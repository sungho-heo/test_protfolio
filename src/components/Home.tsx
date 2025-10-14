import homeStyles from "../scss/Home.module.scss";
import globalStyles from "../scss/styles.module.scss";
import { Aboutme } from "./Aboutme";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Study } from "./Study";

// type
type HomeProps = {
  scrollToSection: (id: string) => void;
};

export const Home: React.FC<HomeProps> = ({ scrollToSection }) => {
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
      <Skills />
      {/* Archiving */}
      <section id="archiving" className={homeStyles.Archving_section}>
        <div className={homeStyles.Archiving_content}>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>ARCHIVING</h2>
          </div>
          <div className={homeStyles.Archiving_archives}>
            <a
              className={homeStyles.Archiving_archive}
              href="https://github.com/sungho-heo"
              target="_blank"
            >
              <div className={homeStyles.Archiving_img}></div>
              <h3>Github</h3>
              <p>코드 저장소</p>
            </a>
          </div>
        </div>
      </section>
      {/* Projects */}
      <Projects />
      {/* Study */}
      <Study />
      <div className={homeStyles.Remocon_content}>
        <button
          className={homeStyles.Remocon_button}
          onClick={() => scrollToSection("about-me")}
        >
          Aboutme
        </button>
        <button
          className={homeStyles.Remocon_button}
          onClick={() => scrollToSection("skills")}
        >
          Skills{" "}
        </button>
        <button
          className={homeStyles.Remocon_button}
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className={homeStyles.Remocon_button}
          onClick={() => scrollToSection("study")}
        >
          Study
        </button>
      </div>
    </>
  );
};
