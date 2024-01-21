import PROJECT_IDEAS from "@/app/ideas.json";
import StackRecommendations from "@/app/idea/[id]/StackRecommendations";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { ideas } = PROJECT_IDEAS;
  const idea = ideas.find((idea) => idea.id === parseInt(params.id));

  return (
    <main className="p-8">
      <div className="max-w-screen-md mx-auto bg-zinc-950 rounded p-8">
        <h1 className="text-6xl text-gradient font-medium text-center mb-8">
          {idea?.description_short}
        </h1>
        <p className="mb-8">{idea?.description_long}</p>
        <StackRecommendations
          recommended_stack={idea?.recommended_stack ?? []}
        />
        {idea?.tags.length ? (
          <>
            <ul>
              {idea?.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </main>
  );
}
