import React from "react";
import Nav from "../../../components/Navbar/Nav";

const PublicLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Nav />
      {children}
    </div>
  );
};

export default PublicLayout;
