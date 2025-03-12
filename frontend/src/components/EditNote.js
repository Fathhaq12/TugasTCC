import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditNote = () => {
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/notes/${id}`);
      setJudul(response.data.judul);
      setDeskripsi(response.data.deskripsi);
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/notes/${id}`, { judul, deskripsi });
      navigate('/');
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <div className="card">
      <h1>Edit Note</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
          />
        </div>
        <div className="update-button-container">
          <button type="submit" className="edit">Update Note</button>
        </div>
      </form>
    </div>
  );
};

export default EditNote;