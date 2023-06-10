import React from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import { Button, Image, Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";
import { signInWithGoogle } from "../../../../services/firebase.services";
import { useAuth } from "../../../../core/auth/hooks/useAuth";
import { AUTH_LOGIN } from "../../../../core/auth/reducers/authReducer";

const SignInForm = () => {
  const { dispatch } = useAuth();

  const signIn = async () => {
    const res = await signInWithGoogle();

    if (!res) return;

    dispatch({
      type: AUTH_LOGIN,
      payload: res.user,
    });
  };

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
        <Button color={"secondary"}>Iniciar sesión</Button>
        <Spacer y={1} />
        <Button onPress={signIn}>
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

export default SignInForm;
