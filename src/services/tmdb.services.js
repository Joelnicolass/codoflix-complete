import { moviesAdapter, tvAdapter } from "../adapters/tmdb.adapters";
import { tmdb, tmdb_paths } from "../core/APIS/tmdb.api";

export const getPopularMovies = async () => {
  const { data } = await tmdb.get(tmdb_paths.movies.popular);
  return moviesAdapter(data.results);
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdb.get(tmdb_paths.movies.topRated);
  return moviesAdapter(data.results);
};

export const getUpcomingMovies = async () => {
  const { data } = await tmdb.get(tmdb_paths.movies.upcoming);
  return data;
};

export const getNowPlayingMovies = async () => {
  const { data } = await tmdb.get(tmdb_paths.movies.nowPlaying);
  return data;
};

export const getMovieDetails = async (id) => {
  const { data } = await tmdb.get(tmdb_paths.movies.details(id));
  return data;
};

export const getMovieVideos = async (id) => {
  const { data } = await tmdb.get(tmdb_paths.movies.videos(id));
  return data;
};

export const getMovieRecommendations = async (id) => {
  const { data } = await tmdb.get(tmdb_paths.movies.recommendations(id));
  return data;
};

export const getPopularTV = async () => {
  const { data } = await tmdb.get(tmdb_paths.tv.popular);
  return tvAdapter(data.results);
};

export const getTopRatedTV = async () => {
  const { data } = await tmdb.get(tmdb_paths.tv.topRated);
  return data;
};

export const getOnTheAirTV = async () => {
  const { data } = await tmdb.get(tmdb_paths.tv.onTheAir);
  return data;
};

export const getAiringTodayTV = async () => {
  const { data } = await tmdb.get(tmdb_paths.tv.airingToday);
  return data;
};

export const getTVDetails = async (id) => {
  const { data } = await tmdb.get(tmdb_paths.tv.details(id));
  return data;
};

export const getTVVideos = async (id) => {
  const { data } = await tmdb.get(tmdb_paths.tv.videos(id));
  return data;
};

export const getTVRecommendations = async (id) => {
  const { data } = await tmdb.get(tmdb_paths.tv.recommendations(id));
  return data;
};

export const getTrendingAll = async () => {
  const { data } = await tmdb.get(tmdb_paths.trending.all);
  return data;
};

export const getTrendingMovies = async () => {
  const { data } = await tmdb.get(tmdb_paths.trending.movies);
  return data;
};

export const getTrendingTV = async () => {
  const { data } = await tmdb.get(tmdb_paths.trending.tv);
  return data;
};
