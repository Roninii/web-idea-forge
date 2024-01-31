import ProjectIdea from "./ProjectIdea";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center p-24">
      <h1 className="text-4xl lg:text-6xl text-center">Web Idea Forge</h1>
      <ProjectIdea />
    </main>
  );
}
