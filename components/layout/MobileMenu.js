'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} />
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="fa fa-times-circle"></i>
                    </span>
                    <div className="logo-box">
                        <Link href="index.html" aria-label="logo image">
                            <img src="assets/images/resources/mobile-nav-logo.png" alt="" />
                        </Link>
                    </div>
                    <div className="mobile-nav-search-box">
                        <form className="search-form" action="#">
                            <input placeholder="Keyword" type="text" />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home 01</Link></li>
                                        <li><Link href="/index-2">Home 02</Link></li>
                                        <li><Link href="/index-3">Home 03</Link></li>
                                        <li><Link href="/index-4">Home 04</Link></li>
                                    </ul>
                                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-down" /></div>
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">About</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/about">About Company</Link></li>
                                        <li><Link href="/history">History</Link></li>
                                        <li><Link href="/team">Team Members</Link></li>
                                        <li><Link href="/testimonials">Testimonials</Link></li>
                                        <li><Link href="/faq">Faq’s</Link></li>
                                        <li><Link href="/404">404</Link></li>
                                        <li><Link href="/coming-soon">Coming Soon</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-down" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Gallery</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/gallery-1">2 Columns Grid</Link></li>
                                        <li><Link href="/gallery-2">3 Columns Grid</Link></li>
                                        <li><Link href="/gallery-3">5 Columns Fullwidth</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-down" /></div>
                                </li>
                                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Courses</Link>
                                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/courses-1">Courses Modern</Link></li>
                                        <li><Link href="/courses-2">Courses Future</Link></li>
                                        <li><Link href="/courses-3">Courses Classic</Link></li>
                                        <li><Link href="/courses-details">Courses Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-down" /></div>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/services-1">Services Modern</Link></li>
                                        <li><Link href="/services-2">Services Future</Link></li>
                                        <li><Link href="/services-3">Services Classic</Link></li>
                                        <li><Link href="/services-details">Services Details</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-down" /></div>
                                </li>
                                <li className={isActive.key == 6 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                                    <ul style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                        <li><Link href="/blog-1">2 Columns Grid</Link></li>
                                        <li><Link href="/blog-2">3 Columns Grid</Link></li>
                                        <li><Link href="/blog-3">Blog Large</Link></li>
                                        <li><Link href="/blog-4">Blog Small</Link></li>
                                        <li><Link href="/blog-single">Single Post</Link></li>
                                    </ul>
                                    <div className={isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(6)}><span className="fa fa-angle-down" /></div>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:info@example.com">info@example.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            <Link href="tel:123456789">444 000 777 66</Link>
                        </li>
                    </ul>
                    <div className="mobile-nav__social">
                        <Link href="#" className="fab fa-twitter"></Link>
                        <Link href="#" className="fab fa-facebook-square"></Link>
                        <Link href="#" className="fab fa-pinterest-p"></Link>
                        <Link href="#" className="fab fa-instagram"></Link>
                    </div>
                </div>
            </div>

            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

        </>
    )
}
