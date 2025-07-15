'use client'
import React from 'react'
import Link from "next/link"

export default function Project() {
    return (
        <> 

            <section className="project-style2">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Image Gallery</h4>
                        </div>
                        <h2>Scenes from the Class</h2>
                    </div>
                    <div className="row">
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-project-style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-v2-1.jpg" alt="Image"/>
                                    <div className="single-project-style2__img-overlay-content">
                                        <div className="category">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-1">The Young Man Received his <br/>Driver's
                                                    License.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style2__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v2-1.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-project-style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-v2-2.jpg" alt="Image"/>
                                    <div className="single-project-style2__img-overlay-content">
                                        <div className="category">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-1">The Young Man Received his <br/>Driver's
                                                    License.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style2__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v2-2.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6">
                            <div className="single-project-style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-v2-3.jpg" alt="Image"/>
                                    <div className="single-project-style2__img-overlay-content">
                                        <div className="category">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-1">The Young Man Received his <br/>Driver's
                                                    License.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style2__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v2-3.jpg">
                                            <i className="icon-zoom"></i>
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
                                Discover 200+ Captivating Moments.
                                <Link href="/gallery-1"><i className="icon-next"></i>View All</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
