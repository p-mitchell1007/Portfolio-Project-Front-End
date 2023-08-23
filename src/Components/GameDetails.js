
// import React, { useState, useEffect } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import ModalWin from "./ModalWin";
// import "./GameDetails.css";

// const API = process.env.REACT_APP_API_URL;

// function VideoGameDetails() {
//   const [game, setGame] = useState({});
//   const [modal, setModal] = useState(false);
//   let { id } = useParams();
//   let navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`${API}/games/${id}`).then((response) => {
//       setGame(response.data);
//     });
//   }, [id, navigate]);

//   const releaseDecade = game.release_year < 2000 ? "1900s" : "2000s";


//   const handleDelete = async () => {
//     try {
//       await axios.delete(`${API}/games/${id}`);
//       navigate('/games'); 
//     } catch (error) {
//       console.error("Error deleting game:", error);
//     }
//   };

//   return (
//     <>
//       <article>
//         {modal ? <ModalWin id={id} setModal={setModal} /> : null}

//         <h3>{game.name}</h3>
//         <h5>
//           Release Year: {game.release_year} ({releaseDecade})
//         </h5>
//         <div className="game-thumbnail-container">
//           <img src="https://i.pinimg.com/564x/9b/81/59/9b8159f9999400bb9aba9361e4c83f93.jpg" alt="Super Mario Thumbnail" className="game-thumbnail" />
//         </div>
//         <p>Category: {game.category}</p>
//         <p>Description: {game.description}</p>

//         <div className="showNavigation">
//           <div>
//             <Link to={`/games`}>
//               <button>Back</button>
//             </Link>
//           </div>
//           <div className="buttons">
//             <div className="editButton">
//               <Link to={`/games/${id}/edit`}>
//                 <button>Edit</button>
//               </Link>
//             </div>
//             <div>
//               <button onClick={handleDelete}>Delete</button>
//             </div>
//           </div>
//         </div>
//       </article>
//     </>
//   );
// }

// export default VideoGameDetails;


import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ModalWin from "./ModalWin";
import "./GameDetails.css";

const API = process.env.REACT_APP_API_URL;

function VideoGameDetails() {
  const [game, setGame] = useState({});
  const [modal, setModal] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/games/${id}`).then((response) => {
      setGame(response.data);
    });
  }, [id, navigate]);

  const releaseDecade = game.release_year < 2000 ? "1900s" : "2000s";

  const handleDelete = () => {
    setModal(true); // Open the modal when Delete button is clicked
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`${API}/games/${id}`);
      navigate('/games');
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  return (
    <>
      <article>
        {modal ? (
          <ModalWin
            id={id}
            setModal={setModal}
            confirmDelete={confirmDelete} // Pass the confirmDelete function to the modal
          />
        ) : null}

        <h3>{game.name}</h3>
        <h5>
          Release Year: {game.release_year} ({releaseDecade})
        </h5>
        <div className="game-thumbnail-container">
          <img
            src="https://i.pinimg.com/564x/9b/81/59/9b8159f9999400bb9aba9361e4c83f93.jpg"
            alt="Super Mario Thumbnail"
            className="game-thumbnail"
          />
        </div>
        <p>Category: {game.category}</p>
        <p>Description: {game.description}</p>

        <div className="showNavigation">
          <div>
            <Link to={`/games`}>
              <button>Back</button>
            </Link>
          </div>
          <div className="buttons">
            <div className="editButton">
              <Link to={`/games/${id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default VideoGameDetails;
