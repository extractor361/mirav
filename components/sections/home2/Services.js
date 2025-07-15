'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import CircleText from "../../../components/elements/CircleText"
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

export default function Services() {
    return (
        <> 

            <section className="service-style2">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-5">
                            <div className="service-style2__img">
                                <div className="service-style2__img-title">
                                    Services
                                </div>
                                <div className="inner">
                                    <img src="assets/images/services/service-v2-3.png" alt="Image"/>
                                </div>
                                <div className="service-style2__img-rotated-text">
                                    <div className="service-style2-rotated-text"><CircleText text="Turning Learners into Skilled Drivers. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" radius={95} /></div>
                                    <div className="overlay-text">
                                        <h3>2k+</h3>
                                        <h5>Successful <br/>Leaners</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7">
                            <div className="service-style2__contant">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>Services</h4>
                                    </div>
                                    <h2>Range of Services</h2>
                                </div>
                                <div className="text-box">
                                    <p>Certain circumstances and owing to the claims of duty or the obligations
                                        that pleasures have to be repudiated and annoyances accepted.</p>
                                </div>

                                <div className="service-style2__contant-inner">
                                    <Swiper {...swiperOptions} className="swiper-container service-style2-carousel">
                                        <SwiperSlide>
                                            <div className="service-style2__single">
                                                <div className="service-style2__single-img">
                                                    <img src="assets/images/services/service-v2-1.jpg" alt="Awesome Image"/>
                                                    <div className="service-style2__single-overlay-icon">
                                                        <span className="icon-driving"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span>
                                                        </span>
                                                    </div>
                                                    <div className="service-style2__single-overlay-text">
                                                        <p>
                                                            Obligations of business it will occur that pleasures have to
                                                            frequently occur ...
                                                        </p>
                                                    </div>
                                                    <div className="service-style2__single-overlay-btn">
                                                        <a className="btn-one" href="/services-details">
                                                            <span className="txt">
                                                                Read More
                                                            </span>
                                                        </a>
                                                        <div className="shape1">
                                                            <img src="assets/images/shapes/service-v2-shape1.png" alt="shape"/>
                                                        </div>
                                                        <div className="shape2">
                                                            <img src="assets/images/shapes/service-v2-shape2.png" alt="shape"/>
                                                        </div>
                                                    </div>
                                                    <div className="count-box">
                                                        <h2>01</h2>
                                                    </div>
                                                </div>
                                                <div className="service-style2__single-title">
                                                    <h3><Link href="/services-details">Driving Courses</Link></h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="service-style2__single">
                                                <div className="service-style2__single-img">
                                                    <img src="assets/images/services/service-v2-2.jpg" alt="Awesome Image"/>
                                                    <div className="service-style2__single-overlay-icon">
                                                        <span className="icon-driving-license"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span><span
                                                                className="path10"></span><span className="path11"></span><span
                                                                className="path12"></span>
                                                        </span>
                                                    </div>
                                                    <div className="service-style2__single-overlay-text">
                                                        <p>
                                                            Obligations of business it will occur that pleasures have to
                                                            frequently occur ...
                                                        </p>
                                                    </div>
                                                    <div className="service-style2__single-overlay-btn">
                                                        <a className="btn-one" href="/services-details">
                                                            <span className="txt">
                                                                Read More
                                                            </span>
                                                        </a>
                                                        <div className="shape1">
                                                            <img src="assets/images/shapes/service-v2-shape1.png" alt="shape"/>
                                                        </div>
                                                        <div className="shape2">
                                                            <img src="assets/images/shapes/service-v2-shape2.png" alt="shape"/>
                                                        </div>
                                                    </div>
                                                    <div className="count-box">
                                                        <h2>02</h2>
                                                    </div>
                                                </div>
                                                <div className="service-style2__single-title">
                                                    <h3><Link href="/services-details">Driving Licence</Link></h3>
                                                </div>
                                            </div>
                                        </SwiperSlide><SwiperSlide>
                                            <div className="service-style2__single">
                                                <div className="service-style2__single-img">
                                                    <img src="assets/images/services/service-v2-1.jpg" alt="Awesome Image"/>
                                                    <div className="service-style2__single-overlay-icon">
                                                        <span className="icon-driving"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span>
                                                        </span>
                                                    </div>
                                                    <div className="service-style2__single-overlay-text">
                                                        <p>
                                                            Obligations of business it will occur that pleasures have to
                                                            frequently occur ...
                                                        </p>
                                                    </div>
                                                    <div className="service-style2__single-overlay-btn">
                                                        <a className="btn-one" href="/services-details">
                                                            <span className="txt">
                                                                Read More
                                                            </span>
                                                        </a>
                                                        <div className="shape1">
                                                            <img src="assets/images/shapes/service-v2-shape1.png" alt="shape"/>
                                                        </div>
                                                        <div className="shape2">
                                                            <img src="assets/images/shapes/service-v2-shape2.png" alt="shape"/>
                                                        </div>
                                                    </div>
                                                    <div className="count-box">
                                                        <h2>01</h2>
                                                    </div>
                                                </div>
                                                <div className="service-style2__single-title">
                                                    <h3><Link href="/services-details">Driving Courses</Link></h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="service-style2__single">
                                                <div className="service-style2__single-img">
                                                    <img src="assets/images/services/service-v2-2.jpg" alt="Awesome Image"/>
                                                    <div className="service-style2__single-overlay-icon">
                                                        <span className="icon-driving-license"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span><span
                                                                className="path10"></span><span className="path11"></span><span
                                                                className="path12"></span>
                                                        </span>
                                                    </div>
                                                    <div className="service-style2__single-overlay-text">
                                                        <p>
                                                            Obligations of business it will occur that pleasures have to
                                                            frequently occur ...
                                                        </p>
                                                    </div>
                                                    <div className="service-style2__single-overlay-btn">
                                                        <a className="btn-one" href="/services-details">
                                                            <span className="txt">
                                                                Read More
                                                            </span>
                                                        </a>
                                                        <div className="shape1">
                                                            <img src="assets/images/shapes/service-v2-shape1.png" alt="shape"/>
                                                        </div>
                                                        <div className="shape2">
                                                            <img src="assets/images/shapes/service-v2-shape2.png" alt="shape"/>
                                                        </div>
                                                    </div>
                                                    <div className="count-box">
                                                        <h2>02</h2>
                                                    </div>
                                                </div>
                                                <div className="service-style2__single-title">
                                                    <h3><Link href="/services-details">Driving Licence</Link></h3>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    <div className="swiper-nav-style-one">
                                        <button className="swiper-button-prev" id="main-slider__swiper-button-next">
                                            <i className="left icon-prev1"></i>
                                        </button>
                                        <button className="swiper-button-next" id="main-slider__swiper-button-prev">
                                            <i className="icon-next"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
