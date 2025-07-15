'use client'
import React from 'react'
import Link from "next/link"

export default function Service() {
    return (
        <> 

            <section className="service-style4">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Services</h4>
                        </div>
                        <h2>Our Service Offerings</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="row">
                                
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-service-style4">
                                        <div className="img-box">
                                            <img src="assets/images/services/service-v4-1.jpg" alt="Awesome Image"/>
                                            <div className="overlay-icon">
                                                <span className="icon-driving"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span>
                                                </span>
                                            </div>
                                            <div className="overlay-text">
                                                <p>
                                                    Obligations of business it will occur that pleasures have to
                                                    frequently occur ...
                                                </p>
                                            </div>
                                            <div className="overlay-btn">
                                                <a className="btn-one" href="/services-details">
                                                    <span className="txt">
                                                        Read More
                                                    </span>
                                                </a>
                                                <div className="shape1">
                                                    <img src="assets/images/shapes/service-v3-shape1.png" alt="Shape"/>
                                                </div>
                                                <div className="shape2">
                                                    <img src="assets/images/shapes/service-v3-shape2.png" alt="Shape"/>
                                                </div>
                                            </div>
                                            <div className="count-box">
                                                <h2>01</h2>
                                            </div>
                                        </div>
                                        <div className="single-service-style4-title">
                                            <h3><Link href="/services-3">Driving Courses</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-service-style4">
                                        <div className="img-box">
                                            <img src="assets/images/services/service-v4-2.jpg" alt="Awesome Image"/>
                                            <div className="overlay-icon">
                                                <span className="icon-driving-license"><span className="path1"></span><span
                                                        className="path2"></span><span className="path3"></span><span
                                                        className="path4"></span><span className="path5"></span><span
                                                        className="path6"></span><span className="path7"></span><span
                                                        className="path8"></span><span className="path9"></span><span
                                                        className="path10"></span><span className="path11"></span><span
                                                        className="path12"></span>
                                                </span>
                                            </div>
                                            <div className="overlay-text">
                                                <p>
                                                    Obligations of business it will occur that pleasures have to
                                                    frequently occur ...
                                                </p>
                                            </div>
                                            <div className="overlay-btn">
                                                <a className="btn-one" href="/services-details">
                                                    <span className="txt">
                                                        Read More
                                                    </span>
                                                </a>
                                                <div className="shape1">
                                                    <img src="assets/images/shapes/service-v3-shape1.png" alt="Shape"/>
                                                </div>
                                                <div className="shape2">
                                                    <img src="assets/images/shapes/service-v3-shape2.png" alt="Shape"/>
                                                </div>
                                            </div>
                                            <div className="count-box">
                                                <h2>02</h2>
                                            </div>
                                        </div>
                                        <div className="single-service-style4-title">
                                            <h3><Link href="/services-3">Driving Licence</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="single-service-style4">
                                        <div className="img-box">
                                            <img src="assets/images/services/service-v4-3.jpg" alt="Awesome Image"/>
                                            <div className="overlay-icon">
                                                <span className="icon-shield"><span className="path1"></span><span
                                                        className="path2"></span></span>
                                            </div>
                                            <div className="overlay-text">
                                                <p>
                                                    Obligations of business it will occur that pleasures have to
                                                    frequently occur ...
                                                </p>
                                            </div>
                                            <div className="overlay-btn">
                                                <Link className="btn-one" href="/services-details">
                                                    <span className="txt">
                                                        Read More
                                                    </span>
                                                </Link>
                                                <div className="shape1">
                                                    <img src="assets/images/shapes/service-v3-shape1.png" alt="Shape"/>
                                                </div>
                                                <div className="shape2">
                                                    <img src="assets/images/shapes/service-v3-shape2.png" alt="Shape"/>
                                                </div>
                                            </div>
                                            <div className="count-box">
                                                <h2>03</h2>
                                            </div>
                                        </div>
                                        <div className="single-service-style4-title">
                                            <h3><Link href="/services-3">Vehicle Insurance</Link></h3>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6">
                            <div className="service-style4-banner">
                                <div className="shape1">
                                    <img src="assets/images/shapes/service-v4-shape1.png" alt="Shape"/>
                                </div>
                                <div className="shape2">
                                    <img src="assets/images/shapes/service-v4-shape2.png" alt="Shape"/>
                                </div>
                                <div className="title-box">
                                    <h3><span>Exclusive for</span> Gender</h3>
                                    <ul className="icon clearfix">
                                        <li>
                                            <img src="assets/images/resources/service-v4-man1.png" alt="icon"/>
                                        </li>
                                        <li>
                                            <img src="assets/images/resources/service-v4-man2.png" alt="icon"/>
                                        </li>
                                    </ul>
                                    <h3>Specific <span>Trainers.</span></h3>
                                </div>
                                <div className="text-box">
                                    <p>30+ experts to train you.</p>
                                </div>
                                <div className="btn-box">
                                    <a className="btn-one" href="team.html">
                                        <span className="txt">Meet Trainers</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
