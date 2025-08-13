"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PrijavaPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [lozinka, setLozinka] = useState("");
  const [error, setError] = useState("");

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
        credentials: "include", // omogućava primanje kolačića sa servera
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ unos: { email, lozinka } }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Greška pri prijavi.");
      } else {
        // Ako backend vraća korisnika, možeš po potrebi sačuvati podatke u globalni kontekst ili localStorage
        router.push("/admin"); // preusmjerava na admin dashboard
      }
    } catch (err) {
      setError("Greška na serveru.");
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={prijava} style={styles.form}>
        <h2>Prijava</h2>
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
    gap: "0.5rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    background: "#0077cc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "0.5rem",
    textAlign: "center",
  },
};
