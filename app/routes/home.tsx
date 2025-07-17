import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";
import NavBar from "~/components/NavBar";

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
      <div className="flex flex-col max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Navigation */}
          <Welcome />
          {/* Footer */}
        </div>
      </div>
    </>
  )
}
