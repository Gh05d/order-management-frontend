import * as React from "react";

interface Props {
  message?: string;
  error: Error;
}

const Error: React.FC<Props> = ({ message, error }) => {
  console.error(error);

  return <div>{message || "Sorry, something went wrong 😞"}</div>;
};

export default Error;
