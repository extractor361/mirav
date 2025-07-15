'use client'
import React from 'react'
import Link from "next/link"

export default function Footer2() {
    return (
        <>
        
            <footer className="footer-style2">
                <div className="footer-style2__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="footer-style2__top-left">
                                    <div className="logo-box">
                                        <Link href="index-2.html">
                                            <img src="assets/images/logo/footer-v2-logo1.png" alt="logo"/>
                                        </Link>
                                    </div>
                                    <div className="phone-box">
                                        <div className="icon">
                                            <i className="icon-dial-pad"></i>
                                        </div>
                                        <div className="text">
                                            <p>Start ateteaaet</p>
                                            <h6><Link href="tel:66120003456">+66 12 000 3456</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="footer-style2__top-right">
                                    <div className="ticket-box clearfix">
                                        <div className="boll-box1"></div>
                                        <div className="boll-box2"></div>
                                        <div className="percentage">
                                            <h3>5%</h3>
                                            <h6>Discount</h6>
                                        </div>
                                        <div className="offers">
                                            <h6>Offers</h6>
                                        </div>
                                    </div>
                                    <div className="title-box">
                                        <h3>Special Discounts for New <br/>Drivers.</h3>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="/courses-2"><i className="icon-next"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-main-style2">
                    <div className="container">
                        <div className="footer-main-style2__inner">
                            <div className="row">

                                <div className="col-xl-3 col-lg-6 col-md-6 single-widget-two">
                                    <div className="single-footer-widget-style2">
                                        <div className="title">
                                            <h3>Company</h3>
                                        </div>
                                        <div className="footer-widget-links-style2">
                                            <ul>
                                                <li>
                                                    <Link href="/about">
                                                        About Company
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team">
                                                        Instructors
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/gallery-3">
                                                        Gallery
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services-details">
                                                        Why Choose Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
                                                        Locate Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/testimonials">
                                                        Testimonials
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">
                                                        Recognations
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-3 col-lg-6 col-md-6 single-widget-two">
                                    <div className="single-footer-widget-style2">
                                        <div className="title">
                                            <h3>Services</h3>
                                        </div>
                                        <div className="footer-widget-links-style2">
                                            <ul>
                                                <li>
                                                    <Link href="/courses-1">
                                                        Driving Courses
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/courses-3">
                                                        Driving Licence
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/courses-2">
                                                        Insurance
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/courses-details">
                                                        Safety Guide
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/team">
                                                        Instructor Training
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
                                                        Send Enquiry
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-3 col-lg-6 col-md-6 single-widget-two">
                                    <div className="single-footer-widget-style2">
                                        <div className="title">
                                            <h3>Contact Info</h3>
                                        </div>
                                        <div className="footer-widget-contact-info">
                                            <div className="phone-email-box">
                                                <p><Link href="tel:6612000456">+66 12 000 456</Link></p>
                                                <p><Link href="mailto:support@drivemaster.com">support@drivemaster.com</Link></p>
                                                <div className="btn-box">
                                                    <Link href="/contact"><i className="icon-next"></i>Get a Quote</Link>
                                                </div>
                                            </div>
                                            <div className="office-time">
                                                <ul className="clearfix">
                                                    <li>
                                                        <div className="day">
                                                            <p>Mon - Sat</p>
                                                        </div>
                                                        <div className="time">
                                                            <p>7.00am - 18.00pm</p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="day">
                                                            <p>Sun</p>
                                                        </div>
                                                        <div className="time">
                                                            <p>7.00am - 15.00pm</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-3 col-lg-6 col-md-6 single-widget-two">
                                    <div className="single-footer-widget-style2">
                                        <div className="title">
                                            <h3>Popular Post</h3>
                                        </div>
                                        <div className="footer-widget-blog-post">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="category">
                                                        <h6>Driving Tips</h6>
                                                    </div>
                                                    <div className="meta-box">
                                                        <ul className="meta-info clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-user"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>D.Ebenezer</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-stopwatch"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>3 Mins Read</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="title">
                                                        <h3>
                                                            <Link href="/blog-single">
                                                                Top 10 Tips for Passing Your Road Test.
                                                            </Link>
                                                        </h3>
                                                    </div>
                                                </li>

                                                <li>
                                                    <div className="category">
                                                        <h6>Safety Tips</h6>
                                                    </div>
                                                    <div className="meta-box">
                                                        <ul className="meta-info clearfix">
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-user"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>K.Milton</p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="icon">
                                                                    <i className="icon-stopwatch"></i>
                                                                </div>
                                                                <div className="text">
                                                                    <p>2 Mins Read</p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="title">
                                                        <h3>
                                                            <Link href="/blog-single">
                                                                Navigating Roundabouts: A Beginner's Guide.
                                                            </Link>
                                                        </h3>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom-style2">
                    <div className="container">
                        <div className="bottom-inner">
                            <div className="title">
                                <h4>Convenient Payment</h4>
                            </div>
                            <div className="logo">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <img src="assets/images/logo/payment-logo-1.png" alt="logo"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <img src="assets/images/logo/payment-logo-2.png" alt="logo"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <img src="assets/images/logo/payment-logo-3.png" alt="logo"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <img src="assets/images/logo/payment-logo-4.png" alt="logo"/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <img src="assets/images/logo/payment-logo-5.png" alt="logo"/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyright-text">
                                <p>
                                    Copyrights © {new Date().getFullYear()} <Link href="/index-2">Drive Master,</Link> #1Driving Institute, All
                                    Rights Reserved.
                                </p>
                            </div>
                            <div className="footer-social-links-style2">
                                <ul className="clearfix">
                                    <li>
                                        <Link href="https://www.facebook.com/">
                                            <span className="icon-facebook"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://x.com/i/flow/login">
                                            <i className="icon-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                            <span className="icon-instagram-logo"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.youtube.com/">
                                            <span className="icon-youtube"></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>

        </>
    )
}
