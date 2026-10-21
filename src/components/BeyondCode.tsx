import { useEffect, useRef } from "react";
import {
  MdFlightTakeoff,
  MdSmartDisplay,
  MdPsychology,
  MdEmojiEvents,
  MdAutoGraph,
  MdGroups,
} from "react-icons/md";
import "./styles/BeyondCode.css";

const interests = [
  {
    number: "01",
    title: "Travelling & Exploration",
    description:
      "Discovering new places, experiencing different cultures, and gaining fresh perspectives.",
    icon: <MdFlightTakeoff />,
    accent: "#5eead4",
  },
  {
    number: "02",
    title: "Web Series & Movies",
    description:
      "Enjoying compelling stories, creative worlds, and memorable characters.",
    icon: <MdSmartDisplay />,
    accent: "#a78bfa",
  },
  {
    number: "03",
    title: "Exploring AI & Technology",
    description:
      "Experimenting with emerging technologies, AI tools, and innovative ideas beyond the classroom.",
    icon: <MdPsychology />,
    accent: "#f472b6",
  },
  {
    number: "04",
    title: "Hackathons & Challenges",
    description:
      "Turning ideas into practical solutions and learning through competitive problem-solving.",
    icon: <MdEmojiEvents />,
    accent: "#fbbf24",
  },
  {
    number: "05",
    title: "Continuous Learning",
    description:
      "Exploring new concepts, strengthening technical skills, and improving a little every day.",
    icon: <MdAutoGraph />,
    accent: "#34d399",
  },
  {
    number: "06",
    title: "Collaboration & Teamwork",
    description:
      "Sharing ideas, learning from others, and working together to solve meaningful problems.",
    icon: <MdGroups />,
    accent: "#60a5fa",
  },
];

const BeyondCode = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("beyond-card-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="beyond-section section-container">
      <div className="beyond-header">
        <h2>
          Beyond the <span>Code</span>
        </h2>
        <p className="beyond-subtitle">
          Things I'm passionate about outside of building software.
        </p>
      </div>

      <div className="beyond-grid">
        {interests.map((item, index) => (
          <div
            className="beyond-card"
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            style={
              {
                "--card-accent": item.accent,
                "--card-delay": `${index * 0.1}s`,
              } as React.CSSProperties
            }
          >
            <div className="beyond-card-top">
              <span className="beyond-number">{item.number}</span>
              <div
                className="beyond-icon"
                style={{ color: item.accent }}
              >
                {item.icon}
              </div>
            </div>
            <h3 className="beyond-title">{item.title}</h3>
            <p className="beyond-description">{item.description}</p>
            <div
              className="beyond-card-glow"
              style={{ background: item.accent }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeyondCode;
