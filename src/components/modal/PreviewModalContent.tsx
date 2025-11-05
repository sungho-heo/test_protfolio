import styles from "../../scss/Projects.module.scss";

// prview type
type PreviewModalProps = {
  project: {
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
};

// 각 프로젝트 preview
export const PreviewModalContent = ({ project: PreviewModalProps }) => {
  return (
    <>
      <div className={styles.Modal_body}>aa</div>
    </>
  );
};
