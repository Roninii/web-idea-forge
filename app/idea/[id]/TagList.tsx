import Tag from "@/app/idea/[id]/Tag";

export default function TagList({
  tags,
  className,
}: {
  tags: string[];
  className?: string;
}) {
  return tags?.length ? (
    <>
      <ul className={`flex flex-wrap ${className}`}>
        {tags.map((tag) => (
          <li key={tag}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </>
  ) : null;
}
