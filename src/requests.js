const APIKEY = "a355be9b599f07d08dd8b6e9f5f94845";

const requests = {
  fetchNetflixOriginals: `/discover/tv/?api_key=${APIKEY}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${APIKEY}`,
  fetchTopRated: `/movie/top_rated/?api_key=${APIKEY}`,
  fetchActionMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie/?api_key=${APIKEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie/?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
