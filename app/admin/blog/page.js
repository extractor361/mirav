'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import AdminEditNovost from './AdminEditNovost';  // Uvezi novu komponentu

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const API_BASE = 'https://miravapibackend.online/api';
const IMAGE_BASE_URL = 'https://miravapibackend.online/slike/';

export default function AdminBlogList() {


  const handleAdd = async (e) => {
  e.preventDefault(); // Sprečava reload stranice

  // Resetuj greške i aktiviraj loading
  setSubmitError(null);
  setSubmitLoading(true);

  try {
    const formData = new FormData();
    formData.append('naslov', naslov);
    formData.append('sadrzaj', sadrzaj);
    if (slika) formData.append('slika', slika);

    const response = await axios.post(`${API_BASE}/dodajNovost`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data && response.data.success) {
      // Dodaj novu novost u listu
      setNovosti((prev) => [response.data.novost, ...prev]);
      // Resetuj polja forme
      setNaslov('');
      setSadrzaj('');
      setSlika(null);
    } else {
      setSubmitError('Greška prilikom dodavanja novosti.');
    }
  } catch (err) {
    setSubmitError(err.response?.data?.message || err.message || 'Greška prilikom dodavanja novosti.');
  } finally {
    setSubmitLoading(false);
  }
};

const handleDelete = async (id) => {
  if (!window.confirm('Da li ste sigurni da želite da obrišete ovu novost?')) {
    return;
  }

  try {
    await axios.delete(`${API_BASE}/obrisiNovost`, { data: { novosti_id: id  } });
    setNovosti((prev) => prev.filter(n => n.novosti_id !== id));
  } catch (err) {
    alert(err.response?.data?.message || 'Greška prilikom brisanja novosti.');
  }
};


  // ... postojeći state-i ...
  const [novosti, setNovosti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [naslov, setNaslov] = useState('');
  const [sadrzaj, setSadrzaj] = useState('');
  const [slika, setSlika] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [submitLoading, setSubmitLoading] = useState(false);

  // Dodatno:
  const [editNovost, setEditNovost] = useState(null); // za izmenu

  useEffect(() => {
    axios.get(`${API_BASE}/dohvatiNovosti`)
      .then(response => {
        setNovosti(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Postojeći handleDelete ...

  // Nova funkcija za otvaranje forme za izmenu
  const openEditForm = (novost) => {
    setEditNovost(novost);
  };

  // Kada se izmena potvrdi u child komponenti:
  const handleUpdateNovost = (updatedNovost) => {
    setNovosti((prev) =>
      prev.map((n) => (n.novosti_id === updatedNovost.novosti_id ? updatedNovost : n))
    );
    setEditNovost(null);
  };

  // Postojeći handleAdd ...

  if (loading) return <p style={{ textAlign: 'center', padding: 20 }}>Učitavanje...</p>;
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>Greška: {error}</p>;

  return (
    <div style={{ maxWidth: 1000, margin: 'auto', padding: '30px', backgroundColor: '#E6F0FF', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 30, color: '#183D73' }}>📋 Lista blog novosti (admin)</h1>

      <div style={{ overflowX: 'auto', marginBottom: 40 }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
          }}
        >
          <thead style={{ backgroundColor: '#183D73', color: '#fff' }}>
            <tr>
              {['ID', 'Naslov', 'Slika', 'Datum objave', 'Korisnik ID', 'Akcije'].map((h) => (
                <th key={h} style={{ padding: 12, textAlign: 'left', fontWeight: 'bold' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {novosti.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: 20 }}>Nema novosti</td>
              </tr>
            ) : (
              novosti.map(({ novosti_id, naslov, slika, datum_objave, korisnik_korisnik_id }) => (
                <tr key={novosti_id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: 12 }}>{novosti_id}</td>
                  <td style={{ padding: 12 }}>{naslov}</td>
                  <td style={{ padding: 12, textAlign: 'center' }}>
                    {slika ? (
                      <img
                        src={`${IMAGE_BASE_URL}${slika}`}
                        alt={naslov}
                        style={{
                          maxWidth: 100,
                          maxHeight: 70,
                          objectFit: 'cover',
                          borderRadius: 4,
                          border: '1px solid #ccc',
                        }}
                      />
                    ) : <span>–</span>}
                  </td>
                  <td style={{ padding: 12 }}>{datum_objave}</td>
                  <td style={{ padding: 12 }}>{korisnik_korisnik_id}</td>
                  <td style={{ padding: 12, display: 'flex', gap: 8 }}>
                    <button
                      onClick={() => openEditForm({ novosti_id, naslov, slika, datum_objave, korisnik_korisnik_id })}
                      title="Izmeni novost"
                      style={{
                        backgroundColor: '#28a745',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: 4,
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(novosti_id)}
                      style={{
                        backgroundColor: '#dc3545',
                        color: '#fff',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: 4,
                        cursor: 'pointer',
                        transition: 'background 0.2s',
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                    >
                      Obriši
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Forma za dodavanje */}
      {!editNovost && (
        <form
          onSubmit={handleAdd}
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 8,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          {/* ... tvoj postojeći form kod za dodavanje novosti ... */}
          <h2 style={{ marginBottom: 20, color: '#183D73' }}>✏️ Dodaj novu novost</h2>

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
            <label style={{ fontWeight: 'bold', color: '#183D73' }}>Slika (opciono):</label>
            <input
              type="file"
              accept="image/*"
              onChange={e => setSlika(e.target.files[0])}
              style={{ marginTop: 5 }}
            />
          </div>

          {submitError && <p style={{ color: 'red', marginBottom: 15 }}>{submitError}</p>}

          <button
            type="submit"
            disabled={submitLoading}
            style={{
              padding: '10px 20px',
              backgroundColor: '#468FFB',
              color: 'white',
              border: 'none',
              borderRadius: 4,
              cursor: submitLoading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              fontSize: 16,
              transition: 'background 0.3s',
            }}
            onMouseOver={e => !submitLoading && (e.target.style.backgroundColor = '#356ac3')}
            onMouseOut={e => !submitLoading && (e.target.style.backgroundColor = '#468FFB')}
          >
            {submitLoading ? 'Dodatak...' : 'Dodaj novost'}
          </button>
        </form>
      )}

      {/* Forma za izmenu - prikazuje se samo ako je izabrana neka novost */}
      {editNovost && (
        <AdminEditNovost
          novost={editNovost}
          onCancel={() => setEditNovost(null)}
          onUpdate={handleUpdateNovost}
        />
      )}
    </div>
  );
}
