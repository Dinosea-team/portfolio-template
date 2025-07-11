import React from "react";
import developerImage from "../assets/developer.jpg";

const skills = [
  { id: 1, name: "React" },
  { id: 2, name: "NextJS" },
  { id: 3, name: "React-Query" },
  { id: 4, name: "Zustand" },
];

const description = [
  "NextJs를 사용해서 제작한 개인 블로그 사이트를 운영 중에 있습니다.",
  "Zustand를 사용해서 상태 관리를 하고 있습니다.",
  "다수의 오픈소스 프로젝트에 기여한 경험이 있습니다.",
];

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-image-wrap">
        <img src={developerImage} alt="Profile" className="profile-image" />
      </div>
      <div className="profile-text">
        <h2>강명훈</h2>
        <div className="profile-skills">
          {skills.map((skill) => (
            <span key={skill.id} className="skill">
              # {skill.name}
            </span>
          ))}
        </div>
        <div className="profile-description">
          <p>
            <strong>프론트엔드 개발자</strong> 지망생으로, 사용자 경험을
            중시하는 깔끔한 웹을 만듭니다.
          </p>
          {description.map((desc, idx) => (
            <p key={idx}> • {desc}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
