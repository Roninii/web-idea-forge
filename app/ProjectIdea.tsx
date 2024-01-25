"use client";
import { useEffect, useState } from "react";
import PROJECT_IDEAS from "./ideas.json";
import Link from "next/link";

type Idea = {
  id: number;
  description_short: string;
  description_long: string;
  recommended_stack: string[];
  tags: string[];
};

export default function ProjectIdea() {
  const { ideas } = PROJECT_IDEAS;
  const [idea, setIdea] = useState<Idea | undefined>(undefined);
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

  useEffect(() => newIdea(), []);

  return (
    <div className="mt-8 grid gap-4">
      {idea ? (
        <h2 className="text-center text-xl lg:text-4xl">
          {idea.description_short}
        </h2>
      ) : (
        <h2 className="text-center text-xl lg:text-4xl">Forging...</h2>
      )}
      <div className="flex justify-center items-center gap-4">
        <Link
          href={`/idea/${idea?.id}`}
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
