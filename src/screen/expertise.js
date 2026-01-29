import "./expertise.css";
import SplitText from "../components/bounceText";
import AnimateIn from "../components/animateIn";
import { useState } from "react";

export default function Expertise() {
  const info = [
    {
      iconClass: "devicon-html5-plain",
      title: "HTML",
      description:
        "Built structured, semantic layouts for portfolio web pages and projects.",
    },
    {
      iconClass: "devicon-css3-plain",
      title: "CSS",
      description:
        "Crafted responsive designs and animations for modern user-facing components.",
    },
    {
      iconClass: "devicon-javascript-plain",
      title: "JavaScript",
      description:
        "Enabled dynamic interactions and UI behaviors in web projects.",
    },
    {
      iconClass: "devicon-react-original",
      title: "React",
      description:
        "Designed modular, component-based applications for web dashboards and interfaces.",
    },
    {
      iconClass: "devicon-nextjs-plain",
      title: "Next.js",
      description:
        "Built server-side rendered and statically generated web applications for improved performance and SEO.",
    },
    {
      iconClass: "devicon-reactnative-original-wordmark",
      title: "React Native",
      description:
        "Developed mobile-first applications like plantGallery and musicTube.",
    },
    {
      iconClass: "devicon-expo-original",
      title: "Expo",
      description:
        "Accelerated React Native development using Expo CLI, APIs, and Expo Go for rapid iteration and testing.",
    },
    {
      iconClass: "devicon-tailwindcss-plain",
      title: "Tailwind CSS",
      description:
        "Designed fast, responsive interfaces using utility-first styling and reusable UI patterns.",
    },
    {
      iconClass: "devicon-kotlin-plain",
      title: "Kotlin",
      description:
        "Built native Android UIs using Jetpack Compose for intuitive UX.",
    },
    {
      iconClass: "devicon-python-plain",
      title: "Python",
      description:
        "Automated backend logic and data processing in various prototypes.",
    },
    {
      iconClass: "devicon-nodejs-plain",
      title: "Node.js",
      description:
        "Powering APIs and backend logic for apps such as albumProject.",
    },
    {
      iconClass: "devicon-express-original",
      title: "Express.js",
      description:
        "Structured RESTful API endpoints and routing for Node.js services.",
    },
    {
      iconClass: "devicon-mysql-plain",
      title: "MySQL",
      description: "Managed relational data schemas in backend applications.",
    },
    {
      iconClass: "devicon-mongodb-plain",
      title: "MongoDB",
      description:
        "Stored application data in flexible document schemas for runtime efficiency.",
    },
    {
      iconClass: "devicon-firebase-plain",
      title: "Firebase",
      description:
        "Handled real-time data and authentication in client-focused apps.",
    },
    {
      iconClass: "devicon-linux-plain",
      title: "Linux",
      description: "Automated process using Linux environments via terminal.",
    },
    {
      iconClass: "devicon-graphql-plain",
      title: "GraphQL",
      description:
        "Designed flexible and efficient APIs using GraphQL for precise data fetching and reduced over-fetching.",
    },
    {
      iconClass: "devicon-googlecloud-plain",
      title: "REST API",
      description:
        "Designed client-server communication interfaces for web & mobile apps.",
    },
    {
      iconClass: "devicon-postman-plain",
      title: "Postman",
      description:
        "Streamlined API debugging and validation using Postman toolsets.",
    },
    {
      iconClass: "devicon-github-original",
      title: "GitHub",
      description:
        "Showcased project repositories, documentation, and collaborative workflow.",
    },
  ];

  const initialVisibleCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  const Card = ({ iconClass, title, description }) => {
    return (
      <div className="card">
        <div className="card-top">
          <i className={iconClass} style={{ fontSize: "40px" }}></i>
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
          {info.slice(0, visibleCount).map((ele, idx) => (
            <Card
              key={idx}
              iconClass={ele.iconClass}
              title={ele.title}
              description={ele.description}
            />
          ))}
        </div>

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
