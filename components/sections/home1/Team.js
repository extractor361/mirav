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

export default function Team() {
    return (
        <> 

            <section className="team-style1">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Naš Tim</h4>
                        </div>
                        <h2>Naš stručni tim</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <Swiper {...swiperOptions} className="swiper-container team-style1-carousel">
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/resources/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Mirjana <br/>Vešović</Link></h3>
                                                <span>Osnivač</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Osnivač i direktor, instruktor vožnje B i C kategorije.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim1.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Almedina <br/>Jašaraj</Link></h3>
                                                <span>Asisten u nastavi</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Asistent u teorijskoj nastavi, student Saobraćajnog fakulteta</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim2.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Nikola  <br/>Vlahović</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Instruktor vožnje motornih vozila B kategorije</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim3.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Miladin <br/>Vešović</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Instruktor vožnje motornih vozila B kategorije.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim4.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Ivana Šćepanović  <br/>Petković</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Instruktor vožnje motornih vozila B kategorije.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim5.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Adam  <br/>Baković</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Instruktor vožnje motornih vozila B kategorije.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim6.jpeg" alt="Awesome Image"/>
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

                    <div className="section-btn">
                        <div className="section-btn-inner">
                            <div className="section-btn-inner-bg"
                                style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
                            <p>
                                Naš tim je uvijek tu da pomogne!
                                <Link href="/"><i className="icon-next"></i>prijavi se</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
