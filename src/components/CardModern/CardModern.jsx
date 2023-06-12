import React, { useState } from "react";

import {
  Button,
  Card,
  Col,
  Row,
  Spacer,
  Text,
  useTheme,
} from "@nextui-org/react";

const CardModern = ({
  title,
  bg,
  footer,
  id,
  onPressedButtonA = (data) => {},
  onPressedButtonB = (data) => {},
  textButtonA = "",
  textButtonB = "",
  colorButtonA = "primary",
  colorButtonB = "secondary",
}) => {
  const { theme } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  const handleClickBtnA = (e) => {
    onPressedButtonA({
      event: e,
      id,
      title,
      bg,
      footer,
    });
  };

  const handleClickBtnB = (e) => {
    onPressedButtonB({
      event: e,
      id,
      title,
      bg,
      footer,
    });
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
  };
  const handleMouseLeave = (e) => {
    setIsHovered(false);
  };

  return (
    <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Card.Header
        css={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          backgroundColor: "#00000066",
          backdropFilter: isHovered ? "blur(10px)" : "blur(0px)",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Col>
          <Text
            size={9}
            weight="bold"
            transform="uppercase"
            color={theme.colors.text.value}
          >
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={bg}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={title}
        />
      </Card.Body>
      <Card.Footer
        css={{
          transform: `${isHovered ? "translateY(0)" : "translateY(100%)"}`,
          transition: "transform 0.3s ease-in-out",
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
        }}
      >
        <Row
          css={{
            transform: `${isHovered ? "translateY(0)" : "translateY(200%)"}`,
            transition: "transform 0.3s ease-in-out",
            transitionDelay: "0.2s",
          }}
        >
          <Col>
            <Text size={12} weight="bold" color="#ffffffAA">
              {footer}
            </Text>
          </Col>

          <Button onPress={handleClickBtnA} auto size="sm" color={colorButtonA}>
            {textButtonA}
          </Button>
          <Spacer x={0.5} />
          <Button onPress={handleClickBtnB} auto size="sm" color={colorButtonB}>
            {textButtonB}
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default CardModern;
