"use client"
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  })

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({ status: false, key: "" })
    } else {
      setIsActive({ status: true, key })
    }
  }

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>

        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
            <i className="fa fa-times-circle"></i>
          </span>

          <div className="logo-box">
            <Link href="/" aria-label="logo image">
              <img src="assets/images/resources/Logo slova - main plavi.png" alt="Logo" />
            </Link>
          </div>

          <div className="mobile-nav-search-box">
            <form className="search-form" action="#">
              <input placeholder="Pretraži..." type="text" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">

              {/* Naslovna */}
              <li><Link href="/" onClick={handleMobileMenu}>Naslovna</Link></li>

              {/* O nama */}
              <li><Link href="/o-nama" onClick={handleMobileMenu}>O nama</Link></li>

              {/* B Kategorija */}
              <li><Link href="/b-kategorija" onClick={handleMobileMenu}>B Kategorija</Link></li>

              {/* Testovi dropdown */}
              <li className={isActive.key === "testovi" ? "dropdown current" : "dropdown"}>
                <Link href="#" onClick={(e) => { e.preventDefault(); handleToggle("testovi") }}>
                  Testovi
                </Link>
                <ul style={{ display: isActive.key === "testovi" ? "block" : "none" }}>
                  <li><Link href="/test" onClick={handleMobileMenu}>Teorijski test 1</Link></li>
                </ul>
                <div
                  className={isActive.key === "testovi" ? "dropdown-btn open" : "dropdown-btn"}
                  onClick={() => handleToggle("testovi")}
                >
                  <span className="fa fa-angle-down" />
                </div>
              </li>

              <li><Link href="/cjenovnik" onClick={handleMobileMenu}>Cjenovnik</Link></li>

              {/* Blog */}
              <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>

              {/* Galerija */}
              <li><Link href="/galerija" onClick={handleMobileMenu}>Galerija</Link></li>

              {/* Kontakt */}
              <li><Link href="/kontakt" onClick={handleMobileMenu}>Kontakt</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  )
}
