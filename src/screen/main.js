import { FaArrowDown } from "react-icons/fa";
import "./main.css";
import SplitText from "../components/bounceText";

export default function MainScreen() {
  return (
    <div className="mainDiv">
      <SplitText
        text="faysal mohammed"
        className="mainText"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
      />
      <SplitText
        text="Full-stack Developer"
        className="mainText2"
        delay={100}
        duration={1}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
      />
      <div
        className="down-arrow"
        onClick={() =>
          window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <FaArrowDown />
      </div>
    </div>
  );
}
