"use client";
import PROJECT_IDEAS from "@/app/ideas.json";
import StackRecommendations from "@/app/idea/[id]/StackRecommendations";
import TagList from "@/app/idea/[id]/TagList";
import Actions from "./Actions";
import Transition from "@/app/Transition";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { ideas } = PROJECT_IDEAS;
  const idea = ideas.find((idea) => idea.id === parseInt(params.id));

  return (
    <main className="p-8">
      <Transition>
        <div className="from-vermilion-500 to-gold-500 mx-auto max-w-screen-md rounded-md bg-gradient-to-r p-1 text-gray-100">
          <article className="rounded bg-zinc-950 p-8">
            <h1 className="text-gradient mb-8 text-center text-6xl font-medium">
              {idea?.description_short}
            </h1>
            <p>{idea?.description_long}</p>
            <StackRecommendations
              className="mt-8"
              recommended_stack={idea?.recommended_stack ?? []}
            />
            <TagList className="mt-8" tags={idea?.tags ?? []} />
            <Actions
              containerClasses="mt-8"
              projectName={idea?.description_short ?? ""}
              projectDescription={idea?.description_long ?? ""}
            />
          </article>
        </div>
      </Transition>
    </main>
  );
}
