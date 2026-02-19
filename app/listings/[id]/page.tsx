import { getListingById } from "@/lib/store";
import ListingDetailView from "./ListingDetailView";
import ListingNotFound from "./ListingNotFound";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) return { title: "Not Found — BarterHub" };
  return {
    title: `${listing.title} — BarterHub`,
    description: listing.description.slice(0, 150),
  };
}

export default async function ListingDetailPage({ params }: Props) {
  const { id } = await params;
  const listing = getListingById(id);

  if (!listing) {
    return <ListingNotFound />;
  }

  const initials = listing.authorName
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return <ListingDetailView listing={listing} initials={initials} />;
}
