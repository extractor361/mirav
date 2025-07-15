'use client'
import React from 'react'
import Link from "next/link"
import CircleText from "../../../components/elements/CircleText"

export default function Footer4() {
    return (
        <>
        
        <footer className="footer-style4">

            <div className="footer-style4__round-box">
                <div className="footer-style4__curved-circle">
                    <CircleText text="Drive Your Schedule, Make Your Appointment Today." radius={92} />
                </div>
                <div className="icon-box">
                    <span className="icon-schedule"><span className="path1"></span><span className="path2"></span><span
                            className="path3"></span><span className="path4"></span><span className="path5"></span><span
                            className="path6"></span>
                    </span>
                </div>
                <div className="btn-box">
                    <Link href="/contact">Enroll Now<i className="icon-next"></i></Link>
                </div>
            </div>
            
            <div className="footer-main-style4">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-xl-3 col-lg-6 col-md-6 single-widget">
                            <div className="single-footer-widget-style4 marbtm">
                                <div className="title">
                                    <h3>Essentials</h3>
                                </div>
                                <div className="footer-widget-links-style4">
                                    <ul className="clearfix">
                                        <li>
                                            <Link href="/about">
                                                About Company
                                                <div className="icon">
                                                    <i className="icon-next"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                Instructors
                                                <div className="icon">
                                                    <i className="icon-next"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/gallery-3">
                                                Gallery
                                                <div className="icon">
                                                    <i className="icon-next"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details">
                                                Why Choose Us
                                                <div className="icon">
                                                    <i className="icon-next"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                Locate Us
                                                <div className="icon">
                                                    <i className="icon-next"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/testimonials">
                                                Testimonials
                                                <div className="icon">
                                                    <i className="icon-next"></i>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                Recognations
                                                <div className="icon">
                                                    <i className="icon-next"></i>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 col-md-6 single-widget">
                            <div className="single-footer-widget-style4 marbtm">
                                <div className="footer-widget-rating text-center">
                                    <div className="footer-widget-rating__left-shape">
                                        <ul>
                                            <li>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </li>
                                            <li>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </li>
                                            <li>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="footer-widget-rating__right-shape">
                                        <ul>
                                            <li>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </li>
                                            <li>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </li>
                                            <li>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                                <span className="icon-double-chevron"></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-logo-style4">
                                        <Link href="/index-4">
                                            <img src="assets/images/logo/footer-v4-logo1.png" alt="logo"/>
                                        </Link>
                                    </div>
                                    <div className="rating-box">
                                        <ul className="clearfix">
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
                                            <li>
                                                <div className="icon">
                                                    <i className="icon-star"></i>
                                                </div>
                                            </li>
                                        </ul>
                                        <h4>Best Rated</h4>
                                        <p>2.8k Reviews From Trustpilot.</p>
                                        <h3>4.9/5</h3>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/testimonials"><i className="icon-next"></i>Learners Reviews</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-lg-12 col-md-12 single-widget">
                            <div className="single-footer-widget-style4 marbtm">
                                <div className="title">
                                    <h3>Instagram</h3>
                                </div>
                                <div className="footer-widget-gallery">
                                    <ul className="clearfix">

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img1.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img2.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img3.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img4.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box2">
                                                <img src="assets/images/footer/footer-v4-img5.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-instagram-logo"></i>Follow</Link>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img6.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img7.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img8.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="img-box">
                                                <img src="assets/images/footer/footer-v4-img9.jpg" alt="Awesome Image"/>
                                                <div className="overlay-icon">
                                                    <Link href="#"><i className="icon-next"></i></Link>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className="footer-bottom-style4">
                <div className="container">
                    <div className="bottom-inner">
                        <div className="copyright-text-style4">
                            <p>
                                © {new Date().getFullYear()} <Link href="/index-4">Drive Master</Link> #1Driving Institute, All <br/>Rights
                                Reserved.
                            </p>
                        </div>
                        <ul className="footer-payment-options clearfix">
                            <li>
                                <Link href="#"><i className="icon-symbols"></i></Link>
                            </li>
                            <li>
                                <Link href="#"><i className="icon-tool"></i></Link>
                            </li>
                            <li>
                                <Link href="#"><i className="icon-money"></i></Link>
                            </li>
                            <li>
                                <Link href="#"><i className="icon-symbol"></i></Link>
                            </li>
                            <li>
                                <Link href="#"><i className="icon-symbols-1"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
