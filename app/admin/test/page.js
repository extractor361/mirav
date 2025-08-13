"use client";

import { useEffect, useState, useMemo } from "react";

export default function Pitanja() {
  const [pitanja, setPitanja] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Pagination & search
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pitanjaPerPage = 5;

  // Forma stanja
  const [tekstPitanja, setTekstPitanja] = useState("");
  const [tipPitanja, setTipPitanja] = useState("");
  const [slika, setSlika] = useState(null);
  const [odgovori, setOdgovori] = useState([{ tekst_odgovora: "", tacan: false }]);

  // Učitaj pitanja na mount
  useEffect(() => {
    fetchPitanja();
  }, []);

  const fetchPitanja = () => {
    setLoading(true);
    fetch("https://miravapibackend.online/api/sva-pitanja")
      .then((res) => res.json())
      .then((data) => {
        setPitanja(data);
        setLoading(false);
        setCurrentPage(1); // resetuj stranicu kad se učitaju pitanja
      })
      .catch(() => {
        setError("Greška pri dohvaćanju pitanja");
        setLoading(false);
      });
  };

  // Filter pitanja po pretrazi
  const filtriranaPitanja = useMemo(() => {
    if (!searchTerm.trim()) return pitanja;
    return pitanja.filter((p) =>
      p.tekst_pitanja.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, pitanja]);

  // Pagination - pitanja za trenutnu stranicu
  const indexOfLast = currentPage * pitanjaPerPage;
  const indexOfFirst = indexOfLast - pitanjaPerPage;
  const trenutnaPitanja = filtriranaPitanja.slice(indexOfFirst, indexOfLast);
  const ukupnoStranica = Math.ceil(filtriranaPitanja.length / pitanjaPerPage);

  // Paginacija klik dugmadi
  const setPage = (num) => {
    if (num < 1 || num > ukupnoStranica) return;
    setCurrentPage(num);
  };

  // Dodaj još jedan odgovor u formi
  const dodajOdgovor = () => {
    setOdgovori([...odgovori, { tekst_odgovora: "", tacan: false }]);
  };

  // Promeni tekst odgovora
  const promeniOdgovor = (index, vrednost) => {
    const noviOdgovori = [...odgovori];
    noviOdgovori[index].tekst_odgovora = vrednost;
    setOdgovori(noviOdgovori);
  };

  // Promeni da li je odgovor tačan (checkbox)
  const toggleTacan = (index) => {
    const noviOdgovori = [...odgovori];
    noviOdgovori[index].tacan = !noviOdgovori[index].tacan;
    setOdgovori(noviOdgovori);
  };

  // Upload slike - setuj fajl
  const handleFileChange = (e) => {
    setSlika(e.target.files[0] || null);
  };

  // Submit forme
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!tekstPitanja.trim()) {
    alert("Tekst pitanja je obavezan!");
    return;
  }

  if (odgovori.length === 0 || odgovori.some((o) => !o.tekst_odgovora.trim())) {
    alert("Unesite tekst za svaki odgovor.");
    return;
  }

  const odgovoriJson = JSON.stringify(odgovori);

  const formData = new FormData();
  formData.append("tekst_pitanja", tekstPitanja);
  formData.append("tip_pitanja", tipPitanja);
  formData.append("odgovori", odgovoriJson);
  if (slika) {
    formData.append("slika", slika);
  }

  try {
    const res = await fetch("https://miravapibackend.online/api/dodaj-pitanje", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Greška pri dodavanju pitanja.");
    }

    const noviPitanje = await res.json();

    alert("Pitanje uspješno dodato!");

    // Resetovanje formi
    setTekstPitanja("");
    setTipPitanja("");
    setSlika(null);
    setOdgovori([{ tekst_odgovora: "", tacan: false }]);

    // Ažuriranje stanja
    setPitanja((staro) => [...staro, { ...noviPitanje, odgovori }]);

    // Reload stranice nakon uspešnog unosa
    window.location.reload();

  } catch (err) {
    alert(err.message);
  }
};


  // Brisanje pitanja
  const obrisiPitanje = async (id) => {
    if (!confirm("Da li ste sigurni da želite da obrišete ovo pitanje?")) return;

    try {
      const res = await fetch(`https://miravapibackend.online/api/obrisi-pitanje/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Greška pri brisanju pitanja.");
      }

      alert("Pitanje uspješno obrisano!");
      fetchPitanja();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Pitanja i odgovori</h1>

      {/* Pretraga */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Pretraži pitanja..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // resetuj na prvu stranicu pri pretrazi
          }}
          style={{
            width: "100%",
            padding: 10,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
          aria-label="Pretraga pitanja"
        />
      </div>

      {loading && <p>Učitavanje pitanja...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Tabela sa pitanjima */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginBottom: 10,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#0070f3", color: "white" }}>
            <th style={{ padding: 12, textAlign: "left" }}>Tekst pitanja</th>
            <th style={{ padding: 12, textAlign: "left", width: 250 }}>Odgovori</th>
            <th style={{ padding: 12, textAlign: "center", width: 100 }}>Slika</th>
            <th style={{ padding: 12, textAlign: "center", width: 120 }}>Akcije</th>
          </tr>
        </thead>
        <tbody>
          {trenutnaPitanja.length === 0 && (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: 20 }}>
                Nema pitanja za prikaz.
              </td>
            </tr>
          )}

          {trenutnaPitanja.map((p) => (
            <tr key={p.pitanje_id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: 10, verticalAlign: "top" }}>{p.tekst_pitanja}</td>
              <td style={{ padding: 10, verticalAlign: "top" }}>
                <ul style={{ margin: 0, paddingLeft: 20 }}>
                  {p.odgovori.map((o) => (
                    <li
                      key={o.odgovor_id}
                      style={{
                        fontWeight: o.tacan ? "bold" : "normal",
                        color: o.tacan ? "green" : "inherit",
                        marginBottom: 2,
                      }}
                    >
                      {o.tekst_odgovora} {o.tacan && "✔️"}
                    </li>
                  ))}
                </ul>
              </td>
              <td style={{ padding: 10, textAlign: "center", verticalAlign: "top" }}>
                {p.slika ? (
                  <img
                    src={`https://miravapibackend.online/slike/${p.slika}`}
                    alt="Slika pitanja"
                    style={{ maxWidth: 80, maxHeight: 80, objectFit: "cover", borderRadius: 4 }}
                  />
                ) : (
                  "-"
                )}
              </td>
              <td style={{ padding: 10, textAlign: "center", verticalAlign: "top" }}>
                <button
                  onClick={() => obrisiPitanje(p.pitanje_id)}
                  style={{
                    backgroundColor: "#e00",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: 4,
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c00")}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e00")}
                  aria-label={`Obriši pitanje: ${p.tekst_pitanja}`}
                >
                  Obriši
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div
        style={{
          marginBottom: 30,
          display: "flex",
          justifyContent: "center",
          gap: 8,
          flexWrap: "wrap",
          userSelect: "none",
        }}
        role="navigation"
        aria-label="Pagination"
      >
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-disabled={currentPage === 1}
          style={{
            padding: "6px 12px",
            borderRadius: 4,
            border: "1px solid #ccc",
            backgroundColor: currentPage === 1 ? "#eee" : "white",
            cursor: currentPage === 1 ? "default" : "pointer",
          }}
        >
          &lt; Prethodna
        </button>

        {[...Array(ukupnoStranica)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              aria-current={currentPage === pageNum ? "page" : undefined}
              style={{
                padding: "6px 12px",
                borderRadius: 4,
                border: "1px solid #ccc",
                backgroundColor: currentPage === pageNum ? "#0070f3" : "white",
                color: currentPage === pageNum ? "white" : "black",
                cursor: "pointer",
                fontWeight: currentPage === pageNum ? "bold" : "normal",
              }}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === ukupnoStranica || ukupnoStranica === 0}
          aria-disabled={currentPage === ukupnoStranica || ukupnoStranica === 0}
          style={{
            padding: "6px 12px",
            borderRadius: 4,
            border: "1px solid #ccc",
            backgroundColor:
              currentPage === ukupnoStranica || ukupnoStranica === 0 ? "#eee" : "white",
            cursor:
              currentPage === ukupnoStranica || ukupnoStranica === 0 ? "default" : "pointer",
          }}
        >
          Sledeća &gt;
        </button>
      </div>

      {/* Forma za dodavanje pitanja */}
      <form onSubmit={handleSubmit} style={{ borderTop: "1px solid #ddd", paddingTop: 20 }}>
        <h2>Dodaj novo pitanje</h2>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="tekst_pitanja" style={{ display: "block", marginBottom: 6 }}>
            Tekst pitanja:
          </label>
          <textarea
            id="tekst_pitanja"
            rows={3}
            value={tekstPitanja}
            onChange={(e) => setTekstPitanja(e.target.value)}
            style={{ width: "100%", padding: 10, fontSize: 16, borderRadius: 6, border: "1px solid #ccc" }}
            required
            aria-required="true"
          />
        </div>

       

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 6 }}>Odgovori:</label>
          {odgovori.map((odg, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 8, gap: 10 }}>
              <input
                type="text"
                value={odg.tekst_odgovora}
                onChange={(e) => promeniOdgovor(i, e.target.value)}
                placeholder={`Odgovor ${i + 1}`}
                style={{ flexGrow: 1, padding: 8, fontSize: 16, borderRadius: 4, border: "1px solid #ccc" }}
                required
                aria-required="true"
              />
              <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 14 }}>
                <input
                  type="checkbox"
                  checked={odg.tacan}
                  onChange={() => toggleTacan(i)}
                  aria-label={`Označi odgovor ${i + 1} kao tačan`}
                />
                Tačan
              </label>
            </div>
          ))}
          <button
            type="button"
            onClick={dodajOdgovor}
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            Dodaj odgovor
          </button>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label htmlFor="slika" style={{ display: "block", marginBottom: 6 }}>
            Slika pitanja (opciono):
          </label>
          <input
            type="file"
            id="slika"
            accept="image/*"
            onChange={handleFileChange}
            aria-label="Izaberi sliku za pitanje"
          />
          {slika && (
            <div style={{ marginTop: 10 }}>
              Izabrana slika: <strong>{slika.name}</strong>
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Dodaj pitanje
        </button>
      </form>
    </div>
  );
}
