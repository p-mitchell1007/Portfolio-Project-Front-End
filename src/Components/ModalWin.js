
import React from 'react'
import "./ModalWin.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

export default function ModalWin({ id, setModal }) {
    let navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await axios.delete(`${API}/games/${id}`);
            navigate(`/games`);
        } catch (error) {
            console.error("Error deleting game:", error);
        }
    };

    function handleConfirmDelete() {
        handleDelete();
        setModal(false); // Close the modal after successful deletion
    }

    function handleCancel() {
        setModal(false);
    }

    return (
        <div>
            <section className="modal">
                <div className="flex">
                    <div></div>
                    <button className="btn-close" onClick={handleCancel}>⨉</button>
                </div>
                <div className='text'>
                    <h3>Confirmation</h3>
                    <p>Are you sure you want to delete this?</p>
                </div>
                <div className="btn-group">
                    <button className="btn delete-btn" onClick={handleConfirmDelete}>Delete</button>
                    <button className="btn cancel-btn" onClick={handleCancel}>Cancel</button>
                </div>
            </section>
            <div className="overlay" onClick={handleCancel}></div>
        </div>
    )
}






