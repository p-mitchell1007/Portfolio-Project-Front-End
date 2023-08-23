import axios from "axios";
import { useState, useEffect } from "react";
import Game from "./Game";

const API = process.env.REACT_APP_API_URL;

function Games() {
  const [games, setGames] = useState([]);
  const [toggle, setToggle] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios
      .get(`${API}/games`)
      .then((response) => setGames(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);

  function sortByReleaseYear() {
    setGames([...games.map((e) => e).sort((a, b) => a.release_year - b.release_year)]);
    setToggle(1);
  }

  function sortByCategory() {
    setGames([...games.map((e) => e).sort((a, b) => a.category.localeCompare(b.category))]);
    setToggle(2);
  }

  function handleSearchChange(event) {
    setSearchQuery(event.target.value);
  }

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="Games">
      <section>
        <div className="sort">
          <div></div>
          <div>
            <input
             className="searchBar"
              type="text"
              placeholder="Search games"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div>
            <button className="sortButton" onClick={sortByReleaseYear} style={toggle === 1 ? { backgroundColor: "black", color: "white" } : {}}>Sort by Release Year</button>
            <button className="sortButton sortCategory" onClick={sortByCategory} style={toggle === 2 ? { backgroundColor: "black", color: "white" } : {}}>Sort by Category</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Game Name</th>
              <th>Release Year</th>
              <th>Category</th>
              <th>Read About The Game !</th>
            </tr>
          </thead>
          <tbody>
            {filteredGames.map((game) => {
              return <Game key={game.id} game={game} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Games;
