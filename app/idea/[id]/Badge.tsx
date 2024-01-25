export default function Badge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 rounded border-2 border-gold-600 text-zinc-200">
      {text}
    </span>
  );
}
