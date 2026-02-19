"use client";

import Link from "next/link";
import { Listing } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import Badge from "@/components/Badge/Badge";
import ListingDetailClient from "./ListingDetailClient";
import styles from "./page.module.css";

interface Props {
  listing: Listing;
  initials: string;
}

function formatDate(iso: string, lang: string) {
  return new Date(iso).toLocaleDateString(lang === "cs" ? "cs-CZ" : "en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ListingDetailView({ listing, initials }: Props) {
  const { t, lang } = useLanguage();

  return (
    <div className={styles.page}>
      <div className="container">
        <Link href="/" className={styles.backLink}>
          {t.detail.backToListings}
        </Link>

        <div className={styles.layout}>
          {/* Main content */}
          <article className={styles.card}>
            <div
              className={`${styles.cardAccent} ${
                listing.type === "offer"
                  ? styles.cardAccentOffer
                  : styles.cardAccentRequest
              }`}
            />
            <div className={styles.cardBody}>
              <div className={styles.headerRow}>
                <h1 className={styles.title}>{listing.title}</h1>
                <span className={styles.categoryBadge}>
                  {t.categories[listing.category]}
                </span>
              </div>

              <Badge type={listing.type} />

              <p className={styles.description} style={{ marginTop: "20px" }}>
                {listing.description}
              </p>

              {listing.skills.length > 0 && (
                <>
                  <p className={styles.sectionTitle}>{t.detail.skillsAndTags}</p>
                  <div className={styles.skills}>
                    {listing.skills.map((skill) => (
                      <span key={skill} className={styles.skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </>
              )}

              <div className={styles.metaGrid}>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t.detail.postedBy}</span>
                  <span className={styles.metaValue}>{listing.authorName}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t.detail.location}</span>
                  <span className={styles.metaValue}>{listing.location}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t.detail.category}</span>
                  <span className={styles.metaValue}>{t.categories[listing.category]}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.metaLabel}>{t.detail.postedOn}</span>
                  <span className={styles.metaValue}>
                    {formatDate(listing.createdAt, lang)}
                  </span>
                </div>
              </div>

              <div className={styles.contactBox}>
                <div className={styles.contactText}>
                  <strong>{t.detail.interestedTitle}</strong>
                  {t.detail.preferredContact}{" "}
                  <strong>{listing.contactMethod}</strong>
                </div>
                <a
                  href={`mailto:${listing.authorEmail}`}
                  className={styles.contactBtn}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t.detail.contactVia(listing.contactMethod)}
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.sideCard}>
              <p className={styles.sideCardTitle}>{t.detail.aboutPoster}</p>
              <div className={styles.authorRow}>
                <div className={styles.authorAvatar}>{initials}</div>
                <div>
                  <div className={styles.authorName}>{listing.authorName}</div>
                  <div className={styles.authorLocation}>{listing.location}</div>
                </div>
              </div>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {listing.authorEmail}
                </li>
                <li className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.detail.prefers(listing.contactMethod)}
                </li>
              </ul>
            </div>

            <div className={styles.sideCard}>
              <p className={styles.sideCardTitle}>{t.detail.listingInfo}</p>
              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {t.categories[listing.category]}
                </li>
                <li className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(listing.createdAt, lang)}
                </li>
                <li className={styles.infoItem}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {listing.location}
                </li>
              </ul>
            </div>

            <ListingDetailClient listingId={listing.id} />
          </aside>
        </div>
      </div>
    </div>
  );
}
