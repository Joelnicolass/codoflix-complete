import { Input } from "@nextui-org/react";
import React from "react";

const CustomInput = ({ label, type, name, placeholder, ...props }) => {
  return (
    <Input
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
      css={{
        width: "100%",
      }}
      {...props}
    />
  );
};

export default CustomInput;
