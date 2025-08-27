'use client'
import { useEffect, useState } from "react";
import BackToTop from '../elements/BackToTop';
import DataBg from "../elements/DataBg";
import Breadcrumb from './Breadcrumb';
import Breadcrumb2 from './Breadcrumb2';
import SidebarPopup from "./SidebarPopup";
import Search from "./Search";
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from './header/Header3';
import Header4 from './header/Header4';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Footer4 from './footer/Footer4';

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, breadcrumbTitle2, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isPopup, setPopup] = useState(false);
    const [isSidebar, setSidebar] = useState(false);

    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu
            ? document.body.classList.add("mobile-menu-visible")
            : document.body.classList.remove("mobile-menu-visible");
    }

    const handlePopup = () => setPopup(!isPopup);
    const handleSidebar = () => setSidebar(!isSidebar);

    useEffect(() => {
    // Dinamički import WOW.js samo na clientu
    (async () => {
        if (typeof window !== "undefined") {
            const { WOW } = await import("wowjs");
            const wow = new WOW({ live: false });
            wow.init();
        }
    })();

    const onScroll = () => {
        setScroll(window.scrollY > 100);
    }

    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
}, []);


    const renderHeader = () => {
        switch (headerStyle) {
            case 1: return <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />;
            case 2: return <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />;
            case 3: return <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />;
            case 4: return <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />;
            default: return <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />;
        }
    }

    const renderFooter = () => {
        switch (footerStyle) {
            case 1: return <Footer1 />;
            case 2: return <Footer2 />;
            case 3: return <Footer3 />;
            case 4: return <Footer4 />;
            default: return <Footer1 />;
        }
    }

    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls || ""}`} id="#top">
                {renderHeader()}

                <Search isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SidebarPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                {breadcrumbTitle2 && <Breadcrumb2 breadcrumbTitle2={breadcrumbTitle2} />}

                {children}

                {renderFooter()}
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
