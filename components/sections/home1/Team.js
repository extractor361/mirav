'use client'
import React from 'react'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 3,
        },
    }
}

export default function Team() {
    return (
        <> 

            <section className="team-style1">
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sub-title">
                            <h4>Naš Tim</h4>
                        </div>
                        <h2>Naš stručni tim</h2>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <Swiper {...swiperOptions} className="swiper-container team-style1-carousel">
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/resources/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Mirjana <br/>Vešović</Link></h3>
                                                <span>Osnivač</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Osnivač i direktor auto škole, instruktor vožnje B i C kategorije, član ispitne komisije
Rođena 24. januara 1978. godine u Kolašinu. Inženjer drumskog saobraćaja. Svoju karijeru započinje 2003. godine kao instruktor u auto školi Beo Znanje u Beogradu, a 2007. godine postaje rukovodilac te škole. U januaru 2013. godine odlučuje da se vrati u Podgoricu i osniva auto školu Mirav. Do sada je uspješno obučila preko 3000 kandidata.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim1.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Almedina <br/>Jasharaj</Link></h3>
                                                <span>Asistent u nastavi</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Almedina je strastvena u pomaganju kandidatima da savladaju teorijski dio nastave. Kao student saobraćajnog fakulteta, uvijek je u toku sa novim trendovima i propisima u saobraćaju. Njen pristup je edukativan i motivirajuć, čineći teorijsku nastavu zanimljivijom i lakšom za učenike.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim2.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Ivana  <br/>Šćepanović Petković</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Instruktor vožnje motornih vozila B kategorije
Ivana je strpljiva i posvećena instruktorka koja se lako povezuje sa kandidatima. Njena obuka je prilagođena svakom pojedincu, što omogućava brži napredak, posebno kod početnika.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/ivana.jpg" alt="Ivana Šćepanović Petjović"/>
                                        </div>
                                    </div>
                                </SwiperSlide>

<SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">dr Mirela   <br/>Kalić</Link></h3>
                                                <span>Predavač za prvu pomoć</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Rođena je u Rožajama, gdje je završila osnovnu i srednju školu. Diplomirala je na Medicinskom fakultetu u Podgorici 2011. godine, a od 2021. godine je specijalista radiologije.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim111.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Nikola  <br/>Vlahović</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Nikola je mirne naravi i poznat po tome što savršeno prilagođava obuku svakom kandidatu. Sa njim, svaki kandidat se osjeća sigurno i sigurnije savladava sve izazove vožnje.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim3.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Miladin <br/>Vešović</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Mićko je posvećen i strpljiv instruktor koji se odlikuje preciznošću i temeljitošću u obuci. Sa dugogodišnjim iskustvom, trudi se da svaki kandidat postigne sigurnost i samopouzdanje za volanom.
</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim4.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Jadranka Vesović
  <br/> Rakočević</Link></h3>
                                                <span>Referent auto škole
</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Jadranka je odgovorna za administrativnu podršku i svakodnevne operacije u auto školi. Njena organizacija i preciznost čine rad škole efikasnijim, a kandidati se uvijek mogu osloniti na njenu pomoć u vezi sa svim administrativnim pitanjima.</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim5.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="single-team-style1">
                                        <div className="single-team-style1-inner">
                                            <div className="single-team-style1-shape">
                                                <img src="assets/images/shapes/-v1-shape1.png" alt="shape"/>
                                            </div>
                                            <div className="single-team-style1-title">
                                                <h3><Link href="/">Adam  <br/>Baković</Link></h3>
                                                <span>Instruktor</span>
                                            </div>
                                            <div className="single-team-style1-border"></div>
                                            <div className="single-team-style1-text">
                                                <p>Adam je energičan i pozitivan, uvek spreman da pomogne kandidatima da prevaziđu strahove i nesigurnost. Njegov pristup je prilagođen svakom kandidatu, omogućavajući brže i lakše savladavanje vožnje.
</p>
                                            </div>
                                            <div className="single-team-style1-bottom">
                                                <ul className="single-team-style1-social-link clearfix">
                                                    <li>
                                                        <Link href="https://www.facebook.com/">
                                                            <span className=" icon-facebook"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://x.com/i/flow/login">
                                                            <span className="icon-twitter"></span>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                                            <span className="icon-instagram-logo"></span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="single-team-style1-btn">
                                                    <Link href="/"><i className="icon-next"></i> Pogledaj Profil</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-team-style1-img">
                                            <img src="assets/images/resources/tim6.jpeg" alt="Awesome Image"/>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="swiper-nav-style-one">
                                <button className="swiper-button-prev">
                                    <i className="left icon-prev1"></i>
                                </button>
                                <button className="swiper-button-next">
                                    <i className="icon-next"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="section-btn">
                        <div className="section-btn-inner">
                            <div className="section-btn-inner-bg"
                                style={{ backgroundImage: "url(assets/images/pattern/thm-pattern-1.png)" }}></div>
                            <p>
                                Naš tim je uvijek tu da pomogne!
                                <Link href="/kontakt"><i className="icon-next"></i>prijavi se</Link>
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
