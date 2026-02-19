import { NextRequest, NextResponse } from "next/server";
import { getAllListings, createListing } from "@/lib/store";
import { CreateListingPayload } from "@/types";

export async function GET() {
  const listings = getAllListings();
  return NextResponse.json(listings);
}

export async function POST(req: NextRequest) {
  try {
    const body: CreateListingPayload = await req.json();

    if (!body.type || !body.title || !body.description || !body.category) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const listing = createListing(body);
    return NextResponse.json(listing, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
