import type { ReactNode, JSX } from "react";

type tCard = {
  children: ReactNode;
}

function Card(props: tCard): JSX.Element {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export default Card;
