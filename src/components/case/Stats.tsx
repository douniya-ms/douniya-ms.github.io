import type { Stat } from "#/components/case/types";

/** Big numbers with a mono caption: the figures that make a story credible. */
export function Stats({ items, variant = "row" }: { items: Stat[]; variant?: "row" | "panel" }) {
	if (variant === "panel") {
		return (
			<dl className="flex flex-col justify-center gap-8 bg-mist p-8 lg:gap-10 lg:px-[75px] lg:py-16">
				{items.map((stat) => (
					<StatItem key={stat.label} stat={stat} />
				))}
			</dl>
		);
	}
	return (
		<dl className="grid grid-cols-2 gap-6 pt-2 lg:grid-cols-[repeat(auto-fit,minmax(9rem,1fr))]">
			{items.map((stat) => (
				<StatItem key={stat.label} stat={stat} />
			))}
		</dl>
	);
}

function StatItem({ stat }: { stat: Stat }) {
	return (
		<div className="flex flex-col gap-3 border-t border-marine pt-4">
			<dt className="order-2 type-mono uppercase text-moss-ink">{stat.label}</dt>
			<dd className="order-1 text-[40px] leading-none font-semibold tracking-[-0.04em] text-marine lg:text-[56px]">
				{stat.value}
			</dd>
		</div>
	);
}
