'use client'
import React from 'react'
import Link from "next/link"

export default function Training() {
    return (
        <> 

            <section className="training-car-style1">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Training Cars</h4>
                        </div>
                        <h2>Cars We Offer for Training</h2>
                    </div>
                    <div className="row">
                        
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-training-car-style1">
                                <div className="img-box">
                                    <img src="assets/images/resources/training-car-v1-1.jpg" alt="Image"/>
                                    <div className="car-type">
                                        <h6>Manual</h6>
                                    </div>
                                </div>
                                <div className="title-box">
                                    <h3><Link href="/courses-details">Mini Cooper</Link></h3>
                                    <div className="btn-box">
                                        <Link href="/courses-details">
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-training-car-style1">
                                <div className="img-box">
                                    <img src="assets/images/resources/training-car-v1-2.jpg" alt="Image"/>
                                    <div className="car-type">
                                        <h6>Automatic</h6>
                                    </div>
                                </div>
                                <div className="title-box">
                                    <h3><Link href="/courses-details">Toyota Corolla</Link></h3>
                                    <div className="btn-box">
                                        <Link href="/courses-details">
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="single-training-car-style1">
                                <div className="img-box">
                                    <img src="assets/images/resources/training-car-v1-3.jpg" alt="Image"/>
                                    <div className="car-type">
                                        <h6>Manual</h6>
                                    </div>
                                </div>
                                <div className="title-box">
                                    <h3><Link href="/courses-details">Honda Redgeline</Link></h3>
                                    <div className="btn-box">
                                        <Link href="/courses-details">
                                            <i className="icon-next"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="section-btn">
                        <div className="section-btn-inner">
                            <div className="section-btn-inner-bg"
                                style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
                            <p>
                                Training Cars Tailored for Your Success.
                                <Link href="/courses-details"><i className="icon-next"></i>View All Cars</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
