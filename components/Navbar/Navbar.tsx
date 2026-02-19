"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>B</div>
          <span className={styles.logoText}>
            Barter<span>Hub</span>
          </span>
        </Link>

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
      </div>
    </nav>
  );
}
