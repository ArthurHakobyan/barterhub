export type Lang = "en" | "cs";

export const translations = {
  en: {
    // Navbar
    nav: {
      browse: "Browse",
      postListing: "Post Listing",
      newListing: "New Listing",
    },

    // Hero
    hero: {
      tagline: "Peer-to-Peer Service Exchange",
      titleLine1: "Trade Skills,",
      titleLine2: "Not Money",
      subtitle:
        "BarterHub connects people who want to exchange services. Offer what you know, request what you need — no cash required.",
      postListing: "Post a Listing",
      browseListings: "Browse Listings ↓",
      totalListings: "Total Listings",
      offers: "Offers",
      requests: "Requests",
    },

    // FilterBar
    filter: {
      searchPlaceholder: "Search by title, skill, or author…",
      all: "All",
      offers: "Offers",
      requests: "Requests",
      allCategories: "All Categories",
      listingFoundSuffix: (n: number) => (n === 1 ? "listing found" : "listings found"),
    },

    // Badge
    badge: {
      offering: "Offering",
      requesting: "Requesting",
    },

    // ListingCard
    card: {
      viewDetails: "View details →",
    },

    // Home empty state
    home: {
      noListings: "No listings found",
      noListingsText: "Try adjusting your filters or be the first to post a listing!",
      postListing: "+ Post a Listing",
    },

    // Create form
    create: {
      backToListings: "← Back to listings",
      pageTitle: "Post a New Listing",
      pageSubtitle: "Share what you offer or what you're looking for in exchange.",
      sectionType: "Listing Type",
      offerLabel: "I'm Offering",
      offerDesc: "A service or skill I can provide to others",
      requestLabel: "I'm Requesting",
      requestDesc: "A service or skill I'm looking for from others",
      sectionDetails: "Listing Details",
      titleLabel: "Title",
      titlePlaceholder: "e.g. Professional logo design for your startup",
      descriptionLabel: "Description",
      descriptionPlaceholder:
        "Describe what you're offering or requesting in detail. What will you exchange in return?",
      categoryLabel: "Category",
      skillsLabel: "Skills / Tags",
      skillsPlaceholder: "Type a skill and press Enter or Add",
      addSkill: "+ Add",
      skillsHint: "Press Enter or click Add after each skill",
      sectionInfo: "Your Information",
      nameLabel: "Your Name",
      namePlaceholder: "Full name or alias",
      emailLabel: "Email Address",
      emailPlaceholder: "your@email.com",
      locationLabel: "Location",
      locationPlaceholder: "City, Country (or Remote)",
      contactLabel: "Preferred Contact Method",
      publishing: "Publishing…",
      publishBtn: "Publish Listing",
      tipsTitle: "💡 Tips for a great listing",
      tips: [
        "Be specific about what you offer or need",
        "Mention what you'd accept in return",
        "Add relevant skill tags to get found",
        "Include your location (or say Remote)",
        "Keep your description clear and concise",
      ],
      previewTitle: "📋 Preview",
      previewType: "Type",
      previewTitleLabel: "Title",
      previewCategory: "Category",
      previewSkills: "Skills",
      previewAuthor: "Author",
      previewOffering: "🤝 Offering",
      previewRequesting: "🙋 Requesting",
      notSetYet: "Not set yet",
      // Validation
      errorTitle: "Title is required",
      errorDescription: "Description is required",
      errorName: "Your name is required",
      errorEmailRequired: "Email is required",
      errorEmailInvalid: "Enter a valid email address",
      errorLocation: "Location is required",
      // Alerts
      alertError: "Something went wrong. Please try again.",
    },

    // Listing detail
    detail: {
      backToListings: "← Back to listings",
      skillsAndTags: "Skills & Tags",
      postedBy: "Posted by",
      location: "Location",
      category: "Category",
      postedOn: "Posted on",
      interestedTitle: "Interested? Reach out!",
      preferredContact: "Preferred contact:",
      contactVia: (method: string) => `Contact via ${method}`,
      aboutPoster: "About the poster",
      prefers: (method: string) => `Prefers ${method}`,
      listingInfo: "Listing Info",
      actions: "Actions",
      deleteListing: "Delete Listing",
      deleting: "Deleting…",
      confirmDelete:
        "Are you sure you want to delete this listing? This cannot be undone.",
      deleteError: "Failed to delete listing. Please try again.",
      notFoundTitle: "Listing not found",
      notFoundText:
        "This listing may have been removed or the link is incorrect.",
      backToListingsLink: "← Back to Listings",
    },

    // Categories (for FilterBar display)
    categories: {
      All: "All",
      Technology: "Technology",
      Design: "Design",
      Writing: "Writing",
      Marketing: "Marketing",
      Education: "Education",
      Music: "Music",
      Cooking: "Cooking",
      Fitness: "Fitness",
      Legal: "Legal",
      Finance: "Finance",
      Other: "Other",
    },
  },

  cs: {
    // Navbar
    nav: {
      browse: "Procházet",
      postListing: "Přidat inzerát",
      newListing: "Nový inzerát",
    },

    // Hero
    hero: {
      tagline: "Peer-to-peer výměna služeb",
      titleLine1: "Vyměňujte dovednosti,",
      titleLine2: "ne peníze",
      subtitle:
        "BarterHub propojuje lidi, kteří chtějí vyměňovat služby. Nabídněte co umíte, poptejte co potřebujete — bez peněz.",
      postListing: "Přidat inzerát",
      browseListings: "Procházet inzeráty ↓",
      totalListings: "Inzerátů celkem",
      offers: "Nabídky",
      requests: "Poptávky",
    },

    // FilterBar
    filter: {
      searchPlaceholder: "Hledat podle názvu, dovednosti nebo autora…",
      all: "Vše",
      offers: "Nabídky",
      requests: "Poptávky",
      allCategories: "Všechny kategorie",
      listingFoundSuffix: (n: number) => {
        if (n === 1) return "inzerát nalezen";
        if (n >= 2 && n <= 4) return "inzeráty nalezeny";
        return "inzerátů nalezeno";
      },
    },

    // Badge
    badge: {
      offering: "Nabídka",
      requesting: "Poptávka",
    },

    // ListingCard
    card: {
      viewDetails: "Zobrazit detail →",
    },

    // Home empty state
    home: {
      noListings: "Žádné inzeráty nenalezeny",
      noListingsText:
        "Zkuste upravit filtry nebo buďte první, kdo přidá inzerát!",
      postListing: "+ Přidat inzerát",
    },

    // Create form
    create: {
      backToListings: "← Zpět na inzeráty",
      pageTitle: "Přidat nový inzerát",
      pageSubtitle: "Sdílejte co nabízíte nebo co hledáte výměnou.",
      sectionType: "Typ inzerátu",
      offerLabel: "Nabízím",
      offerDesc: "Služba nebo dovednost, kterou mohu nabídnout ostatním",
      requestLabel: "Poptávám",
      requestDesc: "Služba nebo dovednost, kterou hledám od ostatních",
      sectionDetails: "Detaily inzerátu",
      titleLabel: "Název",
      titlePlaceholder: "např. Profesionální návrh loga pro váš startup",
      descriptionLabel: "Popis",
      descriptionPlaceholder:
        "Popište podrobně co nabízíte nebo poptáváte. Co nabídnete výměnou?",
      categoryLabel: "Kategorie",
      skillsLabel: "Dovednosti / Štítky",
      skillsPlaceholder: "Napište dovednost a stiskněte Enter nebo Přidat",
      addSkill: "+ Přidat",
      skillsHint: "Stiskněte Enter nebo klikněte na Přidat po každé dovednosti",
      sectionInfo: "Vaše informace",
      nameLabel: "Vaše jméno",
      namePlaceholder: "Celé jméno nebo přezdívka",
      emailLabel: "E-mailová adresa",
      emailPlaceholder: "vas@email.cz",
      locationLabel: "Poloha",
      locationPlaceholder: "Město, Země (nebo Vzdálená práce)",
      contactLabel: "Preferovaný způsob kontaktu",
      publishing: "Zveřejňování…",
      publishBtn: "Zveřejnit inzerát",
      tipsTitle: "💡 Tipy pro skvělý inzerát",
      tips: [
        "Buďte konkrétní v tom, co nabízíte nebo potřebujete",
        "Uveďte, co přijmete výměnou",
        "Přidejte relevantní štítky dovedností pro lepší nalezitelnost",
        "Uveďte svou polohu (nebo napište Vzdálená práce)",
        "Udržujte popis stručný a jasný",
      ],
      previewTitle: "📋 Náhled",
      previewType: "Typ",
      previewTitleLabel: "Název",
      previewCategory: "Kategorie",
      previewSkills: "Dovednosti",
      previewAuthor: "Autor",
      previewOffering: "🤝 Nabídka",
      previewRequesting: "🙋 Poptávka",
      notSetYet: "Ještě nenastaveno",
      // Validation
      errorTitle: "Název je povinný",
      errorDescription: "Popis je povinný",
      errorName: "Vaše jméno je povinné",
      errorEmailRequired: "E-mail je povinný",
      errorEmailInvalid: "Zadejte platnou e-mailovou adresu",
      errorLocation: "Poloha je povinná",
      // Alerts
      alertError: "Něco se pokazilo. Zkuste to prosím znovu.",
    },

    // Listing detail
    detail: {
      backToListings: "← Zpět na inzeráty",
      skillsAndTags: "Dovednosti a štítky",
      postedBy: "Přidal",
      location: "Poloha",
      category: "Kategorie",
      postedOn: "Přidáno",
      interestedTitle: "Máte zájem? Kontaktujte!",
      preferredContact: "Preferovaný kontakt:",
      contactVia: (method: string) => `Kontakt přes ${method}`,
      aboutPoster: "O autorovi",
      prefers: (method: string) => `Preferuje ${method}`,
      listingInfo: "Informace o inzerátu",
      actions: "Akce",
      deleteListing: "Smazat inzerát",
      deleting: "Mazání…",
      confirmDelete:
        "Opravdu chcete smazat tento inzerát? Tuto akci nelze vrátit zpět.",
      deleteError: "Nepodařilo se smazat inzerát. Zkuste to prosím znovu.",
      notFoundTitle: "Inzerát nenalezen",
      notFoundText:
        "Tento inzerát mohl být odstraněn nebo odkaz není správný.",
      backToListingsLink: "← Zpět na inzeráty",
    },

    // Categories
    categories: {
      All: "Vše",
      Technology: "Technologie",
      Design: "Design",
      Writing: "Psaní",
      Marketing: "Marketing",
      Education: "Vzdělávání",
      Music: "Hudba",
      Cooking: "Vaření",
      Fitness: "Fitness",
      Legal: "Právní služby",
      Finance: "Finance",
      Other: "Ostatní",
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DeepString<T> = T extends string ? string : T extends (...args: any[]) => string ? (...args: any[]) => string : { [K in keyof T]: DeepString<T[K]> };

export type Translations = DeepString<(typeof translations)["en"]>;
