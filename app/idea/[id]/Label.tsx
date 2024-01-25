export default function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="uppercase text-sm font-bold tracking-wide text-zinc-300">
      {children}
    </span>
  );
}
