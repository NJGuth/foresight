export default function ScrollTest() {
  return (
    <div className="gap-4 grid lg:grid-cols-2">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className={`min-h-[400px] border bg-card rounded-lg grid grid-cols-2 gap-4 p-12 `}
        >
          Page content {i + 1}
        </div>
      ))}
    </div>
  );
}
