const API_KEY = "bd9e6fd77576a4322b9d460eb8025d7c";

const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en=us`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en=us`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
};

export default requests