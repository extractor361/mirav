'use client'
import React from 'react'
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
const PortfolioFilter2 = dynamic(() => import('@/components/elements/PortfolioFilter2'), { ssr: false,})
import { useState } from 'react'
export default function Gallery_Page_Two() {

 const [timeLeft, setTimeLeft] = useState(135) // 2 min 15 sekundi
    useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    return `${m}:${s}`
  }
    return (
        <div className="page-wrapper boxed_wrapper">
            <div className="page-wrapper boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Teorijski test 1">
        <div style={{display:'flex',justifyContent:'center'}}>
        <div className='test' style={{ display: 'flex',width:'70%', flexDirection: 'row', gap: '30px', padding: '30px', flexWrap: 'wrap' }}>
          
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
              <span style={{ fontSize: '14px', color: '#666' }}>Pitanje 1 od 100</span>
              <span style={{ color: 'red', fontWeight: 'bold' }}>{formatTime(timeLeft)}</span>
            </div>
            <p style={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Kako ćete postupiti u situaciji prikazanoj na slici?
            </p>
            <img 
              src="assets/images/resources/pitanjeslika.png"
              alt="Pitanje slika"
              style={{ width: '100%', maxWidth: '600px', marginBottom: '20px', borderRadius: '4px' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
              <label>
                <input type="radio" name="answer" style={{ marginRight: '8px' }}/>
                Zaustaviću se ispred raskrsnice
              </label>
              <label>
                <input type="radio" name="answer" style={{ marginRight: '8px' }}/>
                Propustiću vozilo koje skreće levo i nastaviti kretanje
              </label>
              <label>
                <input type="radio" name="answer" style={{ marginRight: '8px' }}/>
                Zaustaviću vozilo pored
              </label>
              <label>
                <input type="radio" name="answer" style={{ marginRight: '8px' }}/>
                Ići ću gde je navedeno
              </label>
            </div>
            <button style={{
              backgroundColor: '#1976d2',
              color: '#fff',
              padding: '10px 30px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Sledeća
            </button>
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
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>Trenutno pitanje: broj 1</p>
            <p style={{ color: 'red', fontWeight: 'bold' }}>{formatTime(timeLeft)}</p>
          </div>
        </div></div>
      </Layout>
    </div>
        </div>
    )
}