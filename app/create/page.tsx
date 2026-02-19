import CreateListingForm from "@/components/CreateListingForm/CreateListingForm";

export const metadata = {
  title: "Post a Listing — BarterHub",
  description: "Add a new offer or request to the BarterHub marketplace.",
};

export default function CreatePage() {
  return <CreateListingForm />;
}
