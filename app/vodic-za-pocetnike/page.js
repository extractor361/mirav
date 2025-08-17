'use client'
import React, { useState } from 'react'
import Layout from '@/components/layout/Layout'

export default function Vodic_Page() {
  const kategorije = [
    {
      naziv: "Predispitna vožnja",
      fajlovi: ["predispitna_voznja"]
    },
    {
      naziv: "Osnovne lekcije",
      fajlovi: [
        "Lekcija_1.2_Polazak_Promjena_Zaustavljanje",
        "PRIRUČNIK_T1-01_T1-02_BEZ_SESTRA",
        "promjena_stepena_prirucnik"
      ]
    },
    {
      naziv: "Polukružno okretanje i parkiranje",
      fajlovi: ["polukruzno_okretanje_i_parkiranje"]
    },
    {
      naziv: "Poligonske radnje",
      fajlovi: ["poligonske_radnje"]
    },
    {
      naziv: "T2 praktične lekcije",
      fajlovi: [
        "T2-01_ukljucivanje_iskljucivanje_saobracaj_skraceno",
        "T2-03_Uvezbavanje_pravila_mimoilazenja",
        "T2-04_pjesaci_bez_obilazenja",
        "T2-05_raskrsnice",
        "T2-06_Raskrsnice"
      ]
    },
    {
      naziv: "Samostalna vožnja",
      fajlovi: ["T4-01_T4-02_samostalna_voznja", "voznja_na_pola_kvacila"]
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleCategory = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="page-wrapper boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Vodič za početnike">
        <section className="service-style1 pt-120 pb-90">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title">
                <h4>VODIČ ZA POČETNIKE</h4>
              </div>
              <h2>Sve lekcije i priručnici na jednom mjestu</h2>
            </div>

            <div className="accordion">
              {kategorije.map((kat, idx) => (
                <div
                  key={idx}
                  className="accordion-item mb-3 border rounded cursor-pointer"
                  onClick={() => toggleCategory(idx)}
                >
                  <div className="accordion-header w-full d-flex justify-content-between align-items-center p-3 bg-light">
                    <strong>{kat.naziv}</strong>
                    <span
                      style={{
                        transition: 'transform 0.3s ease',
                        transform: openIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      ▼
                    </span>
                  </div>
                  {openIndex === idx && (
                    <div className="accordion-body p-3 bg-white">
                      <ul className="list-unstyled">
                        {kat.fajlovi.map((file, i) => (
                          <li
                            key={i}
                            className="d-flex flex-wrap justify-content-between align-items-center mb-2 gap-2"
                          >
                            <span className="d-flex align-items-center">
                              <img
                                src="/assets/car-icon.svg"
                                alt="PDF"
                                style={{ width: 18, marginRight: 8 }}
                              />
                              {file}.pdf
                            </span>
                            <a
                              href={`/assets/${file}.pdf`}
                              className="btn btn-sm btn-primary"
                              download
                              onClick={(e) => e.stopPropagation()}
                            >
                              ⬇ Preuzmi
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="section-btn mt-40 text-center">
              <div
                className="section-btn-inner-bg py-4 px-5 rounded"
                style={{
                  backgroundImage: "url(/assets/images/pattern/thm-pattern-1.png)",
                  backgroundSize: 'cover',
                  position:'relative'
                }}
              >
                <p className="mb-0 text-white fw-bold fs-5">
                  Spremni za vožnju?{' '}
                  <a href="/kontakt" className="btn btn-warning ms-3">
                    Prijavi se
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </Layout>
    </div>
  )
}
