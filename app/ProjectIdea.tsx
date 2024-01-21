import PROJECT_IDEAS from "./ideas.json";

export default function ProjectIdea() {
  const { ideas } = PROJECT_IDEAS;
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  return (
    <div className="mt-8">
      <h2 className="text-center text-xl lg:text-4xl">
        {randomIdea.description_short}
      </h2>
    </div>
  );
}
