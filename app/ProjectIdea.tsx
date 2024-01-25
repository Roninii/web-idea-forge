"use client";
import { useState } from "react";
import PROJECT_IDEAS from "./ideas.json";
import Link from "next/link";

export default function ProjectIdea() {
  const { ideas } = PROJECT_IDEAS;
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  const [idea, setIdea] = useState(randomIdea);
  const [previousIdeas, setPreviousIdeas] = useState<(typeof idea)[]>([]);

  const newIdea = () => {
    // Track previously shown ideas to avoid showing the same idea again.
    setPreviousIdeas([...previousIdeas, idea]);
    if (previousIdeas.length === ideas.length) setPreviousIdeas([]);

    // Skip filter if previousIdeas is empty
    const unusedIdeas = previousIdeas.length
      ? ideas.filter((idea) => !previousIdeas.includes(idea))
      : ideas;

    const newRandomIdea =
      unusedIdeas[Math.floor(Math.random() * unusedIdeas.length)];
    setIdea(newRandomIdea);
  };

  return (
    <div className="mt-8 grid gap-4">
      <h2 className="text-center text-xl lg:text-4xl">
        {idea.description_short}
      </h2>
      <div className="flex justify-center items-center gap-4">
        <Link
          href={`/idea/${idea.id}`}
          className="text-gray-400 text-center text-lg lg:text-xl hover:text-gradient"
        >
          More Info
        </Link>
        |
        <button
          onClick={newIdea}
          className="text-gray-400 text-center text-lg lg:text-xl hover:text-gradient"
        >
          New Idea
        </button>
      </div>
    </div>
  );
}
