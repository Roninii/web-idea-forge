import ProjectIdea from "./ProjectIdea";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-24">
      <div className="banner">
        <h1
          className="text-6xl lg:text-9xl font-medium coming-soon"
          aria-hidden="true"
        >
          Web Idea Forge
        </h1>
        <h1 className="text-6xl lg:text-9xl text-center coming-soon">
          Web Idea Forge
        </h1>
      </div>
      <ProjectIdea />
    </main>
  );
}
