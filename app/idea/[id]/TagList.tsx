import Tag from "@/app/idea/[id]/Tag";
import Label from "./Label";

export default function TagList({
  tags,
  className,
}: {
  tags: string[];
  className?: string;
}) {
  return tags?.length ? (
    <section className={className}>
      <Label>Tags</Label>
      <ul className="flex flex-wrap gap-4">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}
