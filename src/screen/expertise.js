import "./expertise.css";
import SplitText from "../components/bounceText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";
import AnimateIn from "../components/animateIn";

export default function Expertise() {
  const info = [
    // remember to import the icon from the fa library
    {
      icon: faReact,
      title: "React",
      description: "nice react",
    },
    {
      icon: faJs,
      title: "JavaScript",
      description: "nice js",
    },
    {
      icon: faHtml5,
      title: "HTML",
      description: "nice html",
    },
    {
      icon: faCss3,
      title: "CSS",
      description:
        "nice cssnice cssnice cssnice cssnice cssnice cssnice cssnice cssnice cssnice cssnice cssnice css",
    },
    {
      icon: faCss3,
      title: "CSS",
      description: "nice css",
    },
  ];

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
          {info.map((ele) => {
            return (
              <Card
                icon={ele.icon}
                title={ele.title}
                description={ele.description}
              ></Card>
            );
          })}
        </div>
      </AnimateIn>
    </div>
  );
}
