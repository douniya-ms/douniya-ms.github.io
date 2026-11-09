export function ColumnRules() {
  return (
    <div
      aria-hidden
      className="column-rules pointer-events-none absolute inset-0 z-0 hidden lg:block"
    >
      {/* 1. Reversed-L Indicator Bar: Leftmost Gutter splashes with Moss Green */}
      <div
        className="absolute inset-y-0 bg-moss animate-moss-splash"
        style={{ left: 0, width: 'var(--gutter)', animationDelay: '0.6s' }}
      />
      
      {/* 2. Grid Columns Backgrounds (Sequential Drop) */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`bg-${i}`}
          className="absolute inset-y-0 bg-lavender animate-line-drop"
          style={{
            left: `calc(var(--gutter) + (100% - (2 * var(--gutter))) * ${i / 6})`,
            width: `calc((100% - (2 * var(--gutter))) / 6)`,
            animationDelay: `${i * 0.08}s`, 
          }}
        />
      ))}

      {/* 3. Right Gutter Background */}
      <div
        className="absolute inset-y-0 bg-lavender animate-line-drop"
        style={{ right: 0, width: 'var(--gutter)', animationDelay: '0.48s' }}
      />

      {/* 4. Grid Lines */}
      {Array.from({ length: 7 }, (_, i) => (
        <span
          key={`line-${i}`}
          className="animate-line-drop"
          style={{
            left: `calc(var(--gutter) + (100% - (2 * var(--gutter))) * ${i / 6})`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  )
}