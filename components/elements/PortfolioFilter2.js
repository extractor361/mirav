'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter2() {

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

            <section className="project-page-two">
                <div className="container">

                    <div className="project-menu-box wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1500ms">
                        <ul className="project-filter text-center clearfix post-filter has-dynamic-filters-counter">
                            <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">Pogledaj sve</span></li>
                            <li className={activeBtn("classroom")} onClick={handleFilterKeyChange("classroom")}><span className="filter-text">Učionica</span></li>
                            <li className={activeBtn("training")} onClick={handleFilterKeyChange("training")}><span className="filter-text">Vožnja</span></li>
                            <li className={activeBtn("simulators")} onClick={handleFilterKeyChange("events")}><span className="filter-text">Polaganje</span></li>
                            <li className={activeBtn("events")} onClick={handleFilterKeyChange("team")}><span className="filter-text">Tim</span></li>
                        </ul>
                    </div>

                    <div className="row filter-layout masonary-layout">
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item training">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/prakticnavoznja.jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Kategorija: Polaganje</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Marko dobija <br/>svoju vozačku dozvolu!</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  classroom">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (1).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="/gallery-2">Teorijska nastava<br/></Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="#">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (2).jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Teorijska nastava</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="#">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item clasroom ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (3).jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Teorijska nastava.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                        <Link className="lightbox-image" data-fancybox="gallery"
                                            href="#">
                                            <i className="icon-zoom"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  classroom">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (4).jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Teorijska nastava.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  classroom">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (5).jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Teorijska nastava</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (6).jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Teorijska nastava</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  classroom">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (8).jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Teorijska nastava.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  classroom ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/teorija (9).jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Učionica</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Teorijska nastava.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/tim1.jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/tim2.jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/tim3.jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/tim4.jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/tim5.jpeg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2001_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2025_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2026_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2036_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2040_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2043_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2048_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2051_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2054_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2055_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2062_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2082_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2090_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2094_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2096_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2098_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  team ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/Mirav-2102_compressed.webp" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Tim</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Instruktori i predavači.</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
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
