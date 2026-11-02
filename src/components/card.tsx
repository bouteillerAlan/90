import type { ReactNode } from "react";

type CCard = {
  children: ReactNode;
}

function Card(props: CCard) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export default Card;
