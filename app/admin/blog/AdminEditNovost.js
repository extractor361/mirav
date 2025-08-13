'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const API_BASE = 'https://miravapibackend.online/api';
const IMAGE_BASE_URL = 'https://miravapibackend.online/slike/';

export default function AdminEditNovost({ novost, onCancel, onUpdate }) {
  const [naslov, setNaslov] = useState(novost.naslov);
  const [sadrzaj, setSadrzaj] = useState(novost.sadrzaj || ''); // ako ima sadržaj u objektu
  const [slika, setSlika] = useState(null); // nova slika
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!naslov.trim()) {
      setError('Naslov je obavezan.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('naslov', naslov);
      formData.append('sadrzaj', sadrzaj);
      if (slika) formData.append('slika', slika);

      // POST ili PUT za izmenu novosti
      // Pretpostavimo da endpoint za izmenu izgleda ovako:
      // PUT https://miravapibackend.online/api/novosti/{id}
      const response = await axios.put(`${API_BASE}/novosti/${novost.novosti_id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        // Vrati ažurirani objekat novosti (pretpostavimo da ga backend vraća)
        onUpdate(response.data);
      } else {
        setError('Došlo je do greške prilikom izmene.');
      }
    } catch (err) {
      setError('Došlo je do greške prilikom izmene.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginTop: 20,
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h2 style={{ marginBottom: 20, color: '#183D73' }}>✏️ Izmeni novost #{novost.novosti_id}</h2>

      <div style={{ marginBottom: 15 }}>
        <label style={{ fontWeight: 'bold', color: '#183D73' }}>Naslov:</label>
        <input
          type="text"
          value={naslov}
          onChange={e => setNaslov(e.target.value)}
          required
          style={{
            width: '100%',
            padding: 10,
            marginTop: 5,
            borderRadius: 4,
            border: '1px solid #ccc',
          }}
        />
      </div>

      <div style={{ marginBottom: 15 }}>
        <label style={{ fontWeight: 'bold', color: '#183D73' }}>Sadržaj:</label>
        <div style={{ marginTop: 5, marginBottom: 20 }}>
          <ReactQuill
            value={sadrzaj}
            onChange={setSadrzaj}
            theme="snow"
            style={{ height: 250, borderRadius: 4 }}
          />
        </div>
      </div>

      <div style={{ marginBottom: 15, marginTop: 50 }}>
        <label style={{ fontWeight: 'bold', color: '#183D73' }}>Nova slika (opciono):</label>
        <input
          type="file"
          accept="image/*"
          onChange={e => setSlika(e.target.files[0])}
          style={{ marginTop: 5 }}
        />
        {novost.slika && !slika && (
          <div style={{ marginTop: 10 }}>
            <p>Trenutna slika:</p>
            <img
              src={`${IMAGE_BASE_URL}${novost.slika}`}
              alt={novost.naslov}
              style={{ maxWidth: 150, borderRadius: 4, border: '1px solid #ccc' }}
            />
          </div>
        )}
      </div>

      {error && <p style={{ color: 'red', marginBottom: 15 }}>{error}</p>}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30 }}>
        <button
          type="button"
          onClick={onCancel}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          Otkaži
        </button>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            fontSize: 16,
          }}
        >
          {loading ? 'Sačekajte...' : 'Sačuvaj izmene'}
        </button>
      </div>
    </form>
  );
}
