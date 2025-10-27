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
  why: string[];
  tech: string;
  meaning: string[];
};

// project내용
const projectList: ProjectsProps[] = [
  {
    id: 1,
    title: "1세대 포켓몬 도감",
    period: "2024.05.20~2024.09.24 (1인 프로젝트)",
    url: "https://sungho-heo.github.io/poke2_front",
    detailTitle: "1세대 포켓몬 정보를 빠르게 알기위한 포켓몬 도감",
    summary: [
      "포켓몬을 평소에 좋아해서 1세대 포켓몬정보를 정리하기위해 제작",
      "즐겨찾기를 이용한 빠른 포켓몬 특성 확인",
      "검색을 통해서 포켓몬 찾기 개발",
      "프론트와 백엔드의 데이터 송수신 첫 구현",
    ],
    why: [
      "자신만의 포켓몬 1세대 도감을 만들기위해 공식 포켓몬 사이트를 참고해보니 해당 사이트에 도감 기능이 제공된다는 것을 알게 되었습니다.하지만 즐겨찾기 기능이 없어 아쉬움을 느꼈고, 이를 보완한 나만의 웹 도감을 만들어보고자 1세대 포켓몬으로 프로젝트를 진행하게 되었습니다.",
    ],
    meaning: [
      "제작을 하면서 공식 사이트를 살펴보니 도감에 맞게 각 포켓몬이 한눈에 잘보이도록 디자인이 되어있어서 그에 맞게 다른 사이트도 참고하면서 어떤식으로 UI/UX를 구성하는게 좋은지에대한 역량을 기르는데 많은 도움이되었습니다. ",
      "공식 api에서 가져오는 이미지 로딩속도로 인해서 전체적인 사이트의 속도가 느려지는 현상이 발생했었는데, 가져오는 포켓몬들의 이미지를 저용량 webp확장자로 변환후 적용을 하였고 해당 결과로 이미지 로딩속도가 2배이상 빨라졌습니다.",
      "프론트와 백엔드 데이터를 주고반는 과정이 있었는데 데이터가 넘어오는 것은 확인이 되나 화면에 해당 값이 보이지 않는 현상이 있었는데 백엔드에서 온 데이터값을 프론트에서 잘못된 키값을 사용하여 발생한 문제를 해결함으로써 데이터의 유무도 중요하지만 데이터의 구조와 해당 키값을 명확히 확인하는 점을 알게되었습니다.",
    ],
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
    why: [
      "날씨와 온도에 따라 밖에 나갈때 옷을 뭐입어야할지 고민에 제작을 하게되었습니다.",
    ],
    meaning: [
      "날씨 웹사이트들중 많이 사용하는 네이버나 핸드폰의 기본 날씨어플의 UI를 참고하니 어떻게 해야 사용자에게 데이터를 쉽고 보기 좋은지 좀더 알게된듯합니다.",
      "시간대별 날씨를 보여주기위해 카드식 구성을 사용하게되었습니다. 처음에 세로 스크롤로 밑으로 내리면서 구현을 했으나, 해당 웹의 특성을 죽이기에 가로스크롤로 구현을하게되었습니다.",
    ],
    tech: "TypeScript, React, styled-css,github, Redux",
  },
  {
    id: 3,
    title: "포트폴리오 웹사이트",
    period: "2025.10 (1인 프로젝트)",
    url: "",
    detailTitle: "포트폴리오 사이트",
    summary: ["저만의 포트폴리오 제작을위해서 개발"],
    why: [
      "저 자신만의 프로젝트들을 정리 해놓은 사이트가 필요하였고, 또한 기존의 포트폴리오가 빈약해서 꾸준히 보완해나가면서 채우기에는 저만의 사이트가 있어야한다고 느끼게되었습니다.",
    ],
    meaning: [
      "포트폴리오는 저 자자신을 짧은 시간에 보여줘야하기에 한눈에 보기좋고 많이 화려하지않고 깔끔한 디자인이 중요하다고 생각해서, 많은 레퍼런스를 통해서 한눈에 보기좋은 UI/UX를 개발하는 과정에서 디자인 역량도 기르게되었습니다.",
    ],
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
            {selectedProject.why.map((text) => (
              <p dir="auto" className={styles.MarkDown_text}>
                {text}
              </p>
            ))}
            <div className={styles.Mardown_header} dir="auto">
              <h2 className={styles["MarkDown_header-text"]} dir="auto">
                Meaning
              </h2>
            </div>
            {selectedProject.meaning.map((means) => (
              <p dir="auto" className={styles.MarkDown_text}>
                {means}
              </p>
            ))}
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
