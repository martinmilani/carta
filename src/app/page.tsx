import api from "@/api";
import Link from "next/link";

export default async function Home() {
  const caseStudies = await api.caseStudy.list();
  return (
    <article className="grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-8">
      {caseStudies.map((caseStudy) => (
        <Link key={caseStudy.id} href={`/${caseStudy.id}`}>
          <hgroup className="grid gap-2">
            <img
              src={caseStudy.hero_image}
              alt={caseStudy.title}
              className="w-full object-cover h-64 rounded-lg"
            />
            <div>
              <h2 className="font-bold text-xl">{caseStudy.title}</h2>
              <p className="opacity-80">{caseStudy.teaser}</p>
            </div>
          </hgroup>
        </Link>
      ))}
    </article>
  );
}
