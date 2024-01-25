import { VscChevronLeft, VscGithub, VscTwitter } from "react-icons/vsc";
import Link from "next/link";

export default function Actions({
  projectName,
  projectDescription,
  containerClasses,
}: {
  projectName: string;
  projectDescription: string;
  containerClasses?: string;
}) {
  const parsedProjectDescription = encodeURIComponent(projectDescription);
  const repoLink = `https://github.com/new?name=${projectName}&description=${parsedProjectDescription}`;
  const tweetLink = `https://twitter.com/intent/tweet?text=I've accepted the challenge of building ${projectName}! Follow to keep me accountable and see my progress as I build in public! Get an idea for your next web project at https://webideaforge.vercel.app/.&hashtags=WebIdeaForge,BuildInPublic&related=_ronini`;

  return (
    <section
      className={`flex justify-center items-center gap-4 ${containerClasses}`}
    >
      <Link href="/" title="Go back">
        <VscChevronLeft size={25} />
      </Link>
      {/* TODO: Make this link prefill a tweet */}
      <Link href={tweetLink} title="Share to twitter" target="_blank">
        <VscTwitter size={25} />
      </Link>
      <Link href={repoLink} title="Create GitHub Repo" target="_blank">
        <VscGithub size={25} />
      </Link>
    </section>
  );
}
