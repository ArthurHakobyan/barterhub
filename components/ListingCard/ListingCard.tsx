"use client";

import Link from "next/link";
import { Listing } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import Badge from "@/components/Badge/Badge";
import styles from "./ListingCard.module.css";

interface ListingCardProps {
  listing: Listing;
}

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "cs" ? "cs-CZ" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ListingCard({ listing }: ListingCardProps) {
  const { t, lang } = useLanguage();

  return (
    <Link
      href={`/listings/${listing.id}`}
      className={`${styles.card} ${listing.type === "offer" ? styles.cardOffer : styles.cardRequest}`}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{listing.title}</h3>
        <Badge type={listing.type} />
      </div>

      <p className={styles.description}>{listing.description}</p>

      {listing.skills.length > 0 && (
        <div className={styles.skills}>
          {listing.skills.slice(0, 4).map((skill) => (
            <span key={skill} className={styles.skill}>
              {skill}
            </span>
          ))}
          {listing.skills.length > 4 && (
            <span className={styles.skill}>+{listing.skills.length - 4}</span>
          )}
        </div>
      )}

      <div className={styles.footer}>
        <div className={styles.meta}>
          <span className={styles.category}>{t.categories[listing.category]}</span>
          <span className={styles.metaItem}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {listing.authorName}
          </span>
          <span className={styles.metaItem}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {listing.location}
          </span>
          <span className={styles.metaItem}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(listing.createdAt, lang)}
          </span>
        </div>
        <span className={styles.viewLink}>{t.card.viewDetails}</span>
      </div>
    </Link>
  );
}
