import * as React from "react";

interface Props {
  text?: string;
}

const Loading: React.FC<Props> = props => (
  <div>
    <span>{props.text || "Loading..."}</span> <i className="fa-solid fa-spinner fa-spin" />
  </div>
);

export default Loading;
