import { PricingTable } from "@clerk/nextjs";

// Prices are fresh for one hour max
export const revalidate = 3600;

export default async function PricingPage() {
  return (
    <main className="max-w-7xl justify-center mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PricingTable
        appearance={{
          elements: {
            "cl-pricingTable:last-child": {
              justifySelf: "center",
            },
          },
        }}
      ></PricingTable>
    </main>
  );
}
