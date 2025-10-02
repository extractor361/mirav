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
                            <img src="/assets/images/Mirav-2008.jpg" alt="Žuti Golf 8" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>870 €</li>
                              <li>Na rate: 900 €</li>
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
                            <img src="/assets/images/Mirav-2010.jpg" alt="Mirjana sa Golfom" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>930 €</li>
                              <li>Na rate: 950 €</li>
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
                            <img src="/assets/images/Mirav-2003.jpg" alt="Crveni Golf 8" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>970 €</li>
                              <li>Na rate: 990 €</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Dodatne usluge tabela */}
                    <div className="col-xl-12 mt-60">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Dodatne usluge</h3>
                          <h6>Cjenovnik dodatnih usluga</h6>
                        </div>
                        <div>
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__text mt-4">
                          <table className="table table-striped" style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                              <tr style={{ backgroundColor: '#f5f5f5' }}>
                                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>Usluga</th>
                                <th style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>Cijena</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Teoretski dio – polaganje</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>20 €</td>
                              </tr>
                              <tr>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Praktični dio – polaganje</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>20 €</td>
                              </tr>
                              <tr>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Svjedočanstvo</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>20 €</td>
                              </tr>
                              <tr>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Ispisnica</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>10 €</td>
                              </tr>
                              <tr>
                                <td style={{ padding: '10px', border: '1px solid #ddd' }}>Dopunski čas</td>
                                <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>30 €</td>
                              </tr>
                            </tbody>
                          </table>
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
