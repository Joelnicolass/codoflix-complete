import React from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import { Button, Image, Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";

const SignUpForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomInput
          label={"Correo electrónico"}
          type={"email"}
          name={"email"}
          placeholder={"c o d o f l i x @ f i l m s . c o m"}
        />
        <Spacer y={2} />
        <CustomInput
          label={"Contraseña"}
          type={"password"}
          name={"password"}
          placeholder={"* * * * * * * *"}
        />
        <Spacer y={2} />
        <Button color={"secondary"}>Registrarse</Button>
        <Spacer y={1} />
        <Button>
          <Image
            width={20}
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
          <Spacer x={0.5} />
          Google
        </Button>
      </form>
    </motion.div>
  );
};

export default SignUpForm;
