import codeImg from "../assets/code.jpg";
import laptopImg from "../assets/laptop.jpg";
import uiuxImg from "../assets/uiux.jpg";
import workflowImg from "../assets/workflow.jpg";

// 예시 데이터, 본인의 프로젝트로 교체
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "React로 제작된 포트폴리오 사이트.",
    img: codeImg,
  },
  {
    id: 2,
    title: "TODO App",
    desc: "로컬 스토리지 기반 할 일 관리 앱.",
    img: laptopImg,
  },
  {
    id: 3,
    title: "Blog Platform",
    desc: "Markdown 지원 블로그 플랫폼.",
    img: uiuxImg,
  },
  {
    id: 4,
    title: "Chat App",
    desc: "WebSocket 채팅 앱.",
    img: workflowImg,
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-grid">
      {projects.map((p) => (
        <div key={p.id} className="card">
          <div className="card-image">
            <img src={p.img} alt={p.title} />
          </div>
          <div className="card-content">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
