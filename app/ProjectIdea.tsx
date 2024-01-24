"use client";
import { useState } from "react";
import PROJECT_IDEAS from "./ideas.json";
import Link from "next/link";

export default function ProjectIdea() {
  const { ideas } = PROJECT_IDEAS;
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  const [idea, setIdea] = useState(randomIdea);

  const newIdea = () => {
    const newRandomIdea = ideas[Math.floor(Math.random() * ideas.length)];
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
