import api from "@/api";
import Link from "next/link";
import React from "react";

export default async function IdPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const caseStudy = await api.caseStudy.fetch(Number(id));

  return (
    <article className="grid gap-8">
      <Link href="/" className="opacity-80">
        ← Back to list
      </Link>
      <hgroup className="grid gap-8">
        <h2 className="font-medium text-5xl">{caseStudy.title}</h2>
        <img
          src={caseStudy.hero_image}
          alt={caseStudy.title}
          className="w-full object-cover h-64 rounded-lg"
        />
        {caseStudy.sections.map((section, index) => (
          <section key={String(index)} className="grid gap-2">
            {section.title ? (
              <h3 className="text-lg font-bold">{section.title}</h3>
            ) : null}
            <section className="grid ga">
              {section.body_elements.map((element, index) =>
                typeof element === "string" ? (
                  <p className="py-4" key={index}>
                    {element}
                  </p>
                ) : (
                  <section key={index} className="flex justify-center my-8">
                    <img
                      alt={section.title || caseStudy.title}
                      className="w-full object-cover h-80 w-2/3 rounded-lg"
                      src={element.image_url}
                    />
                  </section>
                )
              )}
            </section>
          </section>
        ))}
      </hgroup>
    </article>
  );
}
