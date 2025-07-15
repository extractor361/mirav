'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}

export default function Services() {
    return (
        <> 

            <section className="service-style1">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>NAŠE USLUGE</h4>
                        </div>
                        <h2>Prilagođeni programi obuke i podrške za svakog kandidata</h2>
                    </div>
                    <div className='inner-container'>
                        <div className="row">

                            <div className="col-xl-12">
                                <Swiper {...swiperOptions} className="swiper-container service-style1-carousel">
                                    <SwiperSlide>
                                        <div className="single-service-style1">
                                            <div className="single-service-style1__title">
                                                <h3><Link href="/obuka">Obuka vozača</Link></h3>
                                                <h6>Auto Škola Mirav</h6>
                                            </div>
                                            <div className="service-style1__shape1">
                                                <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                            </div>
                                            <div className="single-service-style1__img">
                                                <div className="single-service-style1__inner">
                                                    <img src="assets/images/resources/Mirav-2102_compressed.webp" alt="Awesome Image"/>
                                                </div>
                                                <div className="single-service-style1__icon">
                                                    <div className="service-style1__shape2">
                                                        <img src="assets/images/shapes/crt.png" alt="shape"/>
                                                    </div>
                                                    <span className="icon-driving"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span></span>
                                                </div>
                                                <div className="single-service-style1__text">
                                                    <p>Praktična nastava uz licencirane i iskusne instruktore..</p>
                                                    <div className="btn-box">
                                                        <Link href="/obuka"><i className="icon-next"></i>Saznaj više</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-service-style1">
                                            <div className="single-service-style1__title">
                                                <h3><Link href="/obuka">Teorijska nastava</Link></h3>
                                                <h6>Auto Škola Mirav</h6>
                                            </div>
                                            <div className="service-style1__shape1">
                                                <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                            </div>
                                            <div className="single-service-style1__img">
                                                <div className="single-service-style1__inner">
                                                    <img src="assets/images/resources/teorijaa.webp" alt="Awesome Image"/>
                                                </div>
                                                <div className="single-service-style1__icon">
                                                    <div className="service-style1__shape2">
                                                        <img src="assets/images/shapes/crt.png" alt="shape"/>
                                                    </div>
                                                    <span className="icon-driving-license"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span><span
                                                            className="path10"></span><span className="path11"></span><span
                                                            className="path12"></span></span>
                                                </div>
                                                <div className="single-service-style1__text">
                                                    <p>Zanimljivo i efikasno savladavanje saobraćajnih pravila..</p>
                                                    <div className="btn-box">
                                                        <Link href="/obuka"><i className="icon-next"></i>Saznaj više</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-service-style1">
                                            <div className="single-service-style1__title">
                                                <h3><Link href="/obuka">Moderna vozila za obuku</Link></h3>
                                                <h6>Auto Škola Mirav</h6>
                                            </div>
                                            <div className="service-style1__shape1">
                                                <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                            </div>
                                            <div className="single-service-style1__img">
                                                <div className="single-service-style1__inner">
                                                    <img src="assets/images/resources/Mirav-2094_compressed.webp" alt="Awesome Image"/>
                                                </div>
                                                <div className="single-service-style1__icon">
                                                    <div className="service-style1__shape2">
                                                        <img src="assets/images/shapes/crt.png" alt="shape"/>
                                                    </div>
                                                    <span className="icon-shield"><span className="path1"></span><span
                                                            className="path2"></span></span>
                                                </div>
                                                <div className="single-service-style1__text">
                                                    <p>Udobna, sigurna i idealna za učenje - Golf 8, Škoda Fabia i Citroën C3..</p>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Saznaj više</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>                                                                           
                                </Swiper>
                                <div className="swiper-nav-style-one">
                                    <button className="swiper-button-prev">
                                        <i className="left icon-prev1"></i>
                                    </button>
                                    <button className="swiper-button-next">
                                        <i className="icon-next"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-btn">
                        <div className="section-btn-inner">
                            <div className="section-btn-inner-bg"
                                style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
                            <p>
                                Programi obuke
                                <Link href="/obuka"><i className="icon-next"></i>Pročitaj sve</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
