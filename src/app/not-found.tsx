import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <section className="h-64 mx-auto text-center opacity-80">
      <Link href="/" className="underline mt-4">
        Back to list
      </Link>
      <p>This case study does not exist</p>
    </section>
  );
}
