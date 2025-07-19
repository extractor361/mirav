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
                    {/* Obuka za vozače */}
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Obuka za vozače</h3>
                          <h6>Osnovna cijena</h6>
                        </div>
                        <div className="service-style1__shape1">
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__img">
                          <div className="single-service-style1__inner">
                            <img src="/assets/images/resources/Mirav-2102_compressed.webp" alt="Obuka" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>640 €</li>
                              <li>700 €</li>
                              <li>740 € <span className="text-gray-500">(strana lica)</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Plaćanje na rate */}
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Plaćanje na rate</h3>
                          <h6>Fleksibilne opcije</h6>
                        </div>
                        <div className="service-style1__shape1">
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__img">
                          <div className="single-service-style1__inner">
                            <img src="/assets/images/resources/teorijaa.webp" alt="Rate" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>660 €</li>
                              <li>720 €</li>
                              <li>760 € <span className="text-gray-500">(strana lica)</span></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ljekarsko uvjerenje */}
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="single-service-style1">
                        <div className="single-service-style1__title">
                          <h3>Ljekarsko uvjerenje</h3>
                          <h6>Obavezna provjera</h6>
                        </div>
                        <div className="service-style1__shape1">
                          <img src="/assets/images/shapes/service-v1-shape2.png" alt="shape" />
                        </div>
                        <div className="single-service-style1__img">
                          <div className="single-service-style1__inner">
                            <img src="/assets/images/resources/Mirav-2094_compressed.webp" alt="Ljekarsko" />
                          </div>
                          <div className="single-service-style1__text">
                            <ul className="price-list">
                              <li>20 €</li>
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
