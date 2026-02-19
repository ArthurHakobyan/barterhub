"use client";

import { useState, KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Category, CreateListingPayload } from "@/types";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./CreateListingForm.module.css";

const CATEGORIES: Category[] = [
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

const CONTACT_METHODS = ["Email", "Phone", "WhatsApp", "Telegram", "Discord"];

export default function CreateListingForm() {
  const router = useRouter();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [skillInput, setSkillInput] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<CreateListingPayload>({
    type: "offer",
    title: "",
    description: "",
    category: "Technology",
    skills: [],
    authorName: "",
    authorEmail: "",
    location: "",
    contactMethod: "Email",
  });

  function set<K extends keyof CreateListingPayload>(
    key: K,
    value: CreateListingPayload[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  }

  function addSkill() {
    const s = skillInput.trim();
    if (!s || form.skills.includes(s)) return;
    set("skills", [...form.skills, s]);
    setSkillInput("");
  }

  function removeSkill(skill: string) {
    set("skills", form.skills.filter((s) => s !== skill));
  }

  function handleSkillKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!form.title.trim()) newErrors.title = t.create.errorTitle;
    if (!form.description.trim()) newErrors.description = t.create.errorDescription;
    if (!form.authorName.trim()) newErrors.authorName = t.create.errorName;
    if (!form.authorEmail.trim()) newErrors.authorEmail = t.create.errorEmailRequired;
    else if (!/\S+@\S+\.\S+/.test(form.authorEmail))
      newErrors.authorEmail = t.create.errorEmailInvalid;
    if (!form.location.trim()) newErrors.location = t.create.errorLocation;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/listings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to create listing");

      const listing = await res.json();
      router.push(`/listings/${listing.id}`);
    } catch {
      alert(t.create.alertError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.header}>
          <Link href="/" className={styles.backLink}>
            {t.create.backToListings}
          </Link>
          <h1 className={styles.title}>{t.create.pageTitle}</h1>
          <p className={styles.subtitle}>{t.create.pageSubtitle}</p>
        </div>

        <div className={styles.layout}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* Listing Type */}
            <div className={styles.section}>
              <p className={styles.sectionTitle}>{t.create.sectionType}</p>
              <div className={styles.typeGroup}>
                <button
                  type="button"
                  className={`${styles.typeCard} ${form.type === "offer" ? styles.selectedOffer : ""}`}
                  onClick={() => set("type", "offer")}
                >
                  <span className={styles.typeCardIcon}>🤝</span>
                  <span className={styles.typeCardLabel}>{t.create.offerLabel}</span>
                  <span className={styles.typeCardDesc}>{t.create.offerDesc}</span>
                </button>
                <button
                  type="button"
                  className={`${styles.typeCard} ${form.type === "request" ? styles.selectedRequest : ""}`}
                  onClick={() => set("type", "request")}
                >
                  <span className={styles.typeCardIcon}>🙋</span>
                  <span className={styles.typeCardLabel}>{t.create.requestLabel}</span>
                  <span className={styles.typeCardDesc}>{t.create.requestDesc}</span>
                </button>
              </div>
            </div>

            {/* Basic Info */}
            <div className={styles.section}>
              <p className={styles.sectionTitle}>{t.create.sectionDetails}</p>

              <div className={styles.field}>
                <label className={styles.label}>
                  {t.create.titleLabel} <span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={t.create.titlePlaceholder}
                  value={form.title}
                  onChange={(e) => set("title", e.target.value)}
                  maxLength={100}
                />
                {errors.title && (
                  <span className={styles.errorMsg}>{errors.title}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  {t.create.descriptionLabel} <span className={styles.required}>*</span>
                </label>
                <textarea
                  className={styles.textarea}
                  placeholder={t.create.descriptionPlaceholder}
                  value={form.description}
                  onChange={(e) => set("description", e.target.value)}
                  rows={5}
                />
                {errors.description && (
                  <span className={styles.errorMsg}>{errors.description}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{t.create.categoryLabel}</label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.select}
                    value={form.category}
                    onChange={(e) => set("category", e.target.value as Category)}
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {t.categories[c]}
                      </option>
                    ))}
                  </select>
                  <svg className={styles.selectChevron} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{t.create.skillsLabel}</label>
                <div className={styles.skillsInput}>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder={t.create.skillsPlaceholder}
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleSkillKeyDown}
                  />
                  <button type="button" className={styles.addSkillBtn} onClick={addSkill}>
                    {t.create.addSkill}
                  </button>
                </div>
                {form.skills.length > 0 && (
                  <div className={styles.skillTags}>
                    {form.skills.map((s) => (
                      <span key={s} className={styles.skillTag}>
                        {s}
                        <button
                          type="button"
                          className={styles.skillTagRemove}
                          onClick={() => removeSkill(s)}
                          aria-label={`Remove ${s}`}
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
                <p className={styles.hint}>{t.create.skillsHint}</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className={styles.section}>
              <p className={styles.sectionTitle}>{t.create.sectionInfo}</p>

              <div className={styles.field}>
                <label className={styles.label}>
                  {t.create.nameLabel} <span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={t.create.namePlaceholder}
                  value={form.authorName}
                  onChange={(e) => set("authorName", e.target.value)}
                />
                {errors.authorName && (
                  <span className={styles.errorMsg}>{errors.authorName}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  {t.create.emailLabel} <span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="email"
                  placeholder={t.create.emailPlaceholder}
                  value={form.authorEmail}
                  onChange={(e) => set("authorEmail", e.target.value)}
                />
                {errors.authorEmail && (
                  <span className={styles.errorMsg}>{errors.authorEmail}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>
                  {t.create.locationLabel} <span className={styles.required}>*</span>
                </label>
                <input
                  className={styles.input}
                  type="text"
                  placeholder={t.create.locationPlaceholder}
                  value={form.location}
                  onChange={(e) => set("location", e.target.value)}
                />
                {errors.location && (
                  <span className={styles.errorMsg}>{errors.location}</span>
                )}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>{t.create.contactLabel}</label>
                <div className={styles.selectWrapper}>
                  <select
                    className={styles.select}
                    value={form.contactMethod}
                    onChange={(e) => set("contactMethod", e.target.value)}
                  >
                    {CONTACT_METHODS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                  <svg className={styles.selectChevron} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? (
                t.create.publishing
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t.create.publishBtn}
                </>
              )}
            </button>
          </form>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.tip}>
              <p className={styles.tipTitle}>{t.create.tipsTitle}</p>
              <ul className={styles.tipList}>
                {t.create.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className={styles.previewCard}>
              <p className={styles.previewTitle}>{t.create.previewTitle}</p>
              <div className={styles.previewContent}>
                <div className={styles.previewItem}>
                  <strong>{t.create.previewType}</strong>
                  {form.type === "offer" ? t.create.previewOffering : t.create.previewRequesting}
                </div>
                <div className={styles.previewItem}>
                  <strong>{t.create.previewTitleLabel}</strong>
                  {form.title || <span className={styles.previewEmpty}>{t.create.notSetYet}</span>}
                </div>
                <div className={styles.previewItem}>
                  <strong>{t.create.previewCategory}</strong>
                  {t.categories[form.category]}
                </div>
                {form.skills.length > 0 && (
                  <div className={styles.previewItem}>
                    <strong>{t.create.previewSkills}</strong>
                    {form.skills.join(", ")}
                  </div>
                )}
                <div className={styles.previewItem}>
                  <strong>{t.create.previewAuthor}</strong>
                  {form.authorName || <span className={styles.previewEmpty}>{t.create.notSetYet}</span>}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
