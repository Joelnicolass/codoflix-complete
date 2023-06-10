import { Button, Card, Col, Text, useTheme } from "@nextui-org/react";
import React, { useState } from "react";
import { useModal } from "../../hooks/useModal";
import Details from "../Details/Details";

const Banner = ({ data }) => {
  const { theme } = useTheme();
  const { openModal } = useModal();

  const [ishover, setIshover] = useState(false);

  const handleMouseEnter = () => {
    setIshover(true);
  };

  const handleMouseLeave = () => {
    setIshover(false);
  };

  return (
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      css={{
        display: "flex",
        justifyContent: "space-between",
        height: "80vh",
        width: "100%",
        backgroundImage: `url(${data?.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card.Header
        css={{
          backgroundColor: ishover ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          backdropFilter: ishover ? "blur(10px)" : "blur(0px)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Col>
          <Text h1 color={ishover ? "white" : "rgba(255,255,255,0.5)"}>
            {data?.title}
          </Text>
        </Col>
      </Card.Header>

      <Card.Footer
        css={{
          backgroundColor: ishover ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
          backdropFilter: ishover ? "blur(10px)" : "blur(0px)",
          transition: "all 0.3s ease-in-out",
          height: "20%",
        }}
      >
        <Col>
          <Text
            h5
            color={ishover ? theme.colors.text.value : "rgba(255,255,255,0.5)"}
          >
            {data?.description?.length > 300
              ? data?.description?.substring(0, 200) + "..."
              : data?.description}
          </Text>
          <Text
            color={ishover ? theme.colors.text.value : "rgba(255,255,255,0.5)"}
            h5
          >
            ★ {data?.rating}
          </Text>
          <Button
            css={{
              backgroundColor: ishover
                ? theme.colors.secondary.value
                : "rgba(0,0,0,0)",
              color: ishover
                ? theme.colors.text.value
                : "rgba(255,255,255,0.5)",
            }}
            auto
            onPress={() => {
              openModal({
                content: <Details id={data?.id} title={data?.title} />,
              });
            }}
          >
            Ver Ahora
          </Button>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default Banner;
