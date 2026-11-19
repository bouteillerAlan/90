import { useEffect, useRef, useState, type RefObject } from "react";
import ProgressBar from "./components/progressBar"
import Menu from "./components/menu";

function App() {
  const [spyStep, setSpyStep] = useState<number>(0);
  const cursorRef: RefObject<HTMLDivElement | null> = useRef(null);

  function spyScroll() {
    const elem = document.scrollingElement;
    if (elem) {
      const cur = elem.scrollTop;
      const max = elem.scrollHeight - elem.clientHeight;
      const prc = (cur / max) * 100;
      setSpyStep(prc);
    }
  }

  // todo: maybe just a hover effect with an animation when the hover left
  function spyMouse(event: PointerEvent) {
    if (cursorRef) {
      const elem = cursorRef.current;
      if (elem) {
        const x = event.pageX;
        const y = event.pageY;
        elem.style.left = `${x.toString()}px`;
        elem.style.top = `${y.toString()}px`;
      }
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", () => spyScroll());
    return () => {
      document.removeEventListener("scroll", () => spyScroll());
    }
  }, [])

  return (
    <div>
      <ProgressBar
        step={spyStep}
        style={{ width: "100%", top: 0, position: "fixed" }}
      />
      {/* <div ref={cursorRef} className="cursor"></div> */}
      <div className="container">
        <Menu/>
      </div>
    </div>
  )
}

export default App;
