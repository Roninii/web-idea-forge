export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="from-vermilion-500 to-gold-500 rounded bg-gradient-to-tr p-[2px]">
      <button className="from-vermilion-500 to-gold-500 rounded bg-black px-4 py-2 transition-all duration-300 ease-out hover:bg-gradient-to-r">
        {children}
      </button>
    </div>
  );
}
