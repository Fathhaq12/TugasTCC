import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {BASE_URL} from "../utils"

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/notes`);
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="card">
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <div>
              <h2>{note.judul}</h2>
              <p>{note.deskripsi}</p>
            </div>
            <div className="actions">
              <Link to={`/edit/${note.id}`}>
                <button className="edit">Edit</button>
              </Link>
              <button className="delete" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-button-container">
        <Link to="/add">
          <button className="add">Add New Note</button>
        </Link>
      </div>
    </div>
  );
};

export default NoteList;
