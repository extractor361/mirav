'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter1() {

    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".filter-layout", {
                itemSelector: ".filter-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".filter-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <section className="project-page-one">
                <div className="container">

                    <div className="project-menu-box wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <ul className="project-filter text-center clearfix post-filter has-dynamic-filters-counter">
                            <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">View All</span></li>
                            <li className={activeBtn("classroom")} onClick={handleFilterKeyChange("classroom")}><span className="filter-text">Classroom</span></li>
                            <li className={activeBtn("training")} onClick={handleFilterKeyChange("training")}><span className="filter-text">Training</span></li>
                            <li className={activeBtn("simulators")} onClick={handleFilterKeyChange("simulators")}><span className="filter-text">Simulators</span></li>
                            <li className={activeBtn("events")} onClick={handleFilterKeyChange("events")}><span className="filter-text">Driving Events</span></li>
                        </ul>
                    </div>

                    <div className="row filter-layout masonary-layout">
                        
                        <div className="col-xl-6 col-lg-6 filter-item training events">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-1.jpg" alt="Image"/>
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
                                            href="assets/images/project/project-page-1-1.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 filter-item classroom training simulators events">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-2.jpg" alt="Image"/>
                                    <div className="single-project-style2__img-overlay-content">
                                        <div className="category">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-1">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style2__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-page-1-2.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 filter-item training events">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-3.jpg" alt="Image"/>
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
                                            href="assets/images/project/project-page-1-3.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 filter-item classroom simulators events">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-4.jpg" alt="Image"/>
                                    <div className="single-project-style2__img-overlay-content">
                                        <div className="category">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-1">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style2__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-page-1-4.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 filter-item training events">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-5.jpg" alt="Image"/>
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
                                            href="assets/images/project/project-page-1-5.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 filter-item classroom simulators">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-6.jpg" alt="Image"/>
                                    <div className="single-project-style2__img-overlay-content">
                                        <div className="category">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-1">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style2__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-page-1-6.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 filter-item training events">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-7.jpg" alt="Image"/>
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
                                            href="assets/images/project/project-page-1-7.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-6 col-lg-6 filter-item classroom simulators">
                            <div className="single-project-style2 single-project-style2--style2">
                                <div className="single-project-style2__img">
                                    <img src="assets/images/project/project-page-1-8.jpg" alt="Image"/>
                                    <div className="single-project-style2__img-overlay-content">
                                        <div className="category">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-1">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style2__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-page-1-8.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
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
