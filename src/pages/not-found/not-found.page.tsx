import * as React from "react";

import "./not-found.page.scss";

const NotFound: React.FC<{}> = () => (
  <section id="not-found">
    <div className="text">
      <h1>Page not found</h1>
      <p>There's nothing here!</p>
    </div>
  </section>
);

export default NotFound;
