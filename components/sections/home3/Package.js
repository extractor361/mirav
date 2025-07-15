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

    // Pagination
    pagination: {
        el: '.swiper-dots-style-one',
        clickable: true,
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

export default function Package() {
    return (
        <> 

            <section className="package-style1">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Packages</h4>
                        </div>
                        <h2>Find Your Perfect Package</h2>
                    </div>
                    <Swiper {...swiperOptions} className="swiper-container service-style1-carousel">
                        <SwiperSlide>
                            <div className="single-package-style1">
                                <div className="title-box">
                                    <h3>Basic Package</h3>
                                </div>
                                <div className="img-box">
                                    <div className="inner">
                                        <img src="assets/images/resources/packages-v1-1.jpg" alt="Image"/>
                                        <div className="overlay-rating-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon icon--1">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="value-box">
                                        <h2><sup>$</sup>54<sub>/ Course</sub></h2>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="text">
                                                <p>Normally costs $80</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text">
                                                <p>Free pick up and drop off</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text">
                                                <p>Valid for 12 month</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/courses-2">
                                            <span className="txt">
                                                Get Started
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="text-box text-center">
                                        <h6>Terms & Conditions</h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-package-style1">
                                <div className="title-box">
                                    <h3>Standard Package</h3>
                                </div>
                                <div className="img-box">
                                    <div className="inner">
                                        <img src="assets/images/resources/packages-v1-2.jpg" alt="Image"/>
                                        <div className="overlay-rating-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon icon--1">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon icon--1">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="value-box">
                                        <h2><sup>$</sup>99<sub>/ Course</sub></h2>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="text">
                                                <p>5 x 1 Hour Driving Lesson</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text">
                                                <p>Valid for 12 month</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text">
                                                <p>Free pick up and drop off</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/courses-2">
                                            <span className="txt">
                                                Get Started
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="text-box text-center">
                                        <h6>Terms & Conditions</h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="single-package-style1">
                                <div className="title-box">
                                    <h3>Premium Package</h3>
                                </div>
                                <div className="img-box">
                                    <div className="inner">
                                        <img src="assets/images/resources/packages-v1-3.jpg" alt="Image"/>
                                        <div className="overlay-rating-box">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon icon--1">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon icon--1">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon icon--1">
                                                        <i className="icon-star"></i>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="value-box">
                                        <h2><sup>$</sup>129<sub>/ Course</sub></h2>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="text">
                                                <p>20 x 1 Hour Driving Lesson</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text">
                                                <p>Valid for 12 month</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="text">
                                                <p>Free pick up and drop off</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/courses-2">
                                            <span className="txt">
                                                Get Started
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="text-box text-center">
                                        <h6>Terms & Conditions</h6>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="swiper-dots-style-one"></div>
                    </Swiper>
                    <div className="section-btn">
                        <div className="section-btn-inner">
                            <div className="section-btn-inner-bg"
                                style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
                            <div className="images-links-box">
                                <ul className="clearfix">
                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/packages-v1-4.jpg" alt="Image"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box">
                                            <img src="assets/images/resources/packages-v1-5.jpg" alt="Image"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="btn-box">
                                            <Link href="#"><i className="icon-plus-sign"></i></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p>
                                2k+ Successful Learners.
                                <Link href="/courses-2"><i className="icon-next"></i>Consutation</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
