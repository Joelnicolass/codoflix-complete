import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperCarousel from "../SwiperCarousel/SwiperCarousel";
import { Text } from "@nextui-org/react";
import CardModern from "../CardModern/CardModern";
import { useModal } from "../../hooks/useModal";
import Details from "../Details/Details";
import { useFavorites } from "../../hooks/useFavorites";

const CarouselAndTitle = ({ title, data, isLoading }) => {
  const { openModal } = useModal();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

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
                textButtonA="Ver"
                textButtonB={isFavorite(e.id) ? "★" : "☆"}
                onPressedButtonA={() => {
                  openModal({
                    content: <Details id={e.id} title={e.title} />,
                  });
                }}
                onPressedButtonB={() => {
                  isFavorite(e.id) ? removeFavorite(e.id) : addFavorite(e.id);
                }}
              />
            </SwiperSlide>
          ))}
      </SwiperCarousel>
    </>
  );
};

export default CarouselAndTitle;
