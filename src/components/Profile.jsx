import React from "react";
import developerImage from "../assets/developer.jpg";

const skills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "React" },
];

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-image-wrap">
        <img src={developerImage} alt="Profile" className="profile-image" />
      </div>
      <div className="profile-text">
        <h2>이름</h2>
        <div className="profile-skills">
          {skills.map((skill) => (
            <span key={skill.id} className="skill">
              # {skill.name}
            </span>
          ))}
        </div>
        <p>
          프론트엔드 개발자 지망생으로, 사용자 경험을 중시하는 깔끔한 웹을
          만듭니다.
        </p>
      </div>
    </div>
  );
}
