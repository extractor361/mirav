'use client'
import React from 'react'
import Layout from '@/components/layout/Layout'

export default function Cjenovnik_Page() {
  return (
    <div className="page-wrapper boxed_wrapper">
      <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Cjenovnik">
        <section className="service-style1 pt-120 pb-90">
          <div className="container">
            <div className="sec-title text-center">
              <div className="sub-title">
                <h4>CJENOVNIK</h4>
              </div>
              <h2>Naš cilj je da Vam vožnju učinimo lakom</h2>
            </div>

            <div className="inner-container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="row">

                    {/* Žuti Golf 8 */}
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Obuka za vozače</h3>
                          <h6>Osnovna obuka</h6>
                        </div>
                        <div className="service-style1__shape1">
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__img">
                          <div className="single-service-style1__inner">
                            <img src="/assets/images/resources/golf 8.jpg" alt="Žuti Golf 8" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>870 €</li>
                              <li>Na rate: 890 €</li>
                              <li>Teorijski i praktični dio uključeni</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mirjana + Žuti Golf 8 */}
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Obuka za vozače</h3>
                          <h6>Prošireni paket</h6>
                        </div>
                        <div className="service-style1__shape1">
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__img">
                          <div className="single-service-style1__inner">
                            <img src="/assets/images/resources/Mirav-2102_compressed.webp" alt="Mirjana sa Golfom" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>930 €</li>
                              <li>Na rate: 950 €</li>
                              <li>Teorijski i praktični dio uključeni</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Crveni Golf 8 */}
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Obuka za vozače</h3>
                          <h6>Za strana lica</h6>
                        </div>
                        <div className="service-style1__shape1">
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__img">
                          <div className="single-service-style1__inner">
                            <img src="/assets/images/resources/Mirav-2096_compressed.webp" alt="Crveni Golf 8" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>970 €</li>
                              <li>Na rate: 990 €</li>
                              <li>Testovi i praktični dio uključeni</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dodatne usluge */}
                    <div className="col-xl-12 mt-60">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Dodatne usluge</h3>
                          <h6>Cjenovnik dodatnih usluga</h6>
                        </div>
                        <div >
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__img">
                          <div className="single-service-style1__inner">
                            <img src="/assets/images/resources/teorijaa.webp" alt="Crveni Golf 8" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>Teoretski dio – polaganje: 25 €</li>
                              <li>Praktični dio – polaganje: 25 €</li>
                              <li>Svjedočanstvo: 10 €</li>
                              <li>Ispisnica: 10 €</li>
                              <li>Dopunski čas: 30 €</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

            {/* Dugme / CTA */}
            <div className="section-btn mt-40">
              <div className="section-btn-inner">
                <div className="section-btn-inner-bg" style={{ backgroundImage: "url(/assets/images/pattern/thm-pattern-1.png)" }}></div>
                <p>
                  Spremni za obuku?
                  <a href="/kontakt"><i className="icon-next"></i> Prijavi se</a>
                </p>
              </div>
            </div>

          </div>
        </section>
      </Layout>
    </div>
  )
}