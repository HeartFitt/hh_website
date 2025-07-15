import type { Route } from "./+types/home";
import { Welcome } from "../pages/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
    <div className="flex max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        {/* Navigation */}
        <Welcome />
        {/* Footer */}
      </div>
    </div>
    </>
  )
}
