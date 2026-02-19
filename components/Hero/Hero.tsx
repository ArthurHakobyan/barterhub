"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Hero.module.css";

interface HeroProps {
  totalListings: number;
  offerCount: number;
  requestCount: number;
}

export default function Hero({ totalListings, offerCount, requestCount }: HeroProps) {
  const { t } = useLanguage();

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.tagline}>
          <span className={styles.taglineDot} />
          {t.hero.tagline}
        </div>

        <h1 className={styles.title}>
          {t.hero.titleLine1}<br />
          <em>{t.hero.titleLine2}</em>
        </h1>

        <p className={styles.subtitle}>{t.hero.subtitle}</p>

        <div className={styles.actions}>
          <Link href="/create" className={styles.btnPrimary}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            {t.hero.postListing}
          </Link>
          <a href="#listings" className={styles.btnSecondary}>
            {t.hero.browseListings}
          </a>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>{totalListings}</span>
            <span className={styles.statLabel}>{t.hero.totalListings}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>{offerCount}</span>
            <span className={styles.statLabel}>{t.hero.offers}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.stat}>
            <span className={styles.statNumber}>{requestCount}</span>
            <span className={styles.statLabel}>{t.hero.requests}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
