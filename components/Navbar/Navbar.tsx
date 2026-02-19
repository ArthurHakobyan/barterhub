"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>B</div>
          <span className={styles.logoText}>
            Barter<span>Hub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className={styles.nav}>
          <Link
            href="/"
            className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
          >
            {t.nav.browse}
          </Link>
          <Link
            href="/create"
            className={`${styles.navLink} ${pathname === "/create" ? styles.active : ""}`}
          >
            {t.nav.postListing}
          </Link>
        </div>

        <div className={styles.rightGroup}>
          <LanguageSwitcher />
          <Link href="/create" className={styles.ctaButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            {t.nav.newListing}
          </Link>
        </div>

        {/* Hamburger button — mobile/tablet only */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
        </button>
      </div>

      {/* Mobile/tablet slide-down menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <Link
          href="/"
          className={`${styles.mobileLink} ${pathname === "/" ? styles.active : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {t.nav.browse}
        </Link>
        <Link
          href="/create"
          className={`${styles.mobileLink} ${pathname === "/create" ? styles.active : ""}`}
          onClick={() => setMenuOpen(false)}
        >
          {t.nav.postListing}
        </Link>
        <div className={styles.mobileDivider} />
        <div className={styles.mobileBottom}>
          <LanguageSwitcher />
          <Link
            href="/create"
            className={styles.ctaButton}
            onClick={() => setMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
            {t.nav.newListing}
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
