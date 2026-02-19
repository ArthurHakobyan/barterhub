"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

export default function ListingNotFound() {
  const { t } = useLanguage();

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.notFound}>
          <div className={styles.notFoundIcon}>🔍</div>
          <h1 className={styles.notFoundTitle}>{t.detail.notFoundTitle}</h1>
          <p className={styles.notFoundText}>{t.detail.notFoundText}</p>
          <Link href="/" className={styles.notFoundLink}>
            {t.detail.backToListingsLink}
          </Link>
        </div>
      </div>
    </div>
  );
}
