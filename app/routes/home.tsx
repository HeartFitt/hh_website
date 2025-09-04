import type { Route } from "./+types/home";
import { Hero } from "../sections/Hero";
import NavBar from "~/components/NavBar";
import Effect from "~/sections/Effect";
import { createPortal } from "react-dom";
import ScrollFadeIn from "~/components/ScrollFadeIn";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "HeartHero Fitness" },
    { name: "Gamified, Heart-Healthy Exercise", content: "Welcome to HeartHero!" },
  ];
}

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-10 items-center">
        {/* Navigation */}
        <Hero />
        <ScrollFadeIn direction="up" delay={0.2}>
          <img src="./hh_iphone.png" className="max-w-[20rem]" alt="iphone" />
        </ScrollFadeIn>
        <ScrollFadeIn direction="up" delay={0.4}>
          <Effect />
        </ScrollFadeIn>
        {/* Footer */}
      </div>
    </>
  )
}
