import { Card, Image, Spacer, Text, useTheme } from "@nextui-org/react";
import uno from "../../assets/1.svg";
import dos from "../../assets/2.svg";
import tres from "../../assets/3.svg";
import cuatro from "../../assets/4.svg";
import cinco from "../../assets/5.svg";
import seis from "../../assets/6.svg";
import siete from "../../assets/7.svg";
import ocho from "../../assets/8.svg";
import nueve from "../../assets/9.svg";
import diez from "../../assets/10.svg";

import React, { useState } from "react";
import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";
import { SwiperSlide } from "swiper/react";
import { useModal } from "../../hooks/useModal";
import Details from "../Details/Details";

const TopSection = ({ title, data, isLoading }) => {
  const { theme } = useTheme();

  const { openModal } = useModal();

  const getNumberFromIndex = (i) => {
    const mapper = {
      0: uno,
      1: dos,
      2: tres,
      3: cuatro,
      4: cinco,
      5: seis,
      6: siete,
      7: ocho,
      8: nueve,
      9: diez,
    };

    return mapper[i];
  };

  const getFirstTen = (data) => {
    if (!data) return null;

    return data.slice(0, 10);
  };

  return (
    <div>
      <Text h3>{title}</Text>
      <Spacer y={6} />
      <SwiperCarousel>
        {data &&
          getFirstTen(data).map((item, i) => (
            <SwiperSlide
              key={item.id}
              onClick={() => {
                openModal({
                  content: <Details id={item.id} title={item.title} />,
                });
              }}
              style={{
                background: "transparent",
                cursor: "pointer",
              }}
            >
              <Card
                css={{
                  height: "300px",
                  width: "400px",
                  background: "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  boxShadow: `0px 20px 60px ${theme.colors.secondary.value}`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                >
                  <Image
                    css={{
                      filter: `drop-shadow(0px 0px 10px ${
                        theme.colors.secondary.value
                      }) hue-rotate(${i * 100}deg)`,
                    }}
                    width={i == 9 ? 100 : 50}
                    alt={`Imagen de la ${title} en el top ${i + 1}`}
                    objectFit="contain"
                    src={getNumberFromIndex(i)}
                  />
                  <Image
                    css={{
                      borderRadius: "10px",
                    }}
                    alt={`Poster de la ${title} ${item.title}`}
                    width={130}
                    src={item.poster}
                  />
                </div>
                <Spacer y={1} />
                <Text>{item.title}</Text>
              </Card>
            </SwiperSlide>
          ))}
      </SwiperCarousel>
    </div>
  );
};

export default TopSection;
