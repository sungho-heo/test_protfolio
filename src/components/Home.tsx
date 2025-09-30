export const Home = () => {
  return (
    <div>
      {/* 간단 자기소개 */}
      <div>
        <h1>- 허성호 -</h1>
        <br />
        <h1>프론트엔드 포트폴리오</h1>
        <h3>안녕하세요, 프론트엔드 개발자 허성호입니다.</h3>
      </div>
      {/* About me */}
      <section>
        <div>
          <h1>About me</h1>
          <ul>
            <li>이름 허성호</li>
            <li>생년월일 98.08.10</li>
            <li>연락처 010-2319-4539</li>
            <li>이메일 hurgj123kr@gmail.com</li>
          </ul>
        </div>
      </section>
      {/* Skills */}
      <section>
        <div>
          <h1>Skills</h1>
          <div>
            <h2>Language</h2>
            <ul>
              <li>TypeScript</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div>
            <h2>Frontend</h2>
            <ul>
              <li>React</li>
              <li>React-Query</li>
              <li>Tailwind Css</li>
              <li>Vite</li>
              <li>Styled-Components</li>
            </ul>
          </div>
          <div>
            <h2>Database</h2>
            <ul>
              <li>Mongodb</li>
            </ul>
          </div>
          <div>
            <h2>Tools & dev</h2>
            <ul>
              <li>Vercel</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Archiving */}
      <section>
        <div>
          <h1>Archiving</h1>
          <div>
            <div>
              <h1>Github</h1>
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
          <div>
            <h1>Projects</h1>
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
          <h2>Study</h2>
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
    </div>
  );
};
