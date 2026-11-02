import type { ReactNode } from "react";

type CButton = {
  children: ReactNode;
}

function Card(props: CButton) {
  return (
    <div className="card">
      {props.children}
    </div>
  )
}

export default Card;
