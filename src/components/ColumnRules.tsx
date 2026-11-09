export function ColumnRules() {
  return (
    <div
      aria-hidden
      className="column-rules pointer-events-none absolute inset-0 z-20 hidden lg:block"
    >
      {Array.from({ length: 7 }, (_, i) => (
        <span
          key={i}
          style={{
            left: `calc(var(--gutter) + (100% - (2 * var(--gutter))) * ${i / 6})`,
          }}
        />
      ))}
    </div>
  )
}