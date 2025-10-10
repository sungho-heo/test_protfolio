import aboutmeStyles from "../scss/Aboutme.module.scss";
import globalStyles from "../scss/styles.module.scss";
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
                  허성호
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
                  98.08.10
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
                  010-2319-4539
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
                  hurgj123kr@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
