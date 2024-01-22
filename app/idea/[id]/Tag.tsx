export default function Tag({
  tag,
  height = 34,
}: {
  tag: string;
  height: number;
}) {
  const tagCornerYTop = height / 2 + 1;
  const tagCornerYBottom = height / 2 - 1;
  return (
    <span className="flex items-center">
      <svg width="18" height={height}>
        <path
          d={`M0,${tagCornerYTop} L7,2 L18,2 M0,${tagCornerYBottom} L7,${
            height - 2
          } L18,${height - 2}`}
          fill="none"
          stroke="#ffd700"
          strokeWidth="2"
        />
        <circle
          r="3"
          cx="12.5"
          cy="16"
          fill="none"
          stroke="#ffd700"
          strokeWidth="2"
        />
      </svg>
      <span className="border-2 border-l-0 border-gold flex items-center h-8 p-2 pl-1">
        {tag}
      </span>
    </span>
  );
}
