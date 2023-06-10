import axios from "axios";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: import.meta.env.VITE_APP_TMDB_API_KEY,
    language: "es-ES",
  },
});

export const tmdb_paths = {
  movies: {
    popular: "/movie/popular",
    topRated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
    nowPlaying: "/movie/now_playing",
    details: (id) => `/movie/${id}`,
    videos: (id) => `/movie/${id}/videos`,
    recommendations: (id) => `/movie/${id}/recommendations`,
  },
  tv: {
    popular: "/tv/popular",
    topRated: "/tv/top_rated",
    onTheAir: "/tv/on_the_air",
    airingToday: "/tv/airing_today",
    details: (id) => `/tv/${id}`,
    videos: (id) => `/tv/${id}/videos`,
    recommendations: (id) => `/tv/${id}/recommendations`,
  },
  trending: {
    all: "/trending/all/day",
    movies: "/trending/movie/day",
    tv: "/trending/tv/day",
  },
  images: {
    url: "https://image.tmdb.org/t/p",
    sizes: {
      small: "/w300",
      medium: "/w500",
      large: "/w1280",
      original: "/original",
    },
    poster: (path, size = "large") => {
      return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
    },
    backdrop: (path, size = "large") => {
      return `${tmdb_paths.images.url}${tmdb_paths.images.sizes[size]}${path}`;
    },
  },
};
