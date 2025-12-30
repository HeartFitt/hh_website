import React from "react";

export function meta() {
  return [
    { title: "Heart Health & Longevity • Simple Tips" },
    {
      name: "description",
      content:
        "Heart health and longevity: simple, science-backed tips from trusted sources.",
    },
  ];
}

const updatedDate = "December 30, 2025";

const sections = [
  {
    title: "Heart Health & Longevity: Simple, Science-Backed Tips",
    paragraphs: [
      "Want to live longer and feel better? Your heart might be the key — and the good news is that small, smart habits can make a big difference.",
      "Leading health organizations agree: daily movement, heart-healthy nutrition, and maintaining cardiorespiratory fitness can significantly improve both lifespan and quality of life.",
      `Date edited: ${updatedDate}`,
    ],
  },
  {
    title: "NIH / National Heart, Lung, and Blood Institute (NHLBI)",
    paragraphs: [
      "The NHLBI emphasizes that cardiovascular health is central to long-term longevity.",
      "Heart-healthy living — including regular physical activity, balanced nutrition, and healthy weight management — reduces the risk of heart disease and supports overall well-being.",
      "Their research highlights that prevention and consistent lifestyle choices are among the most powerful tools we have to extend healthy life expectancy.",
    ],
  },
  {
    title: "American Heart Association (AHA)",
    paragraphs: [
      "The American Heart Association introduced Life’s Essential 8 — eight key metrics that define optimal heart health.",
      "These include eating better, being more active, avoiding nicotine, getting healthy sleep, maintaining a healthy weight, and managing cholesterol, blood sugar, and blood pressure.",
      "Together, these behaviors form a practical roadmap for improving heart health and reducing the risk of cardiovascular disease.",
    ],
  },
  {
    title: "Harvard T.H. Chan School of Public Health",
    paragraphs: [
      "Harvard researchers report that additional physical activity beyond the minimum guidelines may further increase lifespan.",
      "Even moderate increases in weekly exercise are associated with lower mortality risk, especially from cardiovascular causes.",
      "The takeaway is simple: moving more than you do today — even without intense workouts — can meaningfully benefit long-term health.",
    ],
  },
  {
    title: "Cardiorespiratory Fitness & Longevity",
    paragraphs: [
      "Studies consistently show that cardiorespiratory fitness is one of the strongest predictors of longevity.",
      "Higher fitness levels are linked to lower all-cause mortality, regardless of age or body weight.",
      "VO₂ max, a common measure of aerobic fitness, is closely associated with reduced risk of heart disease and premature death.",
    ],
  },
  {
    title: "Key Takeaway",
    paragraphs: [
      "You don’t need to run marathons or follow extreme routines to protect your heart.",
      "Simple habits — moving more, eating well, and staying active — can add years to your life and make those years healthier.",
      "Inspired by science and made simple, these principles are easy to share and even easier to start today.",
    ],
  },
];

export default function LongevityTips() {
  return (
    <div className="pt-32 px-4 max-w-[60rem] mx-auto text-neutral-100">
      <h1 className="mb-2">
        Heart Health & Longevity: Simple Tips
      </h1>

      <p className="text-sm text-neutral-400 mb-8">
        Last updated {updatedDate}
      </p>

      <div className="flex flex-col gap-8">
        {sections.map((sec) => (
          <section key={sec.title}>
            <h3 className="mb-2">{sec.title}</h3>
            {sec.paragraphs.map((para, i) => (
              <p key={i} className="text-neutral-200 mb-3 leading-relaxed">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="h-40" />
    </div>
  );
}
