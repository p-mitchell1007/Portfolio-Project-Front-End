import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import "./GameEditForm.css";
const API = process.env.REACT_APP_API_URL;

function VideoGameEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [game, setGame] = useState({
    name: "",
    release_year: 0,
    category: "",
    description: "",
  });

  const updateGame = (updatedGame) => {
    axios
      .put(`${API}/games/${id}`, updatedGame)
      .then(
        () => {
          navigate(`/games/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setGame({ ...game, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/games/${id}`).then(
      (response) => setGame(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGame(game, id);
  };

  return (
    <div className="editForm">
      <div>
        <p>This is {game.name}, a {game.category} category game</p>
        <p>Released in {game.release_year}</p>
        <p>Description: {game.description}</p>
      </div>
      <div className="form">
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
          <input type="submit"/>
        </form>
        <Link to={`/games/${id}`}>
          <button className="nvmButton">Nevermind!</button>
        </Link>
      </div>
    </div>
  );
}

export default VideoGameEditForm;
