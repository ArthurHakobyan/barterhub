import fs from "fs";
import path from "path";
import { Listing, CreateListingPayload } from "@/types";

const DATA_FILE = path.join(process.cwd(), "data", "listings.json");

function readListings(): Listing[] {
  try {
    const raw = fs.readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Listing[];
  } catch {
    return [];
  }
}

function writeListings(listings: Listing[]): void {
  fs.writeFileSync(DATA_FILE, JSON.stringify(listings, null, 2), "utf-8");
}

export function getAllListings(): Listing[] {
  return readListings();
}

export function getListingById(id: string): Listing | null {
  const listings = readListings();
  return listings.find((l) => l.id === id) ?? null;
}

export function createListing(payload: CreateListingPayload): Listing {
  const listings = readListings();
  const newListing: Listing = {
    ...payload,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  listings.unshift(newListing);
  writeListings(listings);
  return newListing;
}

export function deleteListing(id: string): boolean {
  const listings = readListings();
  const index = listings.findIndex((l) => l.id === id);
  if (index === -1) return false;
  listings.splice(index, 1);
  writeListings(listings);
  return true;
}
