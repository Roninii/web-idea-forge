import PROJECT_IDEAS from "./ideas.json";
import Link from "next/link";

export default function ProjectIdea() {
  const { ideas } = PROJECT_IDEAS;
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  return (
    <div className="mt-8 grid gap-4">
      <h2 className="text-center text-xl lg:text-4xl">
        {randomIdea.description_short}
      </h2>
      <Link
        href={`/idea/${randomIdea.id}`}
        className="text-gray-400 text-center text-lg lg:text-xl hover:text-gradient"
      >
        More Info
      </Link>
    </div>
  );
}
