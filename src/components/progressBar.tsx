import { useId, type CSSProperties } from "react";
import type { JSX } from "react/jsx-runtime";

type progress = {
  step: number;
  label?: string;
  id?: number | string;
  border?: string;
  style?: CSSProperties;
}

function ProgressBar(props: progress): JSX.Element {
  const uid = useId();
  const id = props.id || uid;

  let step = props.step;
  if (props.step > 100) step = 100;
  if (props.step < 0) step = 0;

  return (
    <div>
      {props.label && props.label.trim() &&
        <span>
          <label htmlFor={`p${id}`}>{props.label}</label>
          <br/>
        </span>
      }
      <div id={`p${id}`} className="pb" style={{ border: props.border, ...props.style }}>
        <div className="pb-progress-fg" style={{ width: `${step}%` }}></div>
        <div className="pb-progress-bg"></div>
      </div>
    </div>
  )
}

export default ProgressBar;
