import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header2({ scroll, handleMobileMenu, handlePopup }) {
    
    return (
        <>

        {/* main header */}

        <header className={`main-header main-header-style2 ${scroll ? "fixed-header" : ""}`}>

            <div className="main-header-style2__logo-box">
                <div className="logo-box-style2">
                    <Link href="/index-2">
                        <img src="assets/images/resources/logo-2.png" alt="Awesome Logo" title=""/>
                    </Link>
                </div>
            </div>

            <div className="main-header-style2__content">

                <div className="main-header-style2__top">
                    <div className="main-header-style2__top-left">
                        <p>Drive Mater Offers Driving Lessons from $54!...</p>
                    </div>
                    <div className="main-header-style2__top-right">
                        <div className="login-register-box-style1">
                            <div className="icon">
                                <span className="icon-pdf"></span>
                            </div>
                            <ul className="clearfix">
                                <li><Link href="contact.html">Login</Link></li>
                                <li><Link href="contact.html">Register</Link></li>
                            </ul>
                        </div>
                        <div className="header-social-links-style1">
                            <ul className="clearfix">
                                <li>
                                    <Link href="https://www.facebook.com/">
                                        <span className="icon-facebook"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://x.com/i/flow/login">
                                        <i className="icon-twitter"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/accounts/login/?hl=en">
                                        <span className="icon-instagram-logo"></span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/">
                                        <span className="icon-youtube"></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="main-header-style2__bottom">
                    <div className="main-header-style2__bottom-inner">
                        <div className="main-header-style2__bottom-left">
                            <nav className="main-menu main-menu-style1">
                                <div className="main-menu__wrapper clearfix">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="sticky-logo-box-style1">
                                            <Link href="index.html">
                                                <img src="assets/images/resources/logo-2.png" alt="Awesome Logo"
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

                        <div className="main-header-style2__bottom-right">
                            <div className="enroll-box-style1">
                                <div className="icon">
                                    <span className="icon-enrollment"><span className="path1"></span><span
                                            className="path2"></span><span className="path3"></span><span
                                            className="path4"></span><span className="path5"></span><span
                                            className="path6"></span><span className="path7"></span><span
                                            className="path8"></span><span className="path9"></span></span>
                                </div>
                                <div className="text">
                                    <h6><Link href="/contact">Enroll Today</Link></h6>
                                </div>
                            </div>
                            <div className="header-phone-number-box-style1">
                                <div className="icon">
                                    <span className="icon-dial-pad"></span>
                                </div>
                                <div className="text">
                                    <p>Start Driving</p>
                                    <Link href="tel:188822333">+66 12 000 3456</Link>
                                </div>
                            </div>
                            <div className="side-content-button side-content-button--style2">
                                <Link className="navSidebar-button" href="#" onClick={handlePopup}>
                                    <span className="icon-dots-menu"></span>
                                </Link>
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
                                    <img src="assets/images/resources/logo-2.png" alt="Awesome Logo"/>
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
