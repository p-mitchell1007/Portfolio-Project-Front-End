import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GameNewForm.css";

const API = process.env.REACT_APP_API_URL;

function VideoGameNewForm() {
  let navigate = useNavigate();
  const [game, setGame] = useState({
    name: "",
    release_year: 0,
    category: "",
    description: "",
  });

  const addGame = (newGame) => {
    axios
      .post(`${API}/games`, newGame)
      .then(
        () => {
          navigate(`/games`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addGame(game);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={game.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Game"
          required
        />
        <label htmlFor="release_year">Release Year:</label>
        <input
          id="release_year"
          type="number"
          value={game.release_year}
          placeholder="Year"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          value={game.category}
          placeholder="Category"
          onChange={handleTextChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={game.description}
          placeholder="Description"
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default VideoGameNewForm;
