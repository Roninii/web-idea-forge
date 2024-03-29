import Badge from "@/app/idea/[id]/Badge";
import Label from "@/app/idea/[id]/Label";

export default function StackRecommendations({
  recommended_stack,
  className,
}: {
  recommended_stack: string[];
  className?: string;
}) {
  return recommended_stack?.length ? (
    <section className={className}>
      <Label>Recommended Stack</Label>
      <p className="text-sm text-zinc-400">
        These are just suggestions to get you started! Intended more to aleviate
        friction between getting an idea and getting started. Feel free to use
        whatever you are most comfortable with, or feel free to use a suggestion
        as an opportunity to try something new!
      </p>
      <ul className="mt-4 flex flex-wrap gap-4">
        {recommended_stack.map((stackItem) => (
          <li key={stackItem}>
            <Badge text={stackItem} />
          </li>
        ))}
      </ul>
    </section>
  ) : null;
}
