import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header3({ scroll, handleMobileMenu}) {
    
    return (
        <>

        {/* main header */}

        <header className={`main-header main-header-style3 ${scroll ? "fixed-header" : ""}`}>

            <div className="main-header-style3__top">
                <div className="container">
                    <div className="main-header-style3__top-inner">
                        <div className="main-header-style3__top-left">
                            <div className="starting-locations-box-style1">
                                <div className="icon">
                                    <span className="icon-thumbtack"></span>
                                </div>
                                <div className="select-box clearfix">
                                    <select className="wide">
                                        <option data-display="Starting Locations">Starting Locations</option>
                                        <option value="1">Dhaka</option>
                                        <option value="2">Mirpur</option>
                                        <option value="3">Uttora</option>
                                        <option value="4">Badda</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="main-header-style3__top-middle">
                            <p>Drive Master Offers Driving Lessons from $54!...</p>
                        </div>

                        <div className="main-header-style3__top-right">
                            <div className="login-register-box-style1">
                                <div className="icon">
                                    <span className="icon-pdf"></span>
                                </div>
                                <ul className="clearfix">
                                    <li><Link href="/contact">Login</Link></li>
                                    <li><Link href="/contact">Register</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            

            <div className="main-header-style3__bottom">
                <div className="container">
                    <div className="main-header-style3__bottom-inner">

                        <div className="main-header-style3__bottom-left">
                            <div className="logo-box-style3">
                                <div className="logo-box-style3__bg"
                                    style={{ backgroundImage: "url(assets/images/shapes/logo-box-style3-bg.png)" }}></div>
                                <Link href="index.html">
                                    <img src="assets/images/resources/logo-3.png" alt="Awesome Logo" title=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="main-header-style3__bottom-middle">
                            <div className="main-header-style3__bottom-middle__bg"
                                style={{ backgroundImage: "url(assets/images/shapes/main-header-style3__bottom-middle-bg.png)" }}>
                            </div>
                            
                            <nav className="main-menu main-menu-style1">
                                <div className="main-menu__wrapper clearfix">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="sticky-logo-box-style1">
                                            <Link href="/index-3">
                                                <img src="assets/images/resources/logo-3.png" alt="Awesome Logo"
                                                    title=""/>
                                            </Link>
                                        </div>
                                        <div className="main-menu-style1__left">
                                            <div className="main-menu-box">
                                                <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                                    <i className="fa fa-bars"></i>
                                                </Link>
                                                <Menu />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </nav>
                        </div>

                        <div className="main-header-style3__bottom-right">
                            <div className="header-style3-contact-box">
                                <Link href="tel:188822333">
                                    <span className="icon-call-center"><span className="path1"></span><span
                                            className="path2"></span></span>
                                </Link>
                            </div>
                            <div className="book-driving-lesson-box-style1">
                                <div className="book-driving-lesson-box-style1__bg"
                                    style={{ backgroundImage: "url(assets/images/shapes/book-driving-lesson-box-style1-bg.png)" }}>
                                </div>
                                <div className="icon">
                                    <span className="icon-enrollment"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span></span>
                                </div>
                                <h5><Link href="/contact">Book a<br/> Driving Lesson</Link></h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className={`stricky-header stricky-header--style1 black-bg stricked-menu main-menu ${scroll ? "animated slideInDown" : ""}`}>
                <div className="sticky-header__content">
                    <div className="main-menu__wrapper clearfix">
                        <div className="main-menu__wrapper-inner">
                            <div className="sticky-logo-box-style1">
                                <Link href="/">
                                    <img src="assets/images/resources/logo-3.png" alt="Awesome Logo"/>
                                </Link>
                            </div>
                            <div className="main-menu-style1__left">
                                <div className="main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                                        <i className="fa fa-bars"></i>
                                    </Link>

                                    <Menu />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>

        </>
    )
}
