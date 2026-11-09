const COLUMNS = 6
const STEP = 0.08 // seconds between columns

// left edge of line/column i, measured between the two gutters
const edge = (i: number) =>
  `calc(var(--gutter) + (100% - 2 * var(--gutter)) * ${i / COLUMNS})`

export function ColumnRules() {
  return (
    <>
      {/* Layer A (z-0): backgrounds, behind the portrait */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        {/* Left gutter, step 1: lavender drops in first, with the column group */}
        <div
          className="absolute inset-y-0 left-0 animate-line-drop bg-lavender"
          style={{ width: 'var(--gutter)' }}
        />
        {/* Left gutter, step 2: moss rises from the bottom, covering the lavender */}
        <div
          className="absolute inset-y-0 left-0 animate-moss-splash bg-moss"
          style={{ width: 'var(--gutter)', animationDelay: '0.6s' }}
        />

        {Array.from({ length: COLUMNS }, (_, i) => (
          <div
            key={i}
            className="absolute inset-y-0 animate-line-drop bg-lavender"
            style={{
              left: edge(i),
              width: `calc((100% - 2 * var(--gutter)) / ${COLUMNS})`,
              animationDelay: `${(i + 1) * STEP}s`,
            }}
          />
        ))}

        <div
          className="absolute inset-y-0 right-0 animate-line-drop bg-lavender"
          style={{ width: 'var(--gutter)', animationDelay: `${(COLUMNS + 1) * STEP}s` }}
        />
      </div>

      {/* Layer B (z-20): lines, above the portrait and moss, under the text */}
      <div aria-hidden className="column-rules pointer-events-none absolute inset-0 z-20 hidden lg:block">
        {Array.from({ length: COLUMNS + 1 }, (_, i) => (
          <span
            key={i}
            className="animate-line-drop"
            style={{ left: edge(i), animationDelay: `${(i + 1) * STEP}s` }}
          />
        ))}
      </div>
    </>
  )
}