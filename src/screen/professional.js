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
          detail={"hjcxjwqhgiujwkecgxuwiegcxiwkeug"}
          started={"2024"}
          image={bjit}
          ended={"2025"}
          location={"Remote"}
          stack={["JavaScript", "HTML", "CSS"]}
        />
      </AnimateIn>
    </div>
  );
}
