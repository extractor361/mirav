'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
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
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
        1350: {
            slidesPerView: 4,
        },
    }
}
export default function Service_Page_One() {

    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Modern Services">
                <section className="overview-style2">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-6 col-lg-6">
                                <div className="overview-style2-content">
                                    <div className="sec-title">
                                        <div className="sub-title">
                                            <h4>Overview</h4>
                                        </div>
                                        <h2>Guide to Our Professional Services</h2>
                                    </div>
                                    <div className="text">
                                        <p>
                                            Every pain avoided but in certain circumstances and owing to the
                                            claims of duty or the obligations of business it will frequently occur
                                            that pleasures have to be repudiated and annoyances accepted
                                            selection he rejects pleasures to secure.
                                        </p>
                                    </div>
                                    <div className="btn-box">
                                        <Link className="btn-one" href="/about">
                                            <span className="txt">
                                                Service Appointment
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-6">
                                <div className="overview-style2-list">
                                    <div className="scrolling-text">
                                        <h2>Services Include</h2>
                                    </div>
                                    <ul className="list-item clearfix">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-done"><span className="path1"></span><span className="path2"></span>
                                                </span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Learning Environment</h3>
                                                <p>Helping each student to becoming a licensed driver.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-done"><span className="path1"></span><span className="path2"></span>
                                                </span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Specialized Courses</h3>
                                                <p>Auto transmission training, eco-driving techniques.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-done"><span className="path1"></span><span className="path2"></span>
                                                </span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Hands-On Training</h3>
                                                <p>Basic maneuvers to advanced driving techniques.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-done"><span className="path1"></span><span className="path2"></span>
                                                </span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Detailed Training Plan</h3>
                                                <p>Basic maneuvers to advanced driving techniques.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="big-title">
                        <h1>Our Services</h1>
                        <Link href="#choose1" className="icon" data-top-bottom="transform: translateY(120px);"
                            data-bottom-top="transform: translateY(-120px);">
                            <i className="icon-down-arrow"></i>
                        </Link>
                    </div>
                </section>
                
                <section className="service-style1 service-style1--style2">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style1 single-service-style1--style2">
                                    <div className="single-service-style1__title">
                                        <h3><Link href="/services-details">Driving Courses</Link></h3>
                                        <h6>Service 01</h6>
                                    </div>
                                    <div className="service-style1__shape1">
                                        <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                    </div>
                                    <div className="single-service-style1__img">
                                        <div className="single-service-style1__inner">
                                            <img src="assets/images/services/service-v1-1.jpg" alt="Awesome Image"/>
                                        </div>
                                        <div className="single-service-style1__icon">
                                            <div className="service-style1__shape2">
                                                <img src="assets/images/shapes/service-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <span className="icon-driving"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span></span>
                                        </div>
                                        <div className="single-service-style1__text">
                                            <p>Obligations of business it will occur that pleasures have to...</p>
                                            <div className="btn-box">
                                                <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style1 single-service-style1--style2">
                                    <div className="single-service-style1__title">
                                        <h3><Link href="/services-details">Driving Licence</Link></h3>
                                        <h6>Service 02</h6>
                                    </div>
                                    <div className="service-style1__shape1">
                                        <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                    </div>
                                    <div className="single-service-style1__img">
                                        <div className="single-service-style1__inner">
                                            <img src="assets/images/services/service-v1-2.jpg" alt="Awesome Image"/>
                                        </div>
                                        <div className="single-service-style1__icon">
                                            <div className="service-style1__shape2">
                                                <img src="assets/images/shapes/service-v1-shape1.png" alt="shape"/>
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
                                            <p>How to pursue pleasures rationally encounter consequences ...</p>
                                            <div className="btn-box">
                                                <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style1 single-service-style1--style2">
                                    <div className="single-service-style1__title">
                                        <h3><Link href="/services-details">Vehicle Insurance</Link></h3>
                                        <h6>Service 03</h6>
                                    </div>
                                    <div className="service-style1__shape1">
                                        <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                    </div>
                                    <div className="single-service-style1__img">
                                        <div className="single-service-style1__inner">
                                            <img src="assets/images/services/service-v1-3.jpg" alt="Awesome Image"/>
                                        </div>
                                        <div className="single-service-style1__icon">
                                            <div className="service-style1__shape2">
                                                <img src="assets/images/shapes/service-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <span className="icon-shield"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </div>
                                        <div className="single-service-style1__text">
                                            <p>Right to find fault with a man who chooses to enjoy that...</p>
                                            <div className="btn-box">
                                                <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style1 single-service-style1--style2">
                                    <div className="single-service-style1__title">
                                        <h3><Link href="/services-details">Road Safty Guide</Link></h3>
                                        <h6>Service 04</h6>
                                    </div>
                                    <div className="service-style1__shape1">
                                        <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                    </div>
                                    <div className="single-service-style1__img">
                                        <div className="single-service-style1__inner">
                                            <img src="assets/images/services/service-v1-4.jpg" alt="Awesome Image"/>
                                        </div>
                                        <div className="single-service-style1__icon">
                                            <div className="service-style1__shape2">
                                                <img src="assets/images/shapes/service-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <span className="icon-seat-belt"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="single-service-style1__text">
                                            <p>Right to find fault with a man who chooses to enjoy that...</p>
                                            <div className="btn-box">
                                                <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style1 single-service-style1--style2">
                                    <div className="single-service-style1__title">
                                        <h3><Link href="/services-details">Instructor Training</Link></h3>
                                        <h6>Service 05</h6>
                                    </div>
                                    <div className="service-style1__shape1">
                                        <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                    </div>
                                    <div className="single-service-style1__img">
                                        <div className="single-service-style1__inner">
                                            <img src="assets/images/services/service-v1-5.jpg" alt="Awesome Image"/>
                                        </div>
                                        <div className="single-service-style1__icon">
                                            <div className="service-style1__shape2">
                                                <img src="assets/images/shapes/service-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <span className="icon-driver"><span className="path1"></span><span className="path2"></span>
                                            </span>
                                        </div>
                                        <div className="single-service-style1__text">
                                            <p>Obligations of business it will occur that pleasures have to...</p>
                                            <div className="btn-box">
                                                <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style1 single-service-style1--style2">
                                    <div className="single-service-style1__title">
                                        <h3><Link href="/services-details">Online Driver Education</Link></h3>
                                        <h6>Service 06</h6>
                                    </div>
                                    <div className="service-style1__shape1">
                                        <img src="assets/images/shapes/service-v1-shape2.png" alt="shape"/>
                                    </div>
                                    <div className="single-service-style1__img">
                                        <div className="single-service-style1__inner">
                                            <img src="assets/images/services/service-v1-6.jpg" alt="Awesome Image"/>
                                        </div>
                                        <div className="single-service-style1__icon">
                                            <div className="service-style1__shape2">
                                                <img src="assets/images/shapes/service-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <span className="icon-online-course"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="single-service-style1__text">
                                            <p>How to pursue pleasures rationally encounter consequences ...</p>
                                            <div className="btn-box">
                                                <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                
                <section id="choose1" class="choose-style3">
                    <div className="container">
                        <div className="sec-title">
                            <div className="sub-title">
                                <h4>Why Choose Us</h4>
                            </div>
                            <h2>Reasons to Choose Us</h2>
                        </div>
                        <div className='inner-container'>
                            <div className="row">

                                <div className="col-xl-12">
                                    <Swiper {...swiperOptions} className="swiper-container choose-style3-carousel">
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Licensed</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Desires obtain pain itself because is pain because occur undertakes.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-license"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span><span
                                                                className="path10"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-license"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span><span className="path7"></span><span
                                                                    className="path8"></span><span className="path9"></span><span
                                                                    className="path10"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Experienced</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Take trivial example, which ever undertakes laborious to some advantages.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-taxi-driver"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-taxi-driver"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Flexible Times</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Moment so blinded desire that cannot foresees the pain and trouble.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-schedule"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-schedule"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Budget Friendly</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Enjoy a pleasure that no annoyingconsequences or one who avoids.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-receipt"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-receipt"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Licensed</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Desires obtain pain itself because is pain because occur undertakes.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-license"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span><span className="path7"></span><span
                                                                className="path8"></span><span className="path9"></span><span
                                                                className="path10"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-license"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span><span className="path7"></span><span
                                                                    className="path8"></span><span className="path9"></span><span
                                                                    className="path10"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Experienced</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Take trivial example, which ever undertakes laborious to some advantages.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-taxi-driver"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-taxi-driver"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Flexible Times</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Moment so blinded desire that cannot foresees the pain and trouble.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-schedule"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-schedule"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-choose-style3">
                                                <div className="single-choose-style3__inner">
                                                    <div className="img-box">
                                                        <div className="img1">
                                                            <img src="assets/images/shapes/choose-v3-3.png" alt="image"/>
                                                        </div>
                                                        <div className="img2">
                                                            <img src="assets/images/shapes/choose-v3-4.png" alt="image"/>
                                                        </div>
                                                    </div>
                                                    <div className="title-box">
                                                        <h3><Link href="/services-details">Budget Friendly</Link></h3>
                                                    </div>
                                                    <div className="text-box">
                                                        <p>Enjoy a pleasure that no annoyingconsequences or one who avoids.</p>
                                                    </div>
                                                    <div className="btn-box">
                                                        <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                                    </div>
                                                    <div className="icon-box">
                                                        <span className="icon-receipt"><span className="path1"></span><span
                                                                className="path2"></span><span className="path3"></span><span
                                                                className="path4"></span><span className="path5"></span><span
                                                                className="path6"></span>
                                                        </span>
                                                        <div className="overlay-icon">
                                                            <span className="icon-receipt"><span className="path1"></span><span
                                                                    className="path2"></span><span className="path3"></span><span
                                                                    className="path4"></span><span className="path5"></span><span
                                                                    className="path6"></span>
                                                            </span>
                                                        </div>
                                                    </div>
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
                </section>
            </Layout>
        </div>
    )
}