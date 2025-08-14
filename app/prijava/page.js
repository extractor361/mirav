"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PrijavaPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const [error, setError] = useState("");

  // Ako postoji token u localStorage, odmah šalji korisnika na /admin
  useEffect(() => {
    const token = localStorage.getItem("autentikacija");
    if (token) {
      router.push("/admin");
    }
  }, [router]);

  const prijava = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !lozinka) {
      setError("Unesite email i lozinku.");
      return;
    }

    try {
      const res = await fetch("https://miravapibackend.online/api/prijava", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unos: { email, lozinka } }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Greška pri prijavi.");
      } else {
        // Sačuvaj token i korisnika u localStorage
        if (data.token) {
          localStorage.setItem("autentikacija", data.token);
        }
        if (data.korisnik) {
          localStorage.setItem("korisnik", JSON.stringify(data.korisnik));
        }

        router.push("/admin");
      }
    } catch (err) {
      setError("Greška na serveru.");
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={prijava} style={styles.form}>
        <h2 style={styles.title}>Prijava</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Lozinka"
          value={lozinka}
          onChange={(e) => setLozinka(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Prijavi se</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f7fa",
  },
  form: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    color: "#333",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    background: "#0077cc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  error: {
    color: "red",
    marginTop: "0.5rem",
    textAlign: "center",
    fontSize: "0.9rem",
  },
};
