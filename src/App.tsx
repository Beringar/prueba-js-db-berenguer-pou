import React, { useEffect, useState } from "react";
import Starship from "./types/Starship";

function App() {
  const [starships, setStarships] = useState<Starship[]>([]);

  useEffect(() => {
    (async () => {
      const starshipsOutput = [];
      let starships = await fetch("https://swapi.dev/api/starships");
      let starshipsAPI = await starships.json();
      starshipsOutput.push(...starshipsAPI.results);
      while (starshipsAPI.next) {
        starships = await fetch(starshipsAPI.next);
        starshipsAPI = await starships.json();
        starshipsOutput.push(...starshipsAPI.results);
      }
      setStarships(starshipsOutput);
    })();
  }, []);

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships: {starships.length}</p>
        <h2>Starships by class:</h2>
      </main>
    </div>
  );
}

export default App;
