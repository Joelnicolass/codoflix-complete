import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";
import { Text } from "@nextui-org/react";
import CardModern from "../CardModern/CardModern";
import { useModal } from "../../hooks/useModal";
import Details from "../Details/Details";

const CarouselAndTitle = ({ title, data, isLoading }) => {
  const { openModal } = useModal();

  return (
    <>
      <Text h3>{title}</Text>
      <SwiperCarousel>
        {!isLoading &&
          data.map((e) => (
            <SwiperSlide
              key={e.id}
              style={{
                background: "transparent",
              }}
            >
              <CardModern
                id={e.id}
                title={e.title}
                bg={e.backdrop}
                footer={`★ ${e.rating}`}
                onPressedButton={() => {
                  openModal({
                    content: <Details id={e.id} title={e.title} />,
                  });
                }}
              />
            </SwiperSlide>
          ))}
      </SwiperCarousel>
    </>
  );
};

export default CarouselAndTitle;
