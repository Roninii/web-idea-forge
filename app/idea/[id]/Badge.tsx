export default function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 rounded border border-white flex items-center justify-center">
      {text}
    </span>
  );
}
