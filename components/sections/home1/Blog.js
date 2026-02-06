'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Blog() {
  const [novosti, setNovosti] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://miravapibackend.online/api/dohvatiNovosti')  
      .then(res => {
        if (!res.ok) throw new Error('Greška pri dohvatanju novosti')
        return res.json()
      })
      .then(data => {
        setNovosti(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Učitavanje...</p>
  if (error) return <p>Greška: {error}</p>

  return (
    <>
      <section className="blog-style1">
        <div className="container">
          <div className="sec-title text-center">
            <div className="sub-title">
              <h4>Objave iz bloga</h4>
            </div>
            <h2>Poslednje objave iz bloga</h2>
          </div>
          <div className="row">
            {novosti.map(({ novosti_id, naslov, sadrzaj, slika, datum_objave, korisnik_korisnik_id }, index) => (
              <div key={novosti_id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="single-blog-style1">
                  <div className="single-blog-style1__img">
                    <div className="inner">
                      {slika ? (
                        <>
                          <img src={`https://miravapibackend.online/slike/${slika}`} alt={naslov} />
                          <div className="single-blog-style1__overlay-icon">
                            <Link className="lightbox-image" data-fancybox="gallery" href={`https://miravapibackend.online/slike/${slika}`}>
                              <i className="icon-zoom"></i>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <img src="../assets/images/blog/default-image.jpg" alt="Default" />
                      )}
                    </div>
                    <div className="single-blog-style1__overlay-content">
                      <div className="date-box">
                        <h6>{new Date(datum_objave).toLocaleDateString('sr-RS', { day: '2-digit', month: 'long', year: 'numeric' })}</h6>
                      </div>
                      <div className="category">
                        <h5>Savjeti za vozače</h5> {/* možeš napraviti polje kategorije ako želiš */}
                      </div>
                      <div className="meta-box">
                        <ul className="meta-info clearfix">
                          <li>
                            <div className="icon">
                              <i className="icon-user"></i>
                            </div>
                            <div className="text">
                              <p>Autor: Admin</p> {/* Ako imaš imena autora, ubaci ih ovde */}
                            </div>
                          </li>
                          <li>
                            <div className="icon">
                              <i className="icon-stopwatch"></i>
                            </div>
                            <div className="text">
                              <p>2 minuta čitanja</p> {/* Možeš dodati proračun ako imaš broj reči */}
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="single-blog-style1__title">
                    <h3>
                      <Link href={`/blog/${novosti_id}`}>{naslov}</Link>
                    </h3>
                    <div className="btn-box">
                      <Link className="thm-btn3" href={`/blog/${novosti_id}`}>
                        <i className="icon-next"></i> Pročitaj više
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-btn">
            <div className="section-btn-inner">
              <div
                className="section-btn-inner-bg"
                style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
              <p>
                Želiš da saznaš više?
                <Link href="/blog">
                  <i className="icon-next"></i> pročitaj još
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
