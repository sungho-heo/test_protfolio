import { FaUser, FaCalendar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import aboutmeStyles from "../../scss/section/Aboutme.module.scss";
import globalStyles from "../../scss/styles.module.scss";

// Aboutme
export const Aboutme = () => {
  return (
    <>
      <section
        id="about-me"
        className={aboutmeStyles["Aboutme_section_about-me"]}
      >
        <div className={aboutmeStyles.Aboutme_content}>
          <div className={globalStyles.SectionTitle_content}>
            <h2 className={globalStyles.SectionTitle_title}>ABOUT ME</h2>
          </div>
          <div className={aboutmeStyles.Aboutme_infos}>
            <div className={aboutmeStyles["Aboutme_infos-list"]}>
              <div className={aboutmeStyles.Aboutme_info}>
                <div className={aboutmeStyles.Aboutme_icon}>
                  <FaUser />
                </div>
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    이름
                  </label>
                  <div className={aboutmeStyles.Aboutme_text}>허성호</div>
                </div>
              </div>
            </div>
            <div className={aboutmeStyles["Aboutme_infos-list"]}>
              <div className={aboutmeStyles.Aboutme_info}>
                <div className={aboutmeStyles.Aboutme_icon}>
                  <FaCalendar />
                </div>
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    생년월일
                  </label>
                  <div className={aboutmeStyles.Aboutme_text}>98.08.10</div>
                </div>
              </div>
            </div>
            <div className={aboutmeStyles["Aboutme_infos-list"]}>
              <div className={aboutmeStyles.Aboutme_info}>
                <div className={aboutmeStyles.Aboutme_icon}>
                  <IoCall />
                </div>
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    연락처
                  </label>
                  <div className={aboutmeStyles.Aboutme_text}>
                    010-2319-4539
                  </div>
                </div>
              </div>
            </div>
            <div className={aboutmeStyles["Aboutme_infos-list"]}>
              <div className={aboutmeStyles.Aboutme_info}>
                <div className={aboutmeStyles.Aboutme_icon}>
                  <MdEmail />
                </div>
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    이메일
                  </label>
                  <div className={aboutmeStyles.Aboutme_text}>
                    hurgj123kr@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
