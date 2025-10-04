import aboutmeStyles from "../scss/Aboutme.module.scss";
import globalStyles from "../scss/styled.module.scss";
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
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    이름
                  </label>
                  <br />
                  <span>허성호</span>
                </div>
              </div>
            </div>
            <div className={aboutmeStyles["Aboutme_infos-list"]}>
              <div className={aboutmeStyles.Aboutme_info}>
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    생년월일
                  </label>
                  <br />
                  <span>98.08.10</span>
                </div>
              </div>
            </div>
            <div className={aboutmeStyles["Aboutme_infos-list"]}>
              <div className={aboutmeStyles.Aboutme_info}>
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    연락처
                  </label>
                  <br />
                  <span>010-2319-4539</span>
                </div>
              </div>
            </div>
            <div className={aboutmeStyles["Aboutme_infos-list"]}>
              <div className={aboutmeStyles.Aboutme_info}>
                <div className={aboutmeStyles.Aboutme_field}>
                  <label className={aboutmeStyles["Aboutme_field-title"]}>
                    이메일
                  </label>
                  <br />
                  <span>hurgj123kr@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
