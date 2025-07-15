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
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 2,
        },
        1350: {
            slidesPerView: 2,
        },
    }
}

export default function Testimonial() {
    return (
        <> 

            <section className="testimonial-style1">
                <div className="container">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>Recenzije</h4>
                        </div>
                        <h2>Iskustva naših polaznika</h2>
                    </div>
                    <div className='inner-container'>
                        <div className="row">
                            <div className="col-xl-12">
                                <Swiper {...swiperOptions} className="swiper-container testimonial-style1-carousel">
                                    <SwiperSlide>
    <div className="single-testimonial-style1">
        <div className="single-testimonial-style1__inner">
            <div className="single-testimonial-style1__quote">
                <img src="assets/images/shapes/testimonial-v1-shape1.png" alt="shape" />
            </div>
            <div className="arrow-down"></div>
            <div className="single-testimonial-style1__top">
                <div className="title">
                    <h3>Oslobodila me straha</h3>
                </div>
            </div>
            <div className="border-line"></div>
            <div className="single-testimonial-style1__bottom">
                <div className="single-testimonial-style1__img">
                    <div className="inner">
                    </div>
                    <div className="rating-box">
                        <div className="icon">
                            <i className="icon-star"></i>
                        </div>
                        <p>5.0</p>
                    </div>
                </div>
                <div className="single-testimonial-style1__text">
                    <p>Mira ne samo da je instruktor već i podrška za svakoga ko ima strah od vožnje. Zahvaljujući njoj, sada vozim samostalno.</p>
                </div>
            </div>
        </div>
        <div className="single-testimonial-style1__leaner-box">
            <h3>Darya Shabalova, <span>Studentkinja</span></h3>
        </div>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="single-testimonial-style1">
        <div className="single-testimonial-style1__inner">
            <div className="single-testimonial-style1__quote">
                <img src="assets/images/shapes/testimonial-v1-shape1.png" alt="shape" />
            </div>
            <div className="arrow-down"></div>
            <div className="single-testimonial-style1__top">
                <div className="title">
                    <h3>Najbolja auto škola</h3>
                </div>
            </div>
            <div className="border-line"></div>
            <div className="single-testimonial-style1__bottom">
                <div className="single-testimonial-style1__img">
                    <div className="inner">
                        <img src="assets/images/testimonial/testimonial-v1-2.jpg" alt="image" />
                    </div>
                    <div className="rating-box">
                        <div className="icon">
                            <i className="icon-star"></i>
                        </div>
                        <p>5.0</p>
                    </div>
                </div>
                <div className="single-testimonial-style1__text">
                    <p>Obuka je vrhunska, a sa Mirinom podrškom uspeh je zagarantovan. Preporučujem svima koji žele sigurnost i znanje.</p>
                </div>
            </div>
        </div>
        <div className="single-testimonial-style1__leaner-box">
            <h3>Balša, <span>Budući vozač</span></h3>
        </div>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="single-testimonial-style1">
        <div className="single-testimonial-style1__inner">
            <div className="single-testimonial-style1__quote">
                <img src="assets/images/shapes/testimonial-v1-shape1.png" alt="shape" />
            </div>
            <div className="arrow-down"></div>
            <div className="single-testimonial-style1__top">
                <div className="title">
                    <h3>Izuzetno iskustvo</h3>
                </div>
            </div>
            <div className="border-line"></div>
            <div className="single-testimonial-style1__bottom">
                <div className="single-testimonial-style1__img">
                    <div className="inner">
                        <img src="assets/images/testimonial/testimonial-v1-3.jpg" alt="image" />
                    </div>
                    <div className="rating-box">
                        <div className="icon">
                            <i className="icon-star"></i>
                        </div>
                        <p>5.0</p>
                    </div>
                </div>
                <div className="single-testimonial-style1__text">
                    <p>Mirina smirenost i znanje su me oduševili. Učila me bez stresa, sa osmehom i velikim razumevanjem.</p>
                </div>
            </div>
        </div>
        <div className="single-testimonial-style1__leaner-box">
            <h3>Andrea Popović, <span>Kandidatkinja</span></h3>
        </div>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="single-testimonial-style1">
        <div className="single-testimonial-style1__inner">
            <div className="single-testimonial-style1__quote">
                <img src="assets/images/shapes/testimonial-v1-shape1.png" alt="shape" />
            </div>
            <div className="arrow-down"></div>
            <div className="single-testimonial-style1__top">
                <div className="title">
                    <h3>Bez greške</h3>
                </div>
            </div>
            <div className="border-line"></div>
            <div className="single-testimonial-style1__bottom">
                <div className="single-testimonial-style1__img">
                    <div className="inner">
                        <img src="assets/images/testimonial/testimonial-v1-4.jpg" alt="image" />
                    </div>
                    <div className="rating-box">
                        <div className="icon">
                            <i className="icon-star"></i>
                        </div>
                        <p>5.0</p>
                    </div>
                </div>
                <div className="single-testimonial-style1__text">
                    <p>Jedan je Mir! Ljubazna, posvećena, i uvek dostupna za dodatna pitanja. Zahvalna sam na svakom savetu!</p>
                </div>
            </div>
        </div>
        <div className="single-testimonial-style1__leaner-box">
            <h3>Biljana Vuković, <span>Majka i vozač</span></h3>
        </div>
    </div>
</SwiperSlide>

<SwiperSlide>
    <div className="single-testimonial-style1">
        <div className="single-testimonial-style1__inner">
            <div className="single-testimonial-style1__quote">
                <img src="assets/images/shapes/testimonial-v1-shape1.png" alt="shape" />
            </div>
            <div className="arrow-down"></div>
            <div className="single-testimonial-style1__top">
                <div className="title">
                    <h3>Profesionalna i strpljiva</h3>
                </div>
            </div>
            <div className="border-line"></div>
            <div className="single-testimonial-style1__bottom">
                <div className="single-testimonial-style1__img">
                    <div className="inner">
                        <img src="assets/images/testimonial/testimonial-v1-5.jpg" alt="image" />
                    </div>
                    <div className="rating-box">
                        <div className="icon">
                            <i className="icon-star"></i>
                        </div>
                        <p>4.8</p>
                    </div>
                </div>
                <div className="single-testimonial-style1__text">
                    <p>Mira je znala kako da me smiri u teškim trenucima. Njeno znanje i stil rada su neprocenjivi. Svaka preporuka!</p>
                </div>
            </div>
        </div>
        <div className="single-testimonial-style1__leaner-box">
            <h3>Jovana Jaćimović, <span>Administratorka</span></h3>
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
                                Otkrij šta su ostali polaznici rekli o nama!
                                <Link href="/"><i className="icon-next"></i>Pročitaj više</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
