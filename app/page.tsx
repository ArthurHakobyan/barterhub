import { getAllListings } from "@/lib/store";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const listings = getAllListings();
  const offerCount = listings.filter((l) => l.type === "offer").length;
  const requestCount = listings.filter((l) => l.type === "request").length;

  return (
    <HomeClient
      listings={listings}
      offerCount={offerCount}
      requestCount={requestCount}
    />
  );
}
