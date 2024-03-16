import ProjectIdea from "./ProjectIdea";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center md:p-24">
      <h1 className="text-center text-4xl text-gray-100 lg:text-6xl">
        Web Idea Forge
      </h1>
      <ProjectIdea />
    </main>
  );
}
