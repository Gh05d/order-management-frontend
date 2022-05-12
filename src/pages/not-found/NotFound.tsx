import * as React from "react";

interface Props {}

const NotFound: React.FC<Props> = () => (
  <React.Fragment>
    <h1>Page not found</h1>
    <p>There's nothing here!</p>
  </React.Fragment>
);

export default NotFound;
