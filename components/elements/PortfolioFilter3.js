'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter3() {

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

            <section className="project-page-three">
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

                    <ul className="project-style3__inner filter-layout masonary-layout clearfix">

                    
                        <li className="filter-item training events">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-1.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-1.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item classroom simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-2.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-2.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-3.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-3.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-4.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-4.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-5.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-5.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-6.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-6.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item classroom simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-7.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-7.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-8.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-8.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-9.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-9.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-10.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-10.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-11.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-11.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item classroom simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-12.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-12.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-13.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-13.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-14.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-14.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        
                        <li className="filter-item training events simulators">
                            <div className="single-project-style3">
                                <div className="single-project-style3__img">
                                    <img src="assets/images/project/project-v3-15.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style3__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="assets/images/project/project-v3-15.jpg">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                    <div className="single-project-style3__img-overlay-box">
                                        <div className="category-box">
                                            <h6>Success Stories</h6>
                                        </div>
                                        <div className="title-box">
                                            <h3><Link href="/gallery-3">Proud New Driver Moment</Link></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}
