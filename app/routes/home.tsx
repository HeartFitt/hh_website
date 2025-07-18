import type { Route } from "./+types/home";
import { Hero } from "../sections/Hero";
import NavBar from "~/components/NavBar";
import Effect from "~/sections/Effect";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      
      <div className="flex flex-col max-w-[200rem] mx-auto">
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-10">
          {/* Navigation */}
          <Hero />
          <Effect />
          {/* Footer */}
        </div>
      </div>
    </>
  )
}
