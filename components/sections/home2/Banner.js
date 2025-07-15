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

            <section className="main-slider main-slider-style2">
                <Swiper {...swiperOptions} className="swiper-container thm-swiper__slider">
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/slides/slide-v2-1.jpg)" }}>
                            </div>
                            <div className="image-layer__left-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="sub-title">
                                                    <h5>Welcome</h5>
                                                </div>
                                                <div className="big-title">
                                                    <h2>
                                                        <span>Drive Safe &</span><br/> Smart with Us
                                                    </h2>
                                                </div>
                                                <div className="text">
                                                    <p>Saying through shrinking from toil and pain. These cases are
                                                        perfectly<br/> simple and easy to claims of distinguish.</p>
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
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/slides/slide-v2-2.jpg)" }}>
                            </div>
                            <div className="image-layer__left-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="sub-title">
                                                    <h5>Economical</h5>
                                                </div>
                                                <div className="big-title">
                                                    <h2>
                                                        <span>Budget-Friendly</span><br/> Courses
                                                    </h2>
                                                </div>
                                                <div className="text">
                                                    <p>Saying through shrinking from toil and pain. These cases are
                                                        perfectly<br/> simple and easy to claims of distinguish.</p>
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
                            <div className="image-layer" style={{ backgroundImage: "url(assets/images/slides/slide-v2-3.jpg)" }}>
                            </div>
                            <div className="image-layer__left-gradient"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="main-slider-content">
                                            <div className="main-slider-content__inner">
                                                <div className="sub-title">
                                                    <h5>Excellence</h5>
                                                </div>
                                                <div className="big-title">
                                                    <h2>
                                                        <span>Mastering</span><br/> Roads Together
                                                    </h2>
                                                </div>
                                                <div className="text">
                                                    <p>Saying through shrinking from toil and pain. These cases are
                                                        perfectly<br/> simple and easy to claims of distinguish.</p>
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
                </Swiper>
                <div className="main-slider__nav">
                    <div className="swiper-button-prev" id="main-slider__swiper-button-prev">
                        <i className="icon-prev1 left"></i>
                    </div>
                    <div className="swiper-button-next" id="main-slider__swiper-button-next">
                        <i className="icon-next right"></i>
                    </div>
                </div>
            </section>

        </>
    )
}
