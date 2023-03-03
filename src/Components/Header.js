import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="py-1 absolute top-0 w-full z-40">
      <Container>
        <div className="flex items-center gap-1">
          <img src="../../img/gitam-logo.jpg" className="w-11" />
          <img src="../../img/logo_w.png" className="w-36" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
