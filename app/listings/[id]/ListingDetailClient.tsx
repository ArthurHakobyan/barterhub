"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./page.module.css";

interface Props {
  listingId: string;
}

export default function ListingDetailClient({ listingId }: Props) {
  const router = useRouter();
  const { t } = useLanguage();
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm(t.detail.confirmDelete)) return;
    setDeleting(true);
    try {
      const res = await fetch(`/api/listings/${listingId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      router.push("/");
      router.refresh();
    } catch {
      alert(t.detail.deleteError);
      setDeleting(false);
    }
  }

  return (
    <div className={styles.sideCard}>
      <p className={styles.sideCardTitle}>{t.detail.actions}</p>
      <button
        className={styles.deleteBtn}
        onClick={handleDelete}
        disabled={deleting}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        {deleting ? t.detail.deleting : t.detail.deleteListing}
      </button>
    </div>
  );
}
