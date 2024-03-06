export default function Badge({ text }: { text: string }) {
  return (
    <span className="border-gold-600 rounded border-2 px-4 py-2 text-zinc-200">
      {text}
    </span>
  );
}
