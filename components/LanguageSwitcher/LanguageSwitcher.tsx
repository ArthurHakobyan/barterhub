"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { lang, toggleLang } = useLanguage();

  return (
    <div className={styles.switcher}>
      <button
        className={`${styles.btn} ${lang === "en" ? styles.active : ""}`}
        onClick={() => lang !== "en" && toggleLang()}
        aria-label="Switch to English"
      >
        <span className={styles.flag}>🇬🇧</span>
        <span className={styles.label}>EN</span>
      </button>
      <button
        className={`${styles.btn} ${lang === "cs" ? styles.active : ""}`}
        onClick={() => lang !== "cs" && toggleLang()}
        aria-label="Přepnout na češtinu"
      >
        <span className={styles.flag}>🇨🇿</span>
        <span className={styles.label}>CS</span>
      </button>
    </div>
  );
}
