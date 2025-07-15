'use client'
import React from 'react'
import Link from "next/link"
import CounterUp from "@/components/elements/CounterUp"

export default function Video() {
    return (
        <> 

            <section className="video-library-style1">
                <div className="video-library-style1__bg"
                    style={{ backgroundImage: "url(assets/images/backgrounds/video-library-v1-1.jpg)" }}></div>
                <div className="container">
                    <div className="row">

                        <div className="col-xl-4">
                            <div className="video-library-style1__title">
                                <div className="sec-title">
                                    <div className="sub-title">
                                        <h4>Video Library</h4>
                                    </div>
                                    <h2>Skill Building Videos From Experts</h2>
                                </div>
                                <div className="text">
                                    <p>Beguiled and demoralized by the charms of<br/> pleasure of the moment.</p>
                                </div>
                                <div className="fact-box">
                                    <div className="counting">
                                        <h2 className="odometer"><CounterUp end={40} /></h2>
                                        <i className="icon-plus-sign"></i>
                                    </div>
                                    <div className="title-box">
                                        <h3>Lessons to Help You<br/> Learn Driving.</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="video-library-style1__content">
                                <div className="vertical-slider-style1">
                                    <div className="row">
                                        <div className="col-xl-3 col-lg-4 col-md-4">
                                            <div className="vertical-slider-style1__thumb-outer">
                                                <div className="vertical-slider-style1__thumb">
                                                    
                                                    <div className="slider-slide">
                                                        <div className="vertical-slider-style1__thumb-single">
                                                            <img src="assets/images/resources/video-library-style1__thumb1.jpg"
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="slider-slide">
                                                        <div className="vertical-slider-style1__thumb-single">
                                                            <img src="assets/images/resources/video-library-style1__thumb2.jpg"
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="slider-slide">
                                                        <div className="vertical-slider-style1__thumb-single">
                                                            <img src="assets/images/resources/video-library-style1__thumb1.jpg"
                                                                alt=""/>
                                                        </div>
                                                    </div>

                                                    <div className="slider-slide">
                                                        <div className="vertical-slider-style1__thumb-single">
                                                            <img src="assets/images/resources/video-library-style1__thumb2.jpg"
                                                                alt=""/>
                                                        </div>
                                                    </div>

                                                    <div className="slider-slide">
                                                        <div className="vertical-slider-style1__thumb-single">
                                                            <img src="assets/images/resources/video-library-style1__thumb1.jpg"
                                                                alt=""/>
                                                        </div>
                                                    </div>

                                                    <div className="slider-slide">
                                                        <div className="vertical-slider-style1__thumb-single">
                                                            <img src="assets/images/resources/video-library-style1__thumb2.jpg"
                                                                alt=""/>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-9 col-lg-8 col-md-8">
                                            <div className="vertical-slider-style1__content">
                                                
                                                <div className="slider-slide">
                                                    <div className="video-library-style1__single">
                                                        <div className="img-box">
                                                            <img src="assets/images/resources/video-library-style1__img1.jpg"
                                                                alt=""/>
                                                            <div className="overlay-video-box">
                                                                <Link className="video-popup" title="Video Gallery"
                                                                    href="https://www.youtube.com/watch?v=oV74Najm6Nc">
                                                                    <span className="icon-play-button"></span>
                                                                </Link>
                                                            </div>
                                                            <div className="overlay-shear-box">
                                                                <Link href="#"><i className="icon-share"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="title-box">
                                                            <h3><Link href="#">Essential Driving Skills for Beginners</Link></h3>
                                                            <div className="time-box">
                                                                <p>04.36 Mins</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="slider-slide">
                                                    <div className="video-library-style1__single">
                                                        <div className="img-box">
                                                            <img src="assets/images/resources/video-library-style1__img2.jpg"
                                                                alt=""/>
                                                            <div className="overlay-video-box">
                                                                <Link className="video-popup" title="Video Gallery"
                                                                    href="https://www.youtube.com/watch?v=oV74Najm6Nc">
                                                                    <span className="icon-play-button"></span>
                                                                </Link>
                                                            </div>
                                                            <div className="overlay-shear-box">
                                                                <Link href="#"><i className="icon-share"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="title-box">
                                                            <h3><Link href="#">Essential Driving Skills for Beginners</Link></h3>
                                                            <div className="date-box">
                                                                <p>04.36 Mins</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="slider-slide">
                                                    <div className="video-library-style1__single">
                                                        <div className="img-box">
                                                            <img src="assets/images/resources/video-library-style1__img1.jpg"
                                                                alt=""/>
                                                            <div className="overlay-video-box">
                                                                <Link className="video-popup" title="Video Gallery"
                                                                    href="https://www.youtube.com/watch?v=oV74Najm6Nc">
                                                                    <span className="icon-play-button"></span>
                                                                </Link>
                                                            </div>
                                                            <div className="overlay-shear-box">
                                                                <Link href="#"><i className="icon-share"></i></Link>
                                                            </div>
                                                        </div>
                                                        <div className="title-box">
                                                            <h3><Link href="#">Essential Driving Skills for Beginners</Link></h3>
                                                            <div className="date-box">
                                                                <p>04.36 Mins</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
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
