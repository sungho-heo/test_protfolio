import projectStyles from "../../scss/Projects.module.scss";
import styles from "../../scss/modal/Preview.module.scss";

// prview type
type PreviewModalProps = {
  project: {
    title: string;
    images: string[];
  };
};

// 각 프로젝트 preview
export const PreviewModalContent = ({ project }: PreviewModalProps) => {
  return (
    <>
      <div className={projectStyles.Modal_body}>
        <div className={styles.Carousel_images}>
          <div className={styles["Carousel_slider-content"]}>
            <div className={styles.Carousel_slider}>
              {project.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} 이미지 ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
