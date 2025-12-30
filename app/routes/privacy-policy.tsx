import React from "react";
import Button from "~/hkit/Button";
import { Download } from "lucide-react";

export function meta() {
  return [
    { title: "Privacy Policy • HeartHero" },
    { name: "description", content: "Privacy practices for HeartHero Fitness" },
  ];
}

const effectiveDate = "December 30, 2025";

// Centralized content used for rendering and download
const sections = [
  {
    title: "Overview",
    paragraphs: [
      "This Privacy Policy explains how HeartHero (\"we\", \"us\") collects, uses, and protects information when you visit our website and submit forms for personal waitlist or business inquiries.",
      `Effective date: ${effectiveDate}`,
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "Information you provide directly via our forms:",
      "Personal Waitlist: first name, last name, email, phone, your fitness goals, whether a doctor has approved you to work out (self-reported), and whether you own a Bluetooth heart-rate strap. You may also set preferences to opt out of SMS or email notifications.",
      "Business Inquiry: first name, last name, club or company name, club address, approximate member count, and whether your location offers spinning/indoor cycling/cardio theatre classes.",
      "System information: basic technical details sent with your submission (e.g., request metadata) necessary to operate our service.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "Create and manage a lead in our customer relationship system to follow up on your request (personal waitlist or business inquiry).",
      "Communicate with you regarding updates, onboarding, or partnership opportunities, respecting any opt-out choices you select for SMS or email.",
      "Personalize product messaging based on your goals and interests.",
      "Operate, maintain, and improve our website and forms.",
    ],
  },
  {
    title: "Legal Basis",
    paragraphs: [
      "We process your information with your consent (when you submit the form), and to take steps at your request prior to entering into a contract (e.g., responding to inquiries).",
    ],
  },
  {
    title: "SMS and Email Preferences",
    paragraphs: [
      "The personal waitlist form allows you to opt out of SMS and/or email notifications. We honor these preferences and will not send messages through the opted-out channels.",
    ],
  },
  {
    title: "Data Sharing",
    paragraphs: [
      "We do not sell your personal information.",
      "We may share information with service providers that help us operate our website and manage leads (e.g., cloud hosting and CRM providers). These providers are bound by contractual obligations to protect your data and use it only to provide services to us.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain information for as long as necessary to fulfill the purposes described above and to comply with legal, accounting, or reporting requirements. If you would like us to delete your information, please submit a request through our website forms.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We implement reasonable safeguards to protect the information you provide. No system is perfectly secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Children",
    paragraphs: [
      "Our website and forms are intended for adults. We do not knowingly collect information from children.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: [
      "Depending on your location, you may have rights to access, correct, or delete your information. To exercise these rights, contact us via the website forms and we will respond as required by applicable law.",
    ],
  },
  {
    title: "Changes",
    paragraphs: [
      "We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "To ask questions or make requests regarding this Privacy Policy, please reach out using the forms on our website.",
    ],
  },
];

function buildPlainText(): string {
  const lines: string[] = [];
  lines.push("Privacy Policy");
  lines.push("");
  for (const s of sections) {
    lines.push(s.title);
    for (const p of s.paragraphs) {
      lines.push(p);
    }
    lines.push("");
  }
  return lines.join("\n");
}

export default function PrivacyPolicy() {
  const policyText = buildPlainText();

  const handleDownload = () => {
    const blob = new Blob([policyText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "privacy-policy.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-32 px-4 max-w-[60rem] mx-auto text-neutral-100">
      <h1 className="mb-2">Privacy Policy</h1>
      <p className="text-sm text-neutral-400 mb-8">Effective {effectiveDate}</p>

      <div className="flex flex-col gap-8">
        {sections.map((sec) => (
          <section key={sec.title}>
            <h3 className="mb-2">{sec.title}</h3>
            {sec.paragraphs.map((para, i) => (
              <p key={i} className="text-neutral-200 mb-3">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-10">
        <Button label="Download Privacy Policy" onClick={handleDownload} icon={<Download />} fillWidth />
      </div>
      <br className="py-[10rem]" />
    </div>
  );
}
