import * as React from "react";

import "./footer.component.scss";

interface Props {}

const Footer: React.FC<Props> = () => (
  <footer id="footer">©️ Created by Pascal Clanget {new Date().getFullYear()}</footer>
);

export default Footer;
