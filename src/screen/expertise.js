import "./expertise.css";
import SplitText from "../components/bounceText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faKaggle,
  faPython,
  faNodeJs,
  faNode,
  faLinux,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCloud, faDatabase } from "@fortawesome/free-solid-svg-icons";

import AnimateIn from "../components/animateIn";
import { useState } from "react";

export default function Expertise() {
  const info = [
    // remember to import the icon for using in the card
    {
      icon: faHtml5,
      title: "HTML",
      description:
        "Built structured, semantic layouts for portfolio web pages and projects.",
    },
    {
      icon: faCss3,
      title: "CSS",
      description:
        "Crafted responsive designs and animations for modern user-facing components.",
    },
    {
      icon: faJs,
      title: "JavaScript",
      description:
        "Enabled dynamic interactions and UI behaviors in web projects.",
    },
    {
      icon: faReact,
      title: "React",
      description:
        "Designed modular, component-based applications for web dashboards and interfaces.",
    },
    {
      icon: faReact,
      title: "Next.jS",
      description:
        "Built server-side rendered and statically generated web applications for improved performance and SEO.",
    },
    {
      icon: faReact,
      title: "React Native",
      description:
        "Developed mobile-first applications like plantGallery and musicTube.",
    },
    {
      icon: faCss3,
      title: "Tailwind CSS",
      description:
        "Designed fast, responsive interfaces using utility-first styling and reusable UI patterns.",
    },
    {
      icon: faKaggle,
      title: "Kotlin",
      description:
        "Built native Android UIs using Jetpack Compose for intuitive UX.",
    },
    {
      icon: faPython,
      title: "Python",
      description:
        "Automated backend logic and data processing in various prototypes.",
    },
    {
      icon: faNode,
      title: "Node.js",
      description:
        "Powering APIs and backend logic for apps such as albumProject.",
    },
    {
      icon: faNodeJs,
      title: "Express.js",
      description:
        "Structured RESTful API endpoints and routing for Node.js services.",
    },
    {
      icon: faDatabase,
      title: "MySQL",
      description: "Managed relational data schemas in backend applications.",
    },
    {
      icon: faDatabase,
      title: "MongoDB",
      description:
        "Stored application data in flexible document schemas for runtime efficiency.",
    },
    {
      icon: faDatabase,
      title: "Firebase",
      description:
        "Handled real-time data and authentication in client-focused apps.",
    },
    {
      icon: faLinux,
      title: "Linux",
      description: "Automated process using Linux environments via terminal.",
    },
    {
      icon: faCloud,
      title: "REST API",
      description:
        "Designed client-server communication interfaces for web & mobile apps.",
    },
    {
      icon: faCloud,
      title: "Postman",
      description:
        "Streamlined API debugging and validation using Postman toolsets.",
    },
    {
      icon: faGithub,
      title: "GitHub",
      description:
        "Showcased project repositories, documentation, and collaborative workflow.",
    },
  ];

  const initialVisibleCount = 3; // Number of cards to show initially
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const Card = ({ icon, title = null, description = null }) => {
    return (
      <div className="card">
        <div className="card-top">
          <FontAwesomeIcon className="card-top-icon" icon={icon} />
          <h3 className="card-top-title">{title}</h3>
        </div>
        <div className="card-bottom">
          <p className="card-bottom-tag"></p>
          <h3 className="card-bottom-description">{description}</h3>
          <p className="card-bottom-endTag"></p>
        </div>
      </div>
    );
  };

  return (
    <div className="expertiseDiv">
      <SplitText
        text="MY EXPERTISE"
        className="expertiseText"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
      />
      <AnimateIn>
        <div className="card-section">
          {info.slice(0, visibleCount).map((ele, idx) => {
            return (
              <Card
                key={idx}
                icon={ele.icon}
                title={ele.title}
                description={ele.description}
              />
            );
          })}
        </div>

        {/* Buttons Section */}
        <div className="view-all-card-section-div">
          {visibleCount < info.length ? (
            <button
              className="view-all-card-section-btn"
              onClick={() => setVisibleCount(info.length)}
            >
              View All
            </button>
          ) : visibleCount > initialVisibleCount ? (
            <button
              className="view-all-card-section-btn"
              onClick={() => setVisibleCount(initialVisibleCount)}
            >
              View Less
            </button>
          ) : null}
        </div>
      </AnimateIn>
    </div>
  );
}
