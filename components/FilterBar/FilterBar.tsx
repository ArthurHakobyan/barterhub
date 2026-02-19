"use client";

import { Category, ListingType } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./FilterBar.module.css";

const CATEGORY_KEYS: (Category | "All")[] = [
  "All",
  "Technology",
  "Design",
  "Writing",
  "Marketing",
  "Education",
  "Music",
  "Cooking",
  "Fitness",
  "Legal",
  "Finance",
  "Other",
];

interface FilterBarProps {
  search: string;
  onSearch: (v: string) => void;
  type: ListingType | "all";
  onType: (v: ListingType | "all") => void;
  category: Category | "All";
  onCategory: (v: Category | "All") => void;
  count: number;
}

export default function FilterBar({
  search,
  onSearch,
  type,
  onType,
  category,
  onCategory,
  count,
}: FilterBarProps) {
  const { t } = useLanguage();

  return (
    <div className={styles.wrapper}>
      {/* Search */}
      <div className={styles.searchGroup}>
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
        <input
          className={styles.searchInput}
          type="text"
          placeholder={t.filter.searchPlaceholder}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className={styles.divider} />

      {/* Type filter */}
      <div className={styles.typeGroup}>
        <button
          className={`${styles.typeBtn} ${type === "all" ? styles.activeAll : ""}`}
          onClick={() => onType("all")}
        >
          {t.filter.all}
        </button>
        <button
          className={`${styles.typeBtn} ${type === "offer" ? styles.activeOffer : ""}`}
          onClick={() => onType("offer")}
        >
          {t.filter.offers}
        </button>
        <button
          className={`${styles.typeBtn} ${type === "request" ? styles.activeRequest : ""}`}
          onClick={() => onType("request")}
        >
          {t.filter.requests}
        </button>
      </div>

      <div className={styles.divider} />

      {/* Category select */}
      <div className={styles.selectGroup}>
        <svg
          className={styles.selectIcon}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
        <select
          className={styles.select}
          value={category}
          onChange={(e) => onCategory(e.target.value as Category | "All")}
        >
          {CATEGORY_KEYS.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? t.filter.allCategories : t.categories[c]}
            </option>
          ))}
        </select>
        <svg
          className={styles.chevron}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <p className={styles.count}>
        <strong>{count}</strong> {t.filter.listingFoundSuffix(count)}
      </p>
    </div>
  );
}
