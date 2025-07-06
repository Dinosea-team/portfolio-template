import React from "react";

const activities = [
  { id: 1, title: "오픈소스 기여", desc: "GitHub에 React 컴포넌트 기여" },
  { id: 2, title: "블로그 운영", desc: "기술 블로그 작성 및 운영" },
];

export default function ExternalActivities() {
  return (
    <ul className="activities-list">
      {activities.map((a) => (
        <li key={a.id}>
          <h4>{a.title}</h4>
          <p>{a.desc}</p>
        </li>
      ))}
    </ul>
  );
}
