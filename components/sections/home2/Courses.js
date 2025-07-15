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

export default function Courses() {
    return (
        <> 

            <section className="courses-style2">
                <div className="container">
                    <div className="sec-title">
                        <div className="sub-title">
                            <h4>Courses</h4>
                        </div>
                        <h2>Our Course Offering</h2>
                    </div>
                    <div className="inner-container">
                        <div className="row">
                            <div className="col-xl-12">
                                <Swiper {...swiperOptions} className="swiper-container courses-style2-carousel">
                                    <SwiperSlide>
                                        <div className="single-courses-style2">
                                            <div className="single-courses-style2__img">
                                                <img src="assets/images/resources/courses-v2-1.jpg" alt="Awesome Image"/>
                                                <div className="single-courses-style2__overlay">
                                                    <div className="title">
                                                        <h3><Link href="/courses-details">Beginner Course</Link></h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The claims of duty or the obligations business it will frequently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-courses-style2__content">
                                                <div className="single-courses-style2__content-price">
                                                    <div className="left">
                                                        <h4>$54 <span>/ Course</span></h4>
                                                    </div>
                                                    <div className="right">
                                                        <div className="btn-box">
                                                            <Link href="/courses-details"><i className="icon-next"></i>Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="single-courses-style2__content-classes clearfix">
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>04 Hours</span> Theory Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>10 Hours</span> Practical Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-courses-style2">
                                            <div className="single-courses-style2__img">
                                                <img src="assets/images/resources/courses-v2-2.jpg" alt="Awesome Image"/>
                                                <div className="single-courses-style2__overlay">
                                                    <div className="title">
                                                        <h3><Link href="/courses-details">Defensive Course</Link></h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The claims of duty or the obligations business it will frequently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-courses-style2__content">
                                                <div className="single-courses-style2__content-price">
                                                    <div className="left">
                                                        <h4>$99 <span>/ Course</span></h4>
                                                    </div>
                                                    <div className="right">
                                                        <div className="btn-box">
                                                            <Link href="/courses-details"><i className="icon-next"></i>Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="single-courses-style2__content-classes clearfix">
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>10 Hours</span> Theory Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>15 Hours</span> Practical Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-courses-style2">
                                            <div className="single-courses-style2__img">
                                                <img src="assets/images/resources/courses-v2-3.jpg" alt="Awesome Image"/>
                                                <div className="single-courses-style2__overlay">
                                                    <div className="title">
                                                        <h3><Link href="/courses-details">Road Test Preparation</Link></h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The claims of duty or the obligations business it will frequently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-courses-style2__content">
                                                <div className="single-courses-style2__content-price">
                                                    <div className="left">
                                                        <h4>$129 <span>/ Course</span></h4>
                                                    </div>
                                                    <div className="right">
                                                        <div className="btn-box">
                                                            <Link href="/courses-details"><i className="icon-next"></i>Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="single-courses-style2__content-classes clearfix">
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>10 Hours</span> Theory Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>20 Hours</span> Practical Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-courses-style2">
                                            <div className="single-courses-style2__img">
                                                <img src="assets/images/resources/courses-v2-1.jpg" alt="Awesome Image"/>
                                                <div className="single-courses-style2__overlay">
                                                    <div className="title">
                                                        <h3><Link href="/courses-details">Beginner Course</Link></h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The claims of duty or the obligations business it will frequently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-courses-style2__content">
                                                <div className="single-courses-style2__content-price">
                                                    <div className="left">
                                                        <h4>$54 <span>/ Course</span></h4>
                                                    </div>
                                                    <div className="right">
                                                        <div className="btn-box">
                                                            <Link href="/courses-details"><i className="icon-next"></i>Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="single-courses-style2__content-classes clearfix">
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>04 Hours</span> Theory Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>10 Hours</span> Practical Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-courses-style2">
                                            <div className="single-courses-style2__img">
                                                <img src="assets/images/resources/courses-v2-2.jpg" alt="Awesome Image"/>
                                                <div className="single-courses-style2__overlay">
                                                    <div className="title">
                                                        <h3><Link href="/courses-details">Defensive Course</Link></h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The claims of duty or the obligations business it will frequently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-courses-style2__content">
                                                <div className="single-courses-style2__content-price">
                                                    <div className="left">
                                                        <h4>$99 <span>/ Course</span></h4>
                                                    </div>
                                                    <div className="right">
                                                        <div className="btn-box">
                                                            <Link href="/courses-details"><i className="icon-next"></i>Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="single-courses-style2__content-classes clearfix">
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>10 Hours</span> Theory Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>15 Hours</span> Practical Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="single-courses-style2">
                                            <div className="single-courses-style2__img">
                                                <img src="assets/images/resources/courses-v2-3.jpg" alt="Awesome Image"/>
                                                <div className="single-courses-style2__overlay">
                                                    <div className="title">
                                                        <h3><Link href="/courses-details">Road Test Preparation</Link></h3>
                                                    </div>
                                                    <div className="text">
                                                        <p>The claims of duty or the obligations business it will frequently.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-courses-style2__content">
                                                <div className="single-courses-style2__content-price">
                                                    <div className="left">
                                                        <h4>$129 <span>/ Course</span></h4>
                                                    </div>
                                                    <div className="right">
                                                        <div className="btn-box">
                                                            <Link href="/courses-details"><i className="icon-next"></i>Explore</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="single-courses-style2__content-classes clearfix">
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-notepad"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>10 Hours</span> Theory Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="single-courses-style2__content-classes-inner">
                                                            <div className="icon">
                                                                <i className="icon-steering-wheel"></i>
                                                            </div>
                                                            <div className="text">
                                                                <p><span>20 Hours</span> Practical Class</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                <div className="swiper-nav-style-one">
                                    <button className="swiper-button-prev">
                                        <span className="left icon-prev1"></span>
                                    </button>
                                    <button className="swiper-button-next">
                                        <span className="icon-next"></span>
                                    </button>
                                </div>

                                <div className="section-btn">
                                    <div className="section-btn-inner">
                                        <div className="section-btn-inner-bg"
                                            style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
                                        <p>
                                            Expand Your Skills, Explore More Courses.
                                            <Link href="courses-3.html"><i className="icon-next"></i>More Courses</Link>
                                        </p>
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
