import PROJECT_IDEAS from "@/app/ideas.json";

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const { ideas } = PROJECT_IDEAS;
  const idea = ideas.find((idea) => idea.id === parseInt(params.id));

  return (
    <>
      <h1>{idea?.description_short}</h1>
      <p>{idea?.description_long}</p>
      {idea?.recommended_stack.length ? (
        <>
          <h2>Recommended Stack</h2>
          <ul>
            {idea?.recommended_stack.map((stackItem) => (
              <li key={stackItem}>{stackItem}</li>
            ))}
          </ul>
        </>
      ) : null}
      {idea?.tags.length ? (
        <>
          <h2>Tags</h2>
          <ul>
            {idea?.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </>
      ) : null}
    </>
  );
}
