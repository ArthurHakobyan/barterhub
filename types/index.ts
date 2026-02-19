export type ListingType = "offer" | "request";

export type Category =
  | "Technology"
  | "Design"
  | "Writing"
  | "Marketing"
  | "Education"
  | "Music"
  | "Cooking"
  | "Fitness"
  | "Legal"
  | "Finance"
  | "Other";

export interface Listing {
  id: string;
  type: ListingType;
  title: string;
  description: string;
  category: Category;
  skills: string[];
  authorName: string;
  authorEmail: string;
  location: string;
  createdAt: string;
  contactMethod: string;
}

export interface CreateListingPayload {
  type: ListingType;
  title: string;
  description: string;
  category: Category;
  skills: string[];
  authorName: string;
  authorEmail: string;
  location: string;
  contactMethod: string;
}
