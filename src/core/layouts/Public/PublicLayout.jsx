import React from "react";
import Nav from "../../../components/Navbar/Nav";

const PublicLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Nav />
      {children}
    </div>
  );
};

export default PublicLayout;
