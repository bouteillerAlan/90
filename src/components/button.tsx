import type { JSX } from "react";
import { eColors } from "../types/enums";

type tButton = {
  text: string;
  color: eColors | undefined;
}

function Button(props: tButton): JSX.Element {
  let color = props.color;
  if (!color || !Object.values(eColors).includes(color)) color = eColors.ORANGE;
  return <button className={`${color}`}>{props.text}</button>
}

export default Button;
