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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Banner() {
    return (
        <> 

            <section className="main-slider main-slider-style4">
                <div className="main-slider-style4__inner">
                    <div className="main-slider-style4__img1"
                        style={{ backgroundImage: "url(assets/images/slides/main-slider-style4-img1.png)" }}></div>
                    <div className="main-slider-style4__img2 wow slideInRight" data-wow-delay="200ms"
                        data-wow-duration="3500ms">
                        <img className="float-bob-x" src="assets/images/slides/main-slider-style4-img2.png" alt=""/>
                    </div>
                    <div className="main-slider-style4__total-leaners text-center">
                        <div className="images-links">
                            <ul className="clearfix">
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/slides/slide-v4-link1.jpg" alt="image"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="img-box">
                                        <img src="assets/images/slides/slide-v4-link2.jpg" alt="image"/>
                                    </div>
                                </li>
                                <li>
                                    <div className="btn-box2">
                                        <Link href="#"><i className="icon-plus-sign"></i></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="title">
                            <h5>2k+ Successful Leaners</h5>
                        </div>
                    </div>

                    <div className="whats-app-newsletter">
                        <ul>
                            <li>
                                <Link href="whatsapp://send?abid=phonenumber&text=Hello%2C%20World!">
                                    <span className="icon-whatsapp"></span>
                                    Whats app Us
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:getsupport@gmail.com">
                                    <span className="icon-newsletter"></span>
                                    Newsletter
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider-content">
                                                <div className="main-slider-content__inner">
                                                    <div className="sub-title">
                                                        <h4>Welcome</h4>
                                                    </div>
                                                    <div className="big-title">
                                                        <h2>
                                                            Best Pick<br/> for Learn <span>Driving.</span>
                                                        </h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Duty or the obligations of business it will frequently occur
                                                            great.</p>
                                                    </div>
                                                    <div className="highlights-text">
                                                        <ul>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-verify"></span>
                                                                </div>
                                                                <h3>Immersive Training<br/> Experience</h3>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-verify"></span>
                                                                </div>
                                                                <h3>Entirely Involved<br/> Instructors</h3>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-box">
                                                        <a className="btn-one" href="about.html">
                                                            <span className="txt">Explore More</span>
                                                        </a>
                                                        <div className="right-btn">
                                                            <Link href="/courses-2"><span className="icon-next"></span>Get
                                                                Price Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider-content">
                                                <div className="main-slider-content__inner">
                                                    <div className="sub-title">
                                                        <h4>Our Team</h4>
                                                    </div>
                                                    <div className="big-title">
                                                        <h2>
                                                            Proficient<br/> Driving <span>Trainers.</span>
                                                        </h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Duty or the obligations of business it will frequently occur
                                                            great.</p>
                                                    </div>
                                                    <div className="highlights-text">
                                                        <ul>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-verify"></span>
                                                                </div>
                                                                <h3>Immersive Training<br/> Experience</h3>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-verify"></span>
                                                                </div>
                                                                <h3>Entirely Involved<br/> Instructors</h3>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-box">
                                                        <a className="btn-one" href="about.html">
                                                            <span className="txt">Explore More</span>
                                                        </a>
                                                        <div className="right-btn">
                                                            <Link href="/courses-2"><span className="icon-next"></span>Get
                                                                Price Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="swiper-slide">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="main-slider-content">
                                                <div className="main-slider-content__inner">
                                                    <div className="sub-title">
                                                        <h4>Our Team</h4>
                                                    </div>
                                                    <div className="big-title">
                                                        <h2>
                                                            Learn with<br/> <span>Simulation.</span> Tech.
                                                        </h2>
                                                    </div>
                                                    <div className="text">
                                                        <p>Duty or the obligations of business it will frequently occur
                                                            great.</p>
                                                    </div>
                                                    <div className="highlights-text">
                                                        <ul>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-verify"></span>
                                                                </div>
                                                                <h3>Immersive Training<br/> Experience</h3>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-verify"></span>
                                                                </div>
                                                                <h3>Entirely Involved<br/> Instructors</h3>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-box">
                                                        <a className="btn-one" href="about.html">
                                                            <span className="txt">Explore More</span>
                                                        </a>
                                                        <div className="right-btn">
                                                            <Link href="/courses-2"><span className="icon-next"></span>Get
                                                                Price Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="main-slider__nav">
                            <div className="swiper-button-prev" id="main-slider__swiper-button-prev">
                                <i className="icon-prev1 left"></i>
                            </div>
                            <div className="swiper-button-next" id="main-slider__swiper-button-next">
                                <i className="icon-next right"></i>
                            </div>
                        </div>
                    </Swiper>
                </div>
            </section>

        </>
    )
}
