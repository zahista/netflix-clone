/* eslint-disable no-unused-vars */
import Row from "./Row";
import Header from "./Header";
import React from "react";
import requests from "./endpoints";
import "./App.css"

function App() {
  

  return (
    <div className="App">

      <Header fetchURL={requests.fetchNetflixOriginals} />
      
      <Row
        isLargeRow
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row
        title="Top rated"
        fetchURL={requests.fetchTopRated}
      />
      <Row
        title="Trending now"
        fetchURL={requests.fetchTrending}
      />
      <Row
        title="Action movies"
        fetchURL={requests.fetchActionMovies}
      />
    </div>
  );
}

export default App;
