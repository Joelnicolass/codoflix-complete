import React, { useState } from "react";
import videoSrc from "../../../../assets/bg_a.mp4";
import BackgroundVideo from "../../../../components/BackgroundVideo/BackgroundVideo";
import { Card, Text } from "@nextui-org/react";
import SignInForm from "../../components/SignInForm/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const s = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  abs: {
    position: "absolute",
  },
  card: {
    display: "flex",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    flexDirection: "column",
    width: "30vw",
    minWidth: "500px",
    maxWidth: "600px",
    backdropFilter: "blur(20px)",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  hiperlink: {
    cursor: "pointer",
  },
};

const LoginView = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 2, delay: 0.2 }}
    >
      <Helmet>
        <title>Codoflix - Inicia sesión</title>
        <meta
          name="description"
          content="Inicia sesión en Codoflix para disfrutar de las mejores películas y series"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://codoflix.vercel.app/" />
        <meta property="og:title" content="Codoflix - Inicia sesión" />
        <meta
          property="og:description"
          content="Inicia sesión en Codoflix para disfrutar de las mejores películas y series"
        />
        <meta property="og:image" content="image.png" />
      </Helmet>

      <div style={s.container}>
        <BackgroundVideo src={videoSrc} />
        <div style={s.abs}>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 2, delay: 0.4 }}
          >
            <Card css={s.card}>
              <Card.Body>
                <div style={s.title}>
                  <Text h1>
                    {isRegister
                      ? "¿Nuevo en Codoflix?"
                      : "Bienvenido a Codoflix"}
                  </Text>
                  <Text
                    h6
                    color="primary"
                    onClick={() => setIsRegister(!isRegister)}
                    css={s.hiperlink}
                  >
                    {isRegister
                      ? "o puedes Inicia sesión aquí"
                      : "o puedes Regístrarte aquí"}
                  </Text>
                </div>

                {isRegister ? <SignUpForm /> : <SignInForm />}
              </Card.Body>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginView;
