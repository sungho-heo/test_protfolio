import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
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
    <div className={styles["Preview_container"]}>
      <h2 className={styles["Preview_title"]}>{project.title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        style={{ width: "100%", height: "auto" }}
      >
        {project.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`${project.title}-${i}`}
              className={styles["Preview_image"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
