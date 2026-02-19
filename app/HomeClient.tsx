"use client";

import { useState, useMemo } from "react";
import { Category, Listing, ListingType } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import Hero from "@/components/Hero/Hero";
import FilterBar from "@/components/FilterBar/FilterBar";
import ListingCard from "@/components/ListingCard/ListingCard";
import Link from "next/link";
import styles from "./page.module.css";

interface HomeClientProps {
  listings: Listing[];
  offerCount: number;
  requestCount: number;
}

export default function HomeClient({
  listings,
  offerCount,
  requestCount,
}: HomeClientProps) {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [type, setType] = useState<ListingType | "all">("all");
  const [category, setCategory] = useState<Category | "All">("All");

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (type !== "all" && l.type !== type) return false;
      if (category !== "All" && l.category !== category) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !l.title.toLowerCase().includes(q) &&
          !l.description.toLowerCase().includes(q) &&
          !l.authorName.toLowerCase().includes(q) &&
          !l.skills.some((s) => s.toLowerCase().includes(q))
        )
          return false;
      }
      return true;
    });
  }, [listings, search, type, category]);

  return (
    <>
      <Hero
        totalListings={listings.length}
        offerCount={offerCount}
        requestCount={requestCount}
      />

      <section id="listings" className={styles.section}>
        <div className="container">
          <FilterBar
            search={search}
            onSearch={setSearch}
            type={type}
            onType={setType}
            category={category}
            onCategory={setCategory}
            count={filtered.length}
          />

          <div className={styles.grid}>
            {filtered.length === 0 ? (
              <div className={styles.empty}>
                <div className={styles.emptyIcon}>🔍</div>
                <h3 className={styles.emptyTitle}>{t.home.noListings}</h3>
                <p className={styles.emptyText}>{t.home.noListingsText}</p>
                <Link href="/create" className={styles.emptyBtn}>
                  {t.home.postListing}
                </Link>
              </div>
            ) : (
              filtered.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
