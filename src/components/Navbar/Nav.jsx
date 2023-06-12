import {
  Avatar,
  Button,
  Image,
  Navbar,
  Popover,
  Spacer,
  Text,
  red,
  useTheme,
} from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import avatarAnim from "../../assets/avatar_anim.json";
import { useAuth } from "../../core/auth/hooks/useAuth";
import codoflixLogo from "../../assets/codoflix_logo.png";
import { motion } from "framer-motion";
import { AUTH_LOGOUT, authKey } from "../../core/auth/reducers/authReducer";
import { signOut } from "../../services/firebase.services";

const s = {
  link: {
    marginTop: "8px",
  },
};

const Nav = () => {
  const { theme } = useTheme();
  const { state, dispatch } = useAuth();

  const handleLogout = async () => {
    await signOut();

    localStorage.clear();

    dispatch({
      type: AUTH_LOGOUT,
    });
  };

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Movies",
      path: "/movies",
    },
    {
      name: "Series",
      path: "/series",
    },
  ];

  return (
    <Navbar
      disableBlur
      css={{
        backdropFilter: "blur(20px)",
        height: "70px",
      }}
    >
      <Navbar.Content>
        <Navbar.Brand>
          <Logo color={theme.colors.text.value} w={40} h={40} />
          <motion.div
            animate={{
              filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"],
            }}
            transition={{ duration: 10, delay: 0.2, repeat: Infinity }}
          >
            <Image width={200} src={codoflixLogo} />
          </motion.div>
        </Navbar.Brand>
        {state.isAuth &&
          routes.map((route, i) => (
            <motion.div
              key={route.name}
              initial={{
                opacity: 0,
                y: -100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.1,
              }}
            >
              <Navbar.Item>
                <Link to={route.path}>
                  <Text css={s.link} h5>
                    {route.name}
                  </Text>
                </Link>
              </Navbar.Item>
            </motion.div>
          ))}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item>
          <Text>
            {state.user
              ? state.user.displayName || state.user.email
              : "Invitado"}
          </Text>
        </Navbar.Item>
        <Navbar.Item>
          {state.user ? (
            <Popover>
              <Popover.Trigger>
                <Avatar
                  bordered
                  css={{
                    cursor: "pointer",
                    height: "50px",
                    width: "50px",
                  }}
                  zoomed
                  color={"gradient"}
                  src={state.user.photoURL}
                ></Avatar>
              </Popover.Trigger>
              <Popover.Content
                css={{
                  background: "transparent",
                }}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                  }}
                >
                  <Button
                    color="gradient"
                    auto
                    css={{
                      width: "100%",
                    }}
                  >
                    Perfil
                  </Button>
                </motion.div>

                <Spacer y={0.5} />

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.2,
                  }}
                >
                  <Button onPress={handleLogout} color="gradient" auto>
                    Cerrar sesión
                  </Button>
                </motion.div>
              </Popover.Content>
            </Popover>
          ) : (
            <Player
              autoplay
              loop
              src={avatarAnim}
              style={{ height: "60px", width: "60px" }}
            />
          )}
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
