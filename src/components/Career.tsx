import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>ZetTheta Algorithm</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              AI & Financial Research Automation — Built an autonomous financial
              research agent using FastAPI, Groq LLMs, and React-based AI agents.
              Integrated financial APIs for automated investment analysis and data
              synthesis. Designed modular AI pipelines for scalable research reporting.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Generative AI Intern</h4>
                <h5>Lenovo</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Generative AI, LLMs & Agentic Systems — Learned the fundamentals of
              Generative AI and large language models and explored their real-world
              applications. Explored prompt engineering techniques and AI agents
              capable of performing tasks and supporting decision-making. Studied
              agentic AI workflows, task automation, and intelligent systems for
              solving real-world problems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Developer</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Applied AI & Full-Stack Development — Developed Raksha Safe-Her, an
              AI-powered women's safety application using MobileBERT, Flask, and
              Flutter. Built SmartAssist AI, a speech-emotion recognition system
              using machine learning and browser-based audio input. Contributed to
              an AI-driven higher-education decision intelligence platform
              integrating 11 datasets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
