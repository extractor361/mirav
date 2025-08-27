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
              <img src="../assets/images/resources/Logo slova - main plavi.png" alt="Logo" />
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
              <li className={isActive.key === "onama" ? "dropdown current" : "dropdown"}>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle("onama");
                  }}
                >
                  O nama
                </Link>
                <ul style={{ display: isActive.key === "onama" ? "block" : "none" }}>
                  <li>
                    <Link href="/o-nama" onClick={handleMobileMenu}>
                      O nama
                    </Link>
                  </li>
                  <li>
                    <Link href="/tim" onClick={handleMobileMenu}>
                      Tim
                    </Link>
                  </li>
                </ul>
                <span
                  className={isActive.key === "onama" ? "dropdown-btn open" : "dropdown-btn"}
                  onClick={() => handleToggle("onama")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="fa fa-angle-down" />
                </span>
              </li>

              {/* B Kategorija */}
              <li><Link href="/b-kategorija" onClick={handleMobileMenu}>B Kategorija</Link></li>

              {/* Program teorijske obuke dropdown */}
              <li className={isActive.key === "program" ? "dropdown current" : "dropdown"}>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleToggle("program");
                  }}
                >
                  Teorijska obuka                </Link>
                <ul style={{ display: isActive.key === "program" ? "block" : "none" }}>
                  <li>
                    <Link href="/raspored" onClick={handleMobileMenu}>
                  Program teorijske obuke
                    </Link>
                  </li>
                  <li>
                    <Link href="/test" onClick={handleMobileMenu}>
                      Teorijski test
                    </Link>
                  </li>
                </ul>
                <span
                  className={isActive.key === "program" ? "dropdown-btn open" : "dropdown-btn"}
                  onClick={() => handleToggle("program")}
                  role="button"
                  tabIndex={0}
                >
                  <span className="fa fa-angle-down" />
                </span>
              </li>

              {/* Cjenovnik */}
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
