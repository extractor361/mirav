'use client'
import React from 'react'
import Link from "next/link"

export default function Courses() {
    return (
        <> 

            <section className="courses-style3">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4">
                            <div className="courses-style3__title-box">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>Courses</h4>
                                    </div>
                                    <h2>Explore<br/> Our Driving<br/> Classes</h2>
                                </div>
                                <div className="text">
                                    <p>Business it will frequently occur that pleasures
                                        have to be repudiated.</p>
                                </div>

                                <div className="video-gallery-style1">
                                    <div className="video-gallery-style1__img">
                                        <img src="assets/images/resources/courses-v3-1.jpg" alt="Video"/>
                                        <Link className="video-popup" title="Video Gallery"
                                            href="https://www.youtube.com/shorts/xCB6ohsbF0I">
                                            <span className="icon-play-button"></span>
                                        </Link>
                                    </div>
                                    <div className="video-gallery-style1__content">
                                        <div className="title">
                                            <h4>Instructional Video</h4>
                                            <p>20+ videos for you to preview.</p>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="https://www.youtube.com/shorts/xCB6ohsbF0I"><i
                                                    className="icon-next"></i>More Videos</Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="courses-style3__content">
                                
                                <div className="single-courses-style3">
                                    <div className="courses-style1__img clearfix">
                                        <img src="assets/images/resources/courses-v1-1.jpg" alt="Image"/>
                                        <div className="courses-style1__img-overlay-title">
                                            <h3><Link href="/courses-details">Beginner Driver Course</Link></h3>
                                        </div>
                                        <div className="price-box">
                                            <h3><sup>$</sup>54<sub>/ Course</sub></h3>
                                        </div>
                                    </div>
                                    <div className="courses-style1-img-outer">
                                        <div className="courses-style1-img-outer__left">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-notepad"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><span>04 Hours</span><br/> Theory Class</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-steering-wheel"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><span>10 Hours</span><br/> Practical Class</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="courses-style1-img-outer__right">
                                            <div className="btn-box">
                                                <Link href="/contact"><i className="icon-next"></i></Link>
                                                <h6>Book Your <br/>Course</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="single-courses-style3">
                                    <div className="courses-style1__img clearfix">
                                        <img src="assets/images/resources/courses-v1-2.jpg" alt="Image"/>
                                        <div className="courses-style1__img-overlay-title">
                                            <h3><Link href="/courses-details">Defensive Drive Course</Link></h3>
                                        </div>
                                        <div className="price-box">
                                            <h3><sup>$</sup>99<sub>/ Course</sub></h3>
                                        </div>
                                    </div>
                                    <div className="courses-style1-img-outer">
                                        <div className="courses-style1-img-outer__left">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-notepad"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><span>10 Hours</span><br/> Theory Class</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-steering-wheel"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><span>15 Hours</span><br/> Practical Class</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="courses-style1-img-outer__right">
                                            <div className="btn-box">
                                                <Link href="contact.html"><i className="icon-next"></i></Link>
                                                <h6>Book Your <br/>Course</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className="single-courses-style3">
                                    <div className="courses-style1__img clearfix">
                                        <img src="assets/images/resources/courses-v1-3.jpg" alt="Image"/>
                                        <div className="courses-style1__img-overlay-title">
                                            <h3><Link href="/courses-details">Road Test Preparation</Link></h3>
                                        </div>
                                        <div className="price-box">
                                            <h3><sup>$</sup>129<sub>/ Course</sub></h3>
                                        </div>
                                    </div>
                                    <div className="courses-style1-img-outer">
                                        <div className="courses-style1-img-outer__left">
                                            <ul className="clearfix">
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-notepad"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><span>10 Hours</span><br/> Theory Class</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="icon-steering-wheel"></i>
                                                    </div>
                                                    <div className="text">
                                                        <p><span>20 Hours</span><br/> Practical Class</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="courses-style1-img-outer__right">
                                            <div className="btn-box">
                                                <Link href="contact.html"><i className="icon-next"></i></Link>
                                                <h6>Book Your <br/>Course</h6>
                                            </div>
                                        </div>
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
