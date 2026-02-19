"use client";

import { ListingType } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Badge.module.css";

interface BadgeProps {
  type: ListingType;
}

export default function Badge({ type }: BadgeProps) {
  const { t } = useLanguage();

  return (
    <span className={`${styles.badge} ${styles[type]}`}>
      <span className={styles.dot} />
      {type === "offer" ? t.badge.offering : t.badge.requesting}
    </span>
  );
}
