import Accordions from "../components/accordion";
import "./professional.css";
import bjit from "../assets/bjit.jpg";
import SplitText from "../components/bounceText";
import AnimateIn from "../components/animateIn";

export default function Professional() {
  return (
    <div className="professional">
      <SplitText
        text="PROFESSIONAL EXPERIENCE"
        className="expertiseText"
        delay={100}
        duration={0.5}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
      />
      <AnimateIn>
        <Accordions
          header={"Web-Developer @ Bjit"}
          detail={
            "Developing user interfaces, implementing APIs, and enhancing existing codebases. My role also included debugging and resolving issues to improve overall application stability and performance. "
          }
          started={"2024"}
          image={bjit}
          ended={"2025"}
          location={"Remote"}
          stack={["JavaScript", "HTML", "CSS"]}
          role={'Junior Web-Developer'}
        />
      </AnimateIn>
    </div>
  );
}
