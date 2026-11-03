import { useId } from "react";
import type { JSX } from "react/jsx-runtime";

type progress = {
  step: number;
  label: string | undefined;
  id: number | string | undefined;
}

function ProgressBar(props: progress): JSX.Element {
  const uid = useId();
  const id = props.id || uid;

  let step = props.step;
  if (props.step > 100) step = 100;
  if (props.step < 0) step = 0;

  return (
    <div>
      {props.label && props.label.trim() && <label htmlFor={`p${id}`}>{props.label}</label>}
      <progress id={`p${id}`} value={step} max="100"></progress>
    </div>
  )
}

export default ProgressBar;
