'use client'
import React, { useEffect, useState } from 'react'
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'

const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), { ssr: false })

export default function Gallery_Page_Two() {
  const [timeLeft, setTimeLeft] = useState(135) // 2 min 15 sekundi
  const [pitanja, setPitanja] = useState([])
  const [trenutno, setTrenutno] = useState(0)
  const [odgovoriKorisnika, setOdgovoriKorisnika] = useState({})
  const [rezultat, setRezultat] = useState(null)
  const [prikaziRezultatPitanja, setPrikaziRezultatPitanja] = useState(false)
  const [odgovorKliknut, setOdgovorKliknut] = useState(null)

  // Timer
  useEffect(() => {
    if (timeLeft <= 0) {
      zavrsiTest()
      return
    }
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  // Fetch pitanja
  useEffect(() => {
    fetch('https://miravapibackend.online/api/nasumicna-pitanja')
      .then(res => res.json())
      .then(data => setPitanja(data))
      .catch(err => console.error("Greška:", err))
  }, [])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }

  const klikniOdgovor = (pitanjeId, odgovorId) => {
    // Zabeleži odgovor korisnika
    setOdgovoriKorisnika(prev => ({ ...prev, [pitanjeId]: odgovorId }))
    setOdgovorKliknut(odgovorId)
    setPrikaziRezultatPitanja(true)

    // Posle 3 sekunde prelazi na sledeće pitanje ili završava test
    setTimeout(() => {
      if (trenutno < pitanja.length - 1) {
        setTrenutno(prev => prev + 1)
        setPrikaziRezultatPitanja(false)
        setOdgovorKliknut(null)
      } else {
        zavrsiTest()
      }
    }, 3000)
  }

  const zavrsiTest = () => {
    let tacni = 0
    pitanja.forEach(p => {
      const tacan = p.odgovori.find(o => o.tacan === true)
      if (tacan && odgovoriKorisnika[p.pitanje_id] === tacan.odgovor_id) {
        tacni++
      }
    })
    const procenat = ((tacni / pitanja.length) * 100).toFixed(2)
    setRezultat({ tacni, ukupno: pitanja.length, procenat })
  }

  if (rezultat) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Rezultat testa">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h2>Rezultat</h2>
          <p>Tačno: {rezultat.tacni} / {rezultat.ukupno}</p>
          <p>Procenat: {rezultat.procenat}%</p>
        </div>
      </Layout>
    )
  }

  if (pitanja.length === 0) {
    return (
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Teorijski test 1">
        <div style={{ textAlign: 'center', padding: '50px' }}>Učitavanje pitanja...</div>
      </Layout>
    )
  }

  const pitanje = pitanja[trenutno]
  const tacanOdgovorId = pitanje.odgovori.find(o => o.tacan)?.odgovor_id

  return (
    <div className="page-wrapper boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Teorijski test 1">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='test' style={{ display: 'flex', width: '70%', flexDirection: 'row', gap: '30px', padding: '30px', flexWrap: 'wrap' }}>
            
            {/* Glavni blok */}
            <div style={{
              flex: '1',
              background: '#fff',
              padding: '30px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              minWidth: '300px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                <span style={{ fontSize: '14px', color: '#666' }}>Pitanje {trenutno + 1} od {pitanja.length}</span>
                <span style={{ color: 'red', fontWeight: 'bold' }}>{formatTime(timeLeft)}</span>
              </div>
              <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>{pitanje.tekst_pitanja}</p>
              {pitanje.slika && (
                <img 
                  src={`https://miravapibackend.online/slike/${pitanje.slika}`}
                  alt="Pitanje slika"
                  style={{ width: '100%', maxWidth: '200px', marginBottom: '20px', borderRadius: '4px' }}
                />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                {pitanje.odgovori.map(o => {
                  let bg = ''
                  if (prikaziRezultatPitanja) {
                    if (o.odgovor_id === tacanOdgovorId) bg = 'lightgreen'
                    else if (o.odgovor_id === odgovorKliknut) bg = '#ffb3b3'
                  }
                  return (
                    <label 
                      key={o.odgovor_id} 
                      style={{ backgroundColor: bg, padding: '8px', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      <input 
                        type="radio" 
                        name={`answer_${pitanje.pitanje_id}`} 
                        checked={odgovoriKorisnika[pitanje.pitanje_id] === o.odgovor_id}
                        onChange={() => klikniOdgovor(pitanje.pitanje_id, o.odgovor_id)}
                        disabled={prikaziRezultatPitanja}
                        style={{ marginRight: '8px' }}
                      />
                      {o.tekst_odgovora}
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div style={{
              width: '250px',
              background: '#fff',
              padding: '30px',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
              borderRadius: '8px',
              minWidth: '200px'
            }}>
              <h3 style={{ marginBottom: '10px' }}>Napomena</h3>
              <p style={{ fontSize: '14px', marginBottom: '20px' }}>Trenutno pitanje: {trenutno + 1}</p>
              <p style={{ color: 'red', fontWeight: 'bold' }}>{formatTime(timeLeft)}</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
