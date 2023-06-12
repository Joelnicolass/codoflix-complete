import { Spacer } from "@nextui-org/react";
import CarouselAndTitle from "../../../components/CarouselAndTitle/CarouselAndTitle";

import useSWR from "swr";
import {
  getMovieDetails,
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies,
} from "../../../services/tmdb.services";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Banner from "../../../components/Banner/Banner";
import TopSection from "../../../components/TopRatedSection/TopRatedSection";
import { useFavorites } from "../../../hooks/useFavorites";

const HomeView = () => {
  const { favorites: favIds } = useFavorites();

  const { data: favorites, isLoading: favoritesIsLoading } = useSWR(
    ["getFavorites", favIds],
    () => {
      if (!favIds) return;

      const promises = favIds.map((id) => getMovieDetails(id));

      return Promise.allSettled(promises).then((res) => {
        const data = res
          .filter((e) => e.status === "fulfilled")
          .map((e) => e.value);
        return data.flat();
      });
    }
  );

  const { data: popularMovies, isLoading: popularMoviesIsLoading } = useSWR(
    "getPopularMovies",
    () => getPopularMovies()
  );

  const { data: popularSeries, isLoading: popularSeriesIsLoading } = useSWR(
    "getPopularSeries",
    () => getPopularTV()
  );

  const { data: topRatedMovies, isLoading: topRatedMoviesIsLoading } = useSWR(
    "getTopRatedMovies",
    () => getTopRatedMovies()
  );

  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const getRandomMovieOrSerie = () => {
      const random = Math.random() * 10;

      if (popularMoviesIsLoading || popularSeriesIsLoading) return;

      if (random > 5)
        return popularMovies[Math.floor(Math.random() * popularMovies.length)];

      return popularSeries[Math.floor(Math.random() * popularSeries.length)];
    };

    const randomMovieOrSerie = getRandomMovieOrSerie();
    setBanner(randomMovieOrSerie);
  }, [
    popularMovies,
    popularMoviesIsLoading,
    popularSeries,
    popularSeriesIsLoading,
  ]);

  return (
    <>
      <Helmet>
        <title>Home | CodoFlix</title>
        <meta name="description" content="Home | CodoFlix" />
      </Helmet>
      <div
        style={{
          width: "100vw",
        }}
      >
        <div
          style={{
            marginTop: "100px",
            padding: "0 20px",
          }}
        >
          <Banner data={banner} />

          <CarouselAndTitle
            title="Las Pelis Mas Populares!"
            isLoading={popularMoviesIsLoading}
            data={popularMovies}
          />
          <Spacer y={2} />

          <CarouselAndTitle
            title="Las Series Mas Populares!"
            isLoading={popularSeriesIsLoading}
            data={popularSeries}
          />

          <Spacer y={2} />

          <TopSection
            title="Las Pelis Mejor Rankeadas!"
            data={topRatedMovies}
          />

          <Spacer y={7} />

          <CarouselAndTitle
            title="Tus Pelis Favoritas!"
            data={favorites}
            isLoading={favoritesIsLoading}
          />
        </div>
      </div>
      <Spacer y={7} />
    </>
  );
};

export default HomeView;
