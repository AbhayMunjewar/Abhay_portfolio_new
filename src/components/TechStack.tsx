import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiScikitlearn,
  SiTensorflow,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiFlutter,
} from "react-icons/si";
import { TbBrain, TbMessageChatbot } from "react-icons/tb";
import { BsDatabase } from "react-icons/bs";
import { SiChromatic } from "react-icons/si";
import "./styles/TechStackGrid.css";

const techItems = [
  // Row 1
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "FastAPI", icon: <SiFastapi />, color: "#009688" },
  { name: "Flask", icon: <SiFlask />, color: "#ffffff" },
  // Row 2
  { name: "Django", icon: <SiDjango />, color: "#092E20" },
  { name: "Scikit-learn", icon: <SiScikitlearn />, color: "#F7931E" },
  { name: "TensorFlow", icon: <SiTensorflow />, color: "#FF6F00" },
  { name: "NLP", icon: <TbMessageChatbot />, color: "#8B5CF6" },
  { name: "LLMs", icon: <TbBrain />, color: "#EC4899" },
  { name: "OpenCV", icon: <SiOpencv />, color: "#5C3EE8" },
  // Row 3
  { name: "Pandas", icon: <SiPandas />, color: "#150458" },
  { name: "NumPy", icon: <SiNumpy />, color: "#013243" },
  { name: "SQL", icon: <BsDatabase />, color: "#4479A1" },
  { name: "Git", icon: <SiGit />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub />, color: "#ffffff" },
  { name: "ChromaDB", icon: <SiChromatic />, color: "#FC521F" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569B" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>
        My Tech <span>Stack</span>
      </h2>
      <div className="tech-grid-wrapper">
        {/* Orbital rings */}
        <div className="orbital-ring orbital-ring-1"></div>
        <div className="orbital-ring orbital-ring-2"></div>
        <div className="orbital-ring orbital-ring-3"></div>

        {/* Tech cards grid */}
        <div className="tech-grid">
          {techItems.map((item, index) => (
            <div
              className="tech-card"
              key={index}
              style={
                {
                  "--delay": `${index * 0.1}s`,
                  "--float-delay": `${index * 0.3}s`,
                } as React.CSSProperties
              }
            >
              <div className="tech-card-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <span className="tech-card-name">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
