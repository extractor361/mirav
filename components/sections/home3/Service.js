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

export default function Service() {
    return (
        <> 

            <section className="service-style3">
                <div className="service-style3__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/service-style3--bg.jpg)" }}></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="service-style3__content">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>Services</h4>
                                    </div>
                                    <h2>Explore Our Service Offerings</h2>
                                </div>
                                <div className="text">
                                    <p>Beguiled and demoralized by the charms of pleasure of the moment.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="service-style3__inner">
                                <Swiper {...swiperOptions} className="swiper-container service-style3-carousel">
                                    <SwiperSlide>
                                        <div className="single-service-style3">
                                            <div className="top-box">
                                                <div className="icon">
                                                    <span className="icon-driving"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span>
                                                    </span>
                                                </div>
                                                <div className="shape">
                                                    <span className="icon-double-chevron"></span>
                                                    <span className="icon-double-chevron"></span>
                                                </div>
                                                <div className="count">
                                                    <h2>01.</h2>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="title">
                                                    <h3><Link href="/services-2">Driving Courses</Link></h3>
                                                </div>
                                                <div className="text">
                                                    <p>Obligations of business it will occur that pleasures have to
                                                        frequently...</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-service-style3">
                                            <div className="top-box">
                                                <div className="icon">
                                                    <span className="icon-driving-license"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span><span
                                                            className="path10"></span><span className="path11"></span><span
                                                            className="path12"></span>
                                                    </span>
                                                </div>
                                                <div className="shape">
                                                    <span className="icon-double-chevron"></span>
                                                    <span className="icon-double-chevron"></span>
                                                </div>
                                                <div className="count">
                                                    <h2>02.</h2>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="title">
                                                    <h3><Link href="/services-2">Driving Licence</Link></h3>
                                                </div>
                                                <div className="text">
                                                    <p>How to pursue pleasures rationally all encounter consequences...</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-service-style3">
                                            <div className="top-box">
                                                <div className="icon">
                                                    <span className="icon-shield"><span className="path1"></span><span
                                                            className="path2"></span></span>
                                                </div>
                                                <div className="shape">
                                                    <span className="icon-double-chevron"></span>
                                                    <span className="icon-double-chevron"></span>
                                                </div>
                                                <div className="count">
                                                    <h2>03.</h2>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="title">
                                                    <h3><Link href="/services-2">Vehicle Insurance</Link></h3>
                                                </div>
                                                <div className="text">
                                                    <p>Right to find out fault with a man who chooses to enjoy that...</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-service-style3">
                                            <div className="top-box">
                                                <div className="icon">
                                                    <span className="icon-driving"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span>
                                                    </span>
                                                </div>
                                                <div className="shape">
                                                    <span className="icon-double-chevron"></span>
                                                    <span className="icon-double-chevron"></span>
                                                </div>
                                                <div className="count">
                                                    <h2>01.</h2>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="title">
                                                    <h3><Link href="/services-2">Driving Courses</Link></h3>
                                                </div>
                                                <div className="text">
                                                    <p>Obligations of business it will occur that pleasures have to
                                                        frequently...</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-service-style3">
                                            <div className="top-box">
                                                <div className="icon">
                                                    <span className="icon-driving-license"><span className="path1"></span><span
                                                            className="path2"></span><span className="path3"></span><span
                                                            className="path4"></span><span className="path5"></span><span
                                                            className="path6"></span><span className="path7"></span><span
                                                            className="path8"></span><span className="path9"></span><span
                                                            className="path10"></span><span className="path11"></span><span
                                                            className="path12"></span>
                                                    </span>
                                                </div>
                                                <div className="shape">
                                                    <span className="icon-double-chevron"></span>
                                                    <span className="icon-double-chevron"></span>
                                                </div>
                                                <div className="count">
                                                    <h2>02.</h2>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="title">
                                                    <h3><Link href="/services-2">Driving Licence</Link></h3>
                                                </div>
                                                <div className="text">
                                                    <p>How to pursue pleasures rationally all encounter consequences...</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-service-style3">
                                            <div className="top-box">
                                                <div className="icon">
                                                    <span className="icon-shield"><span className="path1"></span><span
                                                            className="path2"></span></span>
                                                </div>
                                                <div className="shape">
                                                    <span className="icon-double-chevron"></span>
                                                    <span className="icon-double-chevron"></span>
                                                </div>
                                                <div className="count">
                                                    <h2>03.</h2>
                                                </div>
                                            </div>
                                            <div className="content-box">
                                                <div className="title">
                                                    <h3><Link href="/services-2">Vehicle Insurance</Link></h3>
                                                </div>
                                                <div className="text">
                                                    <p>Right to find out fault with a man who chooses to enjoy that...</p>
                                                </div>
                                                <div className="btn-box">
                                                    <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
