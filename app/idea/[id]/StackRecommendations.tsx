export default function StackRecommendations({
  recommended_stack,
}: {
  recommended_stack: string[];
}) {
  return recommended_stack?.length ? (
    <>
      <span>Recommended Stack</span>
      <ul>
        {recommended_stack.map((stackItem) => (
          <li key={stackItem}>{stackItem}</li>
        ))}
      </ul>
    </>
  ) : null;
}
