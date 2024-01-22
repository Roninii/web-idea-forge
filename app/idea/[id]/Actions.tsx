export default function Actions({
  projectName,
  projectDescription,
  containerClasses,
}: {
  projectName: string;
  projectDescription: string;
  containerClasses?: string;
}) {
  const actions = [
    {
      // TODO: Have this prepopulate a tweet https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/overview
      name: "X",
      label: "Share to X",
      icon: "X",
      href: "https://x.com",
    },
    {
      // TODO: Have this create a GH repo and prepopulate the name and description
      name: "GitHub",
      label: "Create a new GitHub repo",
      icon: "GitHub",
      href: "https://github.com",
    },
    {
      // TODO: Have this present a different project idea
      name: "Refresh",
      label: "Generate a new project idea",
      icon: "Refresh",
      href: null,
    },
  ];

  return (
    <section
      className={`flex justify-center items-center gap-4 ${containerClasses}`}
    >
      Actions
    </section>
  );
}
