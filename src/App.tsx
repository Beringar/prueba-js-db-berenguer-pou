import React, { useEffect, useState } from "react";
import Starship from "./types/Starship";
import StarshipClass from "./types/StarshipClass";

function App() {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [starShipClasses, setStarshipClasses] = useState<StarshipClass[]>([]);

  useEffect(() => {
    (async () => {
      const starshipsOutput: Starship[] = [];
      let starships = await fetch("https://swapi.dev/api/starships");
      let starshipsAPI = await starships.json();
      starshipsOutput.push(...starshipsAPI.results);
      while (starshipsAPI.next) {
        starships = await fetch(starshipsAPI.next);
        starshipsAPI = await starships.json();
        starshipsOutput.push(...starshipsAPI.results);
      }
      setStarships(starshipsOutput);

      const starShipClassesOutput: StarshipClass[] = [];
      starshipsOutput.forEach((starship) => {
        const index = starShipClassesOutput.findIndex(
          (starShipClass) =>
            starShipClass.name === starship.starship_class.toLowerCase()
        );
        if (index === -1) {
          starShipClassesOutput.push({
            name: starship.starship_class.toLowerCase(),
            quantity: 1,
          });
        } else {
          starShipClassesOutput[index].quantity =
            starShipClassesOutput[index].quantity + 1;
        }
      });
      setStarshipClasses(starShipClassesOutput);
    })();
  }, []);

  return (
    <div id="background-container">
      <header id="header-title">Star Wars Test</header>
      <main id="main-container">
        <h2>Starships:</h2>
        <p id="total-ships">Total ships: {starships.length}</p>
        <h2>Starships by class:</h2>
        <ul>
          {starShipClasses.map((starShipClass) => (
            <li
              key={starShipClass.name}
            >{`${starShipClass.name[0].toUpperCase()}${starShipClass.name.slice(
              1
            )}: ${starShipClass.quantity}`}</li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
