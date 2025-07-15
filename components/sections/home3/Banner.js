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

            <section className="main-slider main-slider-style3">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/slides/slide-v3-1.jpg)" }}></div>
                            <div className="image-layer__top-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 text-center">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="main-slider-style3__fact-box">
                                                    <div className="big-text">
                                                        <img src="assets/images/shapes/100.png" alt=""/>
                                                    </div>
                                                    <div className="overlay-text">
                                                        <h5>Percenatge Success Results</h5>
                                                    </div>
                                                </div>
                                                <div className="sub-title">
                                                    <h3>Turning Learners Into</h3>
                                                </div>
                                                <div className="big-title">
                                                    <h2>
                                                        Skilled Drivers
                                                    </h2>
                                                </div>
                                                <div className="text">
                                                    <p>Duty or the obligations of business it will frequently occur.</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="/about">
                                                        <span className="txt">Discover Courses</span>
                                                    </Link>
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
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/slides/slide-v3-2.jpg)" }}></div>
                            <div className="image-layer__top-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 text-center">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="main-slider-style3__fact-box">
                                                    <div className="big-text">
                                                        <img src="assets/images/shapes/100.png" alt=""/>
                                                    </div>
                                                    <div className="overlay-text">
                                                        <h5>Percenatge Success Results</h5>
                                                    </div>
                                                </div>
                                                <div className="sub-title">
                                                    <h3>How do you get your</h3>
                                                </div>
                                                <div className="big-title">
                                                    <h2>
                                                        driving license
                                                    </h2>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        Ever undertakes laborious physical exercise except some advantage.
                                                    </p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="/about">
                                                        <span className="txt">Discover Courses</span>
                                                    </Link>
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
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/slides/slide-v3-3.jpg)" }}></div>
                            <div className="image-layer__top-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 text-center">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="main-slider-style3__fact-box">
                                                    <div className="big-text">
                                                        <img src="assets/images/shapes/100.png" alt=""/>
                                                    </div>
                                                    <div className="overlay-text">
                                                        <h5>Percenatge Success Results</h5>
                                                    </div>
                                                </div>
                                                <div className="sub-title">
                                                    <h3>We Build Confidence through</h3>
                                                </div>
                                                <div className="big-title">
                                                    <h2>
                                                        expert direction
                                                    </h2>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        Duty or the obligations of business it will frequently occur.
                                                    </p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link className="btn-one" href="/about">
                                                        <span className="txt">Discover Courses</span>
                                                    </Link>
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
            </section>

        </>
    )
}
