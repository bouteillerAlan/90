type CButton = {
  text: string;
  color: "orange" | "yellow" | "peach" | "yellow" | undefined;
}

function Button(props: CButton) {
  let color = props.color;
  if (!color) color = "orange";
  return <button className={`${color}`}>{props.text}</button>
}

export default Button;
