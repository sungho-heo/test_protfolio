import { useState } from "react";
import { Modal } from "./Modal";
import globalStyles from "../scss/styles.module.scss";
import styles from "../scss/Projects.module.scss";

// type
type ProjectsProps = {
  id: number;
  title: string;
  period: string;
  detailTitle: string;
  summary: string[];
  url: string;
  why: string;
  tech: string;
  meaning: string;
};

// project내용
const projectList: ProjectsProps[] = [
  {
    id: 1,
    title: "1세대 포켓몬 도감",
    period: "2024.05.20~2024.09.24 (1인 프로젝트)",
    url: "https://sungho-heo.github.io/poke2_front",
    detailTitle: "1세대 포켓몬 정보를 빠르게 알기위한 포켓몬 도감",
    summary: ["포켓몬을 평소에 좋아해서 1세대 포켓몬정보를 정리하기위해 제작"],
    why: "aaaa",
    meaning: "aaaa2",
    tech: "TypeScript, React, styled-css, Mongodb",
  },
  {
    id: 2,
    title: "날씨에 따라 옷차림 추천",
    period: "2024.09.01~2024.12.21",
    url: "https://sungho-heo.github.io/weather_tuto",
    detailTitle: "날씨와 온도에 따라 밖에 나갈옷을 추천해주는 날씨웹",
    summary: [
      "온도에따라 옷을 어떻게 입을지 고민하다가 제작하게 되었습니다.",
      "Redux를 활용해 날씨데이터 상태값 관리",
      "Rechart를 활용해 시간대별 온도값 그래프로 시각화",
    ],
    why: "aaaa",
    meaning: "aaaa2",
    tech: "TypeScript, React, styled-css,github, Redux",
  },
  {
    id: 3,
    title: "포트폴리오 웹사이트",
    period: "2025.10 (1인 프로젝트)",
    url: "",
    detailTitle: "포트폴리오 사이트",
    summary: ["저만의 포트폴리오 제작을위해서 개발"],
    why: "aaaa",
    meaning: "aaaa2",
    tech: "TypeScript, React, Sass, vercel",
  },
];

export const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectsProps | null>(
    null
  );

  const openModal = (project: ProjectsProps) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <>
      <section id="projects" className={styles.Projects_section}>
        <div className={styles.Projects_content}>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>PROJECTS</h2>
          </div>
          <div className={styles["ProjectDetails_project-details"]}>
            {projectList.map((project) => (
              <div
                key={project.id}
                className={styles["ProjectDetails_project-detail"]}
              >
                <h4 className={styles.ProjectsDetails_name}>{project.title}</h4>
                <div className={styles["ProjectDetails_period"]}>
                  {project.period}
                </div>
                <div className={styles.ProjectDetails_container}>
                  <h5 className={styles.ProjectDetails_title}>
                    {project.detailTitle}
                  </h5>
                  <ul className={styles.ProjectDetails_summary}>
                    {project.summary.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.ProjectsDetails_url}>
                  <a href={project.url} target="_blank">
                    {project.url}
                  </a>
                </div>
                <div className={styles["ProjectDetails_teach-stack"]}>
                  {project.tech}
                </div>
                <div className={styles["ProjectDetails_button-container"]}>
                  <button
                    className={styles["ProjectDetails_readme-button"]}
                    type="button"
                    onClick={() => openModal(project)}
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
            ))}
          </div>
        </div>
      </section>
      {/* 모달 */}
      {isModalOpen && selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className={styles.Modal_body}>
            <div className={styles.Mardown_header} dir="auto">
              <h1 className={styles["MarkDown_header-title"]} dir="auto">
                {selectedProject.title}
              </h1>
            </div>
            <div className={styles.MarkDown_period} dir="auto">
              {selectedProject.period}
            </div>
            <div className={styles.Mardown_header} dir="auto">
              <h2 className={styles["MarkDown_header-text"]} dir="auto">
                🖇️ URL
              </h2>
            </div>
            <p dir="auto">
              <a href={selectedProject.url}>{selectedProject.url}</a>
            </p>
            <div className={styles.Mardown_header} dir="auto">
              <h2 className={styles["MarkDown_header-text"]} dir="auto">
                📝 Summary
              </h2>
            </div>
            <p dir="auto">
              <strong>{selectedProject.title}</strong>
            </p>
            <ul dir="auto">
              {/* {projectList.map((project) => ( */}
              {selectedProject.summary.map((text) => (
                <li>{text}</li>
              ))}
            </ul>
            <div className={styles.Mardown_header} dir="auto">
              <h2 className={styles["MarkDown_header-text"]} dir="auto">
                🤔 Why Develop?
              </h2>
            </div>
            <p dir="auto">{selectedProject.why}</p>
            <div className={styles.Mardown_header} dir="auto">
              <h2 className={styles["MarkDown_header-text"]} dir="auto">
                Meaning
              </h2>
            </div>
            <p dir="auto">{selectedProject.meaning}</p>
            <div className={styles.Mardown_header} dir="auto">
              <h2 className={styles["MarkDown_header-text"]} dir="auto">
                Teach Stack
              </h2>
            </div>
            <p dir="auto">{selectedProject.tech}</p>
            <div className={styles.Mardown_header} dir="auto">
              <h2 className={styles["MarkDown_header-text"]} dir="auto">
                Setup & Start
              </h2>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
