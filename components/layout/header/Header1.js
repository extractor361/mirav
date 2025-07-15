import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"



export default function Header1({ scroll, handleMobileMenu, handlePopup, handleSidebar }) {
    
    return (
        <>

        {/* main header */}

        <header className={`main-header main-header-style1 ${scroll ? "fixed-header" : ""}`}>

            <div className="main-header-style1__top">
                <div className="container">
                    <div className="main-header-style1__top-inner">
                        <div className="main-header-style1__top-inner__box">
                            <div className="main-header-style1__top-left">
                                <p>
                                    <span className="icon-dial-pad"></span>
                                    Postani vozač, pozovi
                                    <Link href="tel:188822333">+382 068 444 101</Link>
                                </p>
                            </div>
                            <div className="main-header-style1__top-right">
                                <div className="starting-locations-box-style1">
                                    <div className="icon">
                                        <span className="icon-thumbtack"></span>
                                    </div>
                                    <div className="select-box clearfix">
                                        <select className="wide">
                                            <option data-display="Starting Locations">Početne lokacije</option>
                                            <option value="1">Podgorica</option>
                                         
                                        </select>
                                    </div>
                                </div>
                                <div className="classes-time-schedule-box-style1">
                                    <div className="icon">
                                        <span className="icon-stopwatch"></span>
                                        <p>Pon - Pet:</p>
                                    </div>
                                    <div className="select-box clearfix">
                                        <select className="wide">
                                            <option data-display="7.00 to 11.00">7.00 to 15.00</option>
                                            
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="main-header-style1__bottom">
                <div className="container">
                    <div className="main-header-style1__bottom-inner">

                        <div className="main-header-style1__bottom-inner__box">

                            <div className="main-header-style1__bottom-left">
                                <div className="logo-box-style1">
                                    <Link href="/">
                                        <img src="assets/images/resources/Logo slova - main plavi.png" alt="Logo Auto škola Mirav" title=""/>
                                    </Link>
                                </div>
                                
                                <nav className="main-menu main-menu-style1">
                                    <div className="main-menu__wrapper clearfix">
                                        <div className="main-menu__wrapper-inner">
                                            <div className="sticky-logo-box-style1">
                                                <Link href="/">
                                                    <img  src="assets/images/resources/Logo slova - main plavi.png" alt="Logo auto škola Mirav"
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

                            <div className="main-header-style1__bottom-right">
                                <ul className="clearfix">
                                    <li>
                                        <div className="box-search-style1">
                                            <Link href="#" className="search-toggler" onClick={handleSidebar}>
                                                <span className="icon-search"></span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="user-box-style1">
                                            <Link href="#">
                                                <span className="icon-user"></span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="side-content-button">
                                            <Link className="navSidebar-button" href="#" onClick={handlePopup}>
                                                <span className="icon-dots-menu"></span>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button-style1">
                                    <Link className="btn-one" href="/courses-details">
                                        <span className="txt">
                                            Želim vozačku dozvolu
                                        </span>
                                    </Link>
                                </div>
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
                                    <img src="assets/images/resources/Logo slova - main plavi.png" alt="Awesome Logo"/>
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
