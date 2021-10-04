import React from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavbBar/NavBar";
import Row from "./Components/Rows/Rows";

import requests from "./requests";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        isLargeRow={true}
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
