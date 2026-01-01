import React from "react";
import { Link } from "react-router";

export function meta() {
  return [
    { title: "Heart Health & Longevity • Simple Tips" },
    {
      name: "description",
      content:
        "Heart Health & Longevity: Simple, science-backed tips from trusted sources.",
    },
  ];
}

const updatedDate = "December 30, 2025";

const sections = [
  {
    title: "1. NIH / National Heart, Lung, and Blood Institute (NIH/NHLBI)",
    paragraphs: [
      "Powering longevity through heart-healthy living.",
    ],
    links: [
      {
        label: "Read more on NHLBI",
        to: "https://www.nhlbi.nih.gov/news/2024/cardiovascular-health-powering-longevity-through-heart-healthy-living",
      },
    ],
    footer: "NHLBI, NIH",
  },
  {
    title: "2. American Heart Association (AHA)",
    paragraphs: [
      "Life’s Essential 8 – The 8 key metrics for heart health.",
    ],
    links: [
      {
        label: "Learn about Life’s Essential 8",
        to: "https://www.heart.org/en/healthy-living/healthy-lifestyle/lifes-essential-8",
      },
      {
        label: "See the science (Presidential Advisory)",
        to: "https://www.heart.org/en/healthy-living/healthy-lifestyle/lifes-essential-8",
      },
      {
        label: "AHA Physical Activity Guidelines",
        to: "https://www.heart.org/en/healthy-living/fitness/fitness-basics/aha-recs-for-physical-activity-in-adults",
      },
    ],
    footer: "www.heart.org",
  },
  {
    title: "3. Harvard T.H. Chan School of Public Health",
    paragraphs: [
      "Extra exercise may lead to a longer life.",
    ],
    links: [
      {
        label: "Harvard Health article",
        to: "https://www.health.harvard.edu/heart-health/extra-exercise-may-lead-to-a-longer-life",
      },
      {
        label: "Harvard Public Health update",
        to: "https://hsph.harvard.edu/news/exercising-more-than-recommended-could-lengthen-life-study-suggests/",
      },
      {
        label: "Harvard Study of Adult Development",
        to: "https://adultdevelopment.hsph.harvard.edu/"
      }
    ],
    footer: "Harvard Health & Harvard Public Health",
  },
  {
    title: "4. Cardiorespiratory Fitness & Longevity Studies",
    paragraphs: [
      "How fit you are affects how long you live.",
    ],
    links: [
      {
        label: "Study: Fitness linked to lower mortality",
        to: "https://pubmed.ncbi.nlm.nih.gov/35766027/",
      },
      {
        label: "VO₂ max & mortality risk (Wikipedia summary)",
        to: "https://en.wikipedia.org/wiki/VO2_max",
      },
      {
        label: "Additional longevity study",
        to: "https://pubmed.ncbi.nlm.nih.gov/30646252/",
      },
    ],
    footer: "PubMed & Wikipedia",
  },
  {
    title: "💡 Quick takeaway",
    paragraphs: [
      "You don’t need to run marathons. Just moving more, eating well, and staying active can add years to your life — and make those years healthier.",
      "🌿 Inspired by science, made simple. Share this with someone who needs a little heart boost today.",
    ],
  },
];

export default function LongevityTips() {
  return (
    <div className="pt-32 px-4 max-w-[60rem] mx-auto text-neutral-100">
      <h1 className="mb-2">Heart Health & Longevity: Simple Tips</h1>

      <p className="text-sm text-neutral-400 mb-8">
        Last updated {updatedDate}
      </p>

      <div className="flex flex-col gap-10">
        {sections.map((sec) => (
          <section key={sec.title}>
            <h3 className="mb-3">{sec.title}</h3>

            {sec.paragraphs?.map((para, i) => (
              <p
                key={i}
                className="text-neutral-200 mb-3 leading-relaxed"
              >
                {para}
              </p>
            ))}

            {sec.links && (
              <ul className="mt-3 mb-3 list-disc list-inside space-y-2">
                {sec.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="underline text-neutral-100 hover:text-neutral-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {sec.footer && (
              <p className="text-sm text-neutral-400 mt-2">
                {sec.footer}
              </p>
            )}
          </section>
        ))}
      </div>

      <div className="h-40" />
    </div>
  );
}
