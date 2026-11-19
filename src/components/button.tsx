import type { JSX } from "react";
import { eColors } from "../types/enums";

type tButton = {
  text: string;
  color?: eColors;
  className?: string;
  onClick?: () => void;
}

/**
 * Render a colored button
 * @param props Button label, styling, and click handler
 * @returns The button
 */
function Button(props: tButton): JSX.Element {
  let color = props.color;
  if (!color || !Object.values(eColors).includes(color)) color = eColors.ORANGE;
  return <button className={`${color} ${props.className}`} onClick={props.onClick}>{props.text}</button>
}

export default Button;
