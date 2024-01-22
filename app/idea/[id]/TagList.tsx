import Tag from "@/app/idea/[id]/Tag";

export default function TagList({ tags }: { tags: string[] }) {
  return tags?.length ? (
    <>
      <ul className="flex flex-wrap">
        {tags.map((tag) => (
          <li key={tag}>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
    </>
  ) : null;
}
