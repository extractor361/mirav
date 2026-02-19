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
                        {/* Ucionica 1 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica1.jpg" alt="Ucionica 1"/>
        </div>
    </div>
</div>

{/* Ucionica 2 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica2.jpg" alt="Ucionica 2"/>
        </div>
    </div>
</div>

{/* Ucionica 3 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica3.jpg" alt="Ucionica 3"/>
        </div>
    </div>
</div>

{/* Ucionica 4 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica4.jpg" alt="Ucionica 4"/>
        </div>
    </div>
</div>

{/* Ucionica 5 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica5.jpg" alt="Ucionica 5"/>
        </div>
    </div>
</div>

{/* Ucionica 6 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica6.jpg" alt="Ucionica 6"/>
        </div>
    </div>
</div>

{/* Ucionica 7 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica7.jpg" alt="Ucionica 7"/>
        </div>
    </div>
</div>

{/* Ucionica 8 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica8.jpg" alt="Ucionica 8"/>
        </div>
    </div>
</div>

{/* Ucionica 9 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica9.jpg" alt="Ucionica 9"/>
        </div>
    </div>
</div>

{/* Ucionica 10 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica10.jpg" alt="Ucionica 10"/>
        </div>
    </div>
</div>

{/* Ucionica 11 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica11.jpg" alt="Ucionica 11"/>
        </div>
    </div>
</div>

{/* Ucionica 12 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica12.jpg" alt="Ucionica 12"/>
        </div>
    </div>
</div>

{/* Ucionica 13 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica13.jpg" alt="Ucionica 13"/>
        </div>
    </div>
</div>

{/* Ucionica 14 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica14.jpg" alt="Ucionica 14"/>
        </div>
    </div>
</div>

{/* Ucionica 15 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica15.jpg" alt="Ucionica 15"/>
        </div>
    </div>
</div>

{/* Ucionica 16 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica16.jpg" alt="Ucionica 16"/>
        </div>
    </div>
</div>

{/* Ucionica 17 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica17.jpg" alt="Ucionica 17"/>
        </div>
    </div>
</div>

{/* Ucionica 18 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica18.jpg" alt="Ucionica 18"/>
        </div>
    </div>
</div>

{/* Ucionica 20 */}
<div className="col-xl-4 col-lg-6 col-md-6 filter-item classroom">
    <div className="single-project-style1">
        <div className="single-project-style1__img">
            <img src="assets/images/resources/ucionica20.jpg" alt="Ucionica 20"/>
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
                                    <img src="assets/images/resources/Mirav-2055_compressedd.webp" alt="Awesome Image"/>
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

<div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (1).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (2).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (3).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (4).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (5).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (8).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (9).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (10).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
                                        </div>
                                    </div>
                                    <div className="single-project-style1__img-overlay-icon">
                                      
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6 filter-item  training ">
                            <div className="single-project-style1">
                                <div className="single-project-style1__img">
                                    <img src="assets/images/resources/driving (11).jpg" alt="Awesome Image"/>
                                    <div className="single-project-style1__img-overlay-content">
                                        <div className="category">
                                            <h6>Vožnja</h6>
                                        </div>
                                        <div className="title">
                                            <h3><Link href="#">Časovi vožnje</Link></h3>
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
