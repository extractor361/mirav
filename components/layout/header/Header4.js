import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header4({ scroll, handleMobileMenu, handleSidebar }) {
    
    return (
        <>

        {/* main header */}

        <header className={`main-header main-header-style4 ${scroll ? "fixed-header" : ""}`}>

            <div className="main-header-style4__top">
                <div className="container">
                    <div className="main-header-style4__top-inner">

                        <div className="main-header-style4__top-left">
                            <div className="icon">
                                <span className="icon-double-chevron"></span>
                                <span className="icon-double-chevron"></span>
                            </div>
                            <h5>Drive Toward Success with Expert Guidance!..</h5>
                        </div>

                        <div className="main-header-style4__top-middle">
                            <div className="header-style4-contact-info">
                                <div className="header-style4-contact-info__bg"
                                    style={{ backgroundImage: "url(assets/images/resources/header-style4-contact-info-bg.jpg)" }}>
                                </div>
                                <ul className="clearfix">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-enrollment"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span></span>
                                        </div>
                                        <div className="text">
                                            <h5>
                                                <Link
                                                    href="https://www.scribd.com/document/454527413/Driving-Hand-Book-Practical-Training-pdf">Book
                                                    a<br/> Driving Lesson<span className="icon-next"></span></Link>
                                            </h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <div className="round-box"></div>
                                            <span className="icon-location"><span className="path1"></span><span
                                                    className="path2"></span><span className="path3"></span><span
                                                    className="path4"></span><span className="path5"></span><span
                                                    className="path6"></span><span className="path7"></span><span
                                                    className="path8"></span><span className="path9"></span></span>
                                        </div>
                                        <div className="text">
                                            <p>Brooklyn, NY 11214</p>
                                            <Link
                                                href="https://www.google.com/maps?sca_esv=cf8f2fd86c54593d&output=search&q=Brooklyn,+NY+11214&source=lnms&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpIgVFCTcbZI9VMGzNoV0iOZkckJJygdiLH6_g992ly-MejtXB7Ey3BdJG-rocg1ctga3NB5JojH5d1R_umgxZbUBS90-2EBudzdiw5gbLMiouKHZw2uMzRfPCDcZp3ggEsFD1MzSj6ATvLD4CP36TlYjyjC8TIMbXRLqy1R1W6iD0nSPoY4NLo2HwIZVP1tvnHxwGmg&entry=mc&ved=1t:200715&ictx=111">
                                                Map View
                                                <span className="icon-next"></span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <div className="round-box"></div>
                                            <span className="icon-call-center"><span className="path1"></span><span
                                                    className="path2"></span></span>
                                        </div>
                                        <div className="text">
                                            <p><Link href="tel:188822333">+66 12 000 456</Link></p>
                                            <Link href="mailto:getsupport@gmail.com">
                                                Send Email<span className="icon-next"></span>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="main-header-style4__top-right">
                            <div className="header-social-links-style2">
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
                </div>
            </div>

            <div className="main-header-style4__bottom">
                <div className="container">
                    <div className="main-header-style4__bottom-inner">

                        <div className="main-header-style4__bottom-left">
                            <div className="logo-box-style4">
                                <Link href="index.html">
                                    <img src="assets/images/resources/logo-4.png" alt="Awesome Logo" title=""/>
                                </Link>
                            </div>
                        </div>

                        <div className="main-header-style4__bottom-middle">
                            <nav className="main-menu main-menu-style1">
                                <div className="main-menu__wrapper clearfix">
                                    <div className="main-menu__wrapper-inner">
                                        <div className="sticky-logo-box-style1">
                                            <Link href="index.html">
                                                <img src="assets/images/resources/logo-4.png" alt="Awesome Logo"
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

                        <div className="main-header-style4__bottom-right">
                            <div className="box-search-style1">
                                <Link href="#" className="search-toggler" onClick={handleSidebar}>
                                    <span className="icon-search"></span>
                                </Link>
                            </div>
                            <div className="login-register-box-style1 login-register-box-style4">
                                <div className="icon">
                                    <span className="icon-user"></span>
                                </div>
                                <ul className="clearfix">
                                    <li><Link href="contact.html">Login</Link></li>
                                    <li><Link href="contact.html">Register</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className={`stricky-header stricky-header--style1 stricked-menu main-menu ${scroll ? "animated slideInDown" : ""}`}>
                <div className="sticky-header__content">
                    <div className="main-menu__wrapper clearfix">
                        <div className="main-menu__wrapper-inner">
                            <div className="sticky-logo-box-style1">
                                <Link href="/">
                                    <img src="assets/images/resources/logo-4.png" alt="Awesome Logo"/>
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
