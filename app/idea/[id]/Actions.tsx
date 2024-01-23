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
  const repoLink = `https://github.com/new?name=${projectName}&description=${projectDescription}`;

  return (
    <section
      className={`flex justify-center items-center gap-4 ${containerClasses}`}
    >
      <Link href="/" title="Go back">
        <VscChevronLeft size={25} />
      </Link>
      {/* TODO: Make this link prefill a tweet */}
      <Link href="https://x.com" title="Share to twitter">
        <VscTwitter size={25} />
      </Link>
      <Link href={repoLink} title="Create GitHub Repo">
        <VscGithub size={25} />
      </Link>
    </section>
  );
}
