import { ArrowRight } from "#/components/icons";

type DataFlowProps = {
	title: string;
	annotation: string;
	layers: { label: string; text: string }[];
	caption: string;
	className?: string;
};

/** Figma "Editable architecture diagram": stacked system layers with arrows between them. */
export function DataFlow({ title, annotation, layers, caption, className = "" }: DataFlowProps) {
	return (
		<figure className={`flex flex-col gap-7 bg-mist p-4 py-8 lg:px-[75px] lg:py-10 ${className}`}>
			<div className="type-mono flex items-center justify-between gap-4">
				<p className="uppercase text-marine">{title}</p>
				<p className="text-moss-ink">{annotation}</p>
			</div>
			<ol className="flex flex-col items-center gap-4">
				{layers.map((layer, i) => (
					<li key={layer.label} className="contents">
						{i > 0 && <ArrowRight className="rotate-90 text-marine" />}
						<div className="flex w-full flex-col gap-3 bg-lavender p-6">
							<p className="type-mono text-marine">{layer.label}</p>
							<p className="type-small text-ink">{layer.text}</p>
						</div>
					</li>
				))}
			</ol>
			<figcaption className="type-small text-marine">{caption}</figcaption>
		</figure>
	);
}
