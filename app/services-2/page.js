'use client'
import React from 'react'
import Link from "next/link"
import "app/favicon.ico"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home2/Testmonial'
export default function Service_Page_Two() {

    return (
        <div className="page-wrapper boxed_wrapper course-details-page">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Future Services">
                <section className="overview-style2 overview-style2--style3">
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

                <section className="service-style3 service-style3--style2">
                    <div className="service-style3__bg" data-jarallax data-speed="0.1" data-imgPosition="0% 0%"
                        style={{ backgroundImage: "url(assets/images/backgrounds/service-page2__bg1.jpg)" }}></div>
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style3 single-service-style3--style2">
                                    <div className="top-box">
                                        <div className="icon">
                                            <span className="icon-driving"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span>
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
                                            <h3><Link href="/services-details">Driving Courses</Link></h3>
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
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style3 single-service-style3--style2">
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
                                            <h3><Link href="/services-details">Driving Licence</Link></h3>
                                        </div>
                                        <div className="text">
                                            <p>How to pursue pleasures rationally all encounter consequences...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style3 single-service-style3--style2">
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
                                            <h3><Link href="/services-details">Vehicle Insurance</Link></h3>
                                        </div>
                                        <div className="text">
                                            <p>Right to find out fault with a man who chooses to enjoy that...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style3 single-service-style3--style2">
                                    <div className="top-box">
                                        <div className="icon">
                                            <span className="icon-seat-belt"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span className="path4"></span>
                                            </span>
                                        </div>
                                        <div className="shape">
                                            <span className="icon-double-chevron"></span>
                                            <span className="icon-double-chevron"></span>
                                        </div>
                                        <div className="count">
                                            <h2>04.</h2>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <div className="title">
                                            <h3><Link href="/services-details">Road Safty Guide</Link></h3>
                                        </div>
                                        <div className="text">
                                            <p>Right to find out fault with a man who chooses to enjoy that...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style3 single-service-style3--style2">
                                    <div className="top-box">
                                        <div className="icon">
                                            <span className="icon-driver"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </div>
                                        <div className="shape">
                                            <span className="icon-double-chevron"></span>
                                            <span className="icon-double-chevron"></span>
                                        </div>
                                        <div className="count">
                                            <h2>05.</h2>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <div className="title">
                                            <h3><Link href="/services-details">Instructor Training</Link></h3>
                                        </div>
                                        <div className="text">
                                            <p>Obligations of business it will occur that pleasures have to frequently...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="single-service-style3 single-service-style3--style2">
                                    <div className="top-box">
                                        <div className="icon">
                                            <span className="icon-online-course"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span>
                                            </span>
                                        </div>
                                        <div className="shape">
                                            <span className="icon-double-chevron"></span>
                                            <span className="icon-double-chevron"></span>
                                        </div>
                                        <div className="count">
                                            <h2>06.</h2>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <div className="title">
                                            <h3><Link href="/services-details">Online Training</Link></h3>
                                        </div>
                                        <div className="text">
                                            <p>How to pursue pleasures rationally all encounter consequences...</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/services-details"><i className="icon-next"></i>Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <Testimonial/>
            </Layout>
        </div>
    )
}