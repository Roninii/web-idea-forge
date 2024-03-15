"use client";
import { useEffect, useState } from "react";
import PROJECT_IDEAS from "./ideas.json";
import Link from "next/link";
import { VscArrowSmallRight } from "react-icons/vsc";

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
        <div className="banner">
          <h2
            className="glow text-center text-6xl lg:text-8xl"
            aria-hidden="true"
          >
            {idea.description_short}
          </h2>
          <h2 className="glow text-center text-6xl lg:text-8xl">
            {idea.description_short}
          </h2>
        </div>
      ) : (
        <h2 className="text-center text-xl lg:text-4xl">Forging...</h2>
      )}
      <div className="flex justify-center">
        <Link
          href={`/idea/${idea?.id}`}
          className="group relative px-8 py-4 text-2xl lg:text-3xl"
        >
          <span className="group-hover:text-gradient text-center text-gray-400">
            More Info
          </span>
          <VscArrowSmallRight className="absolute right-0 top-1/2 ml-2 -translate-y-1/2 transform  text-white opacity-0 transition-all duration-300 ease-out group-hover:inline group-hover:translate-x-2 group-hover:opacity-100" />
          <hr className="from-vermilion-500 to-gold-500 mx-auto h-0.5 transform border-0 bg-gradient-to-r opacity-0 duration-300 group-hover:translate-y-1 group-hover:opacity-100" />
        </Link>
      </div>
      <button
        onClick={newIdea}
        className="hover:text-gradient mt-8 text-center text-lg text-gray-400 lg:text-xl"
      >
        New Idea
      </button>
    </div>
  );
}
