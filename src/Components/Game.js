import { Link } from "react-router-dom";

function VideoGame({ game }) {
  return (
    <tr>
      <td>
        <Link to={`/games/${game.id}`}>🧟‍♂️</Link>
      </td>
      <td>{game.name}</td>
      <td>{game.release_year}</td>
      <td>{game.category}</td>
      <td>{game.description}</td>
    </tr>
  );
}

export default VideoGame;

