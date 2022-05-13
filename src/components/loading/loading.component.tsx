import * as React from "react";

interface Props {
  text?: string;
}

const Loading: React.FC<Props> = props => <div>{props.text || "Loading..."}</div>;

export default Loading;
