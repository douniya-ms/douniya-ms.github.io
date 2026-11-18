import { CaseHero } from "#/components/case/CaseHero";
import { Chapter, HumanQuestion, Narrative } from "#/components/case/Chapter";
import { ChapterMarker } from "#/components/case/ChapterMarker";
import { DataFlow } from "#/components/case/DataFlow";
import { OtherProjects } from "#/components/case/OtherProjects";
import { Stats } from "#/components/case/Stats";
import type { Aside, Block, CaseChapter, CaseCopy } from "#/components/case/types";
import type { ProjectCard } from "#/content/projects";
import { site } from "#/content/site";
import { getLocale } from "#/paraglide/runtime";

type Copies = Record<ReturnType<typeof getLocale>, CaseCopy>;

/** Route `head` for a case study: tab title + description in the current language. */
export function caseHead(project: ProjectCard, copies: Copies) {
	return () => ({
		meta: [
			{ title: `${project.title()} · ${site.firstName} ${site.lastName}` },
			{ name: "description", content: copies[getLocale()].intro },
		],
	});
}

/** A whole case study, rendered from its copy: hero, chapters, other projects. */
export function CaseStudy({ project, copies }: { project: ProjectCard; copies: Copies }) {
	const copy = copies[getLocale()];
	return (
		<article>
			<CaseHero
				project={project}
				intro={copy.intro}
				aim={copy.aim}
				tags={copy.tags}
				readingCue={copy.readingCue}
				readingTarget="chapter-1"
				facts={copy.facts}
				note={copy.note}
			/>
			{copy.chapters.map((chapter, i) => (
				<ChapterView key={chapter.marker} id={`chapter-${i + 1}`} chapter={chapter} />
			))}
			<OtherProjects current={project.slug} />
		</article>
	);
}

function ChapterView({ id, chapter }: { id: string; chapter: CaseChapter }) {
	const marker = <ChapterMarker>{chapter.marker}</ChapterMarker>;
	const title = <h2 className="type-heading text-ink">{chapter.title}</h2>;
	const blocks = chapter.blocks.map((block, i) => <BlockView key={`${block.kind}-${i}`} block={block} />);
	const aside = chapter.aside && <AsideView aside={chapter.aside} />;

	switch (chapter.layout) {
		case "aside-left":
			return (
				<Chapter id={id}>
					<div className="grid gap-6 lg:grid-cols-[580fr_607fr] lg:grid-rows-[auto_1fr] lg:gap-x-25">
						<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-1">
							{marker}
							{title}
						</div>
						<div className="lg:col-start-1 lg:row-span-2 lg:row-start-1">{aside}</div>
						<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-2">{blocks}</div>
					</div>
				</Chapter>
			);
		case "aside-right":
			return (
				<Chapter id={id}>
					<div className="flex flex-col gap-8 lg:grid lg:grid-cols-[577fr_532fr] lg:items-center lg:gap-x-25">
						<div className="flex flex-col gap-6">
							{marker}
							{title}
							{blocks}
						</div>
						{aside && <div className="lg:self-stretch [&>*]:h-full">{aside}</div>}
					</div>
				</Chapter>
			);
		case "marker-left":
			return (
				<Chapter id={id}>
					<div className="flex flex-col gap-6 lg:grid lg:max-w-[1133px] lg:grid-cols-[273fr_760fr] lg:items-start lg:gap-x-25">
						{marker}
						<div className="flex flex-col gap-6">
							{title}
							{blocks}
							{aside}
						</div>
					</div>
				</Chapter>
			);
		default:
			return (
				<Chapter id={id}>
					<div className="flex flex-col gap-6">
						{marker}
						{title}
						{blocks}
						{aside}
					</div>
				</Chapter>
			);
	}
}

function BlockView({ block }: { block: Block }) {
	switch (block.kind) {
		case "text":
			return <Narrative paragraphs={block.paragraphs} />;
		case "stats":
			return <Stats items={block.items} />;
		case "question":
			return <HumanQuestion label={block.label}>{block.text}</HumanQuestion>;
		case "figure":
			return <Screenshot {...block} />;
		case "states":
			return (
				<dl className="grid grid-cols-3 gap-6 pt-3">
					{block.items.map((item) => (
						<div key={item.label} className="flex flex-col gap-3.5 border-t border-marine pt-[18px]">
							<dt className="type-mono text-marine">{item.label}</dt>
							<dd className="type-small text-ink">{item.text}</dd>
						</div>
					))}
				</dl>
			);
		case "list":
			return (
				<dl>
					{block.items.map((item) => (
						<div key={item.label} className="flex gap-6 border-t border-surface-variant py-5">
							<dt className="type-mono w-[150px] shrink-0 uppercase text-moss-ink">{item.label}</dt>
							<dd className="type-body flex-1 text-ink">{item.text}</dd>
						</div>
					))}
				</dl>
			);
	}
}

function AsideView({ aside }: { aside: Aside }) {
	switch (aside.kind) {
		case "image":
			return (
				<figure className="flex flex-col gap-4">
					<img src={aside.src} alt={aside.alt} className="aspect-[380/490] w-full object-cover lg:aspect-[580/682]" />
					{(aside.caption || aside.detail) && (
						<figcaption className="type-mono flex justify-between gap-4">
							<span className="uppercase text-marine">{aside.caption}</span>
							<span className="text-moss-ink">{aside.detail}</span>
						</figcaption>
					)}
				</figure>
			);
		case "diagram":
			return <DataFlow title={aside.title} annotation={aside.annotation} layers={aside.layers} caption={aside.caption} />;
		case "stats":
			return <Stats items={aside.items} variant="panel" />;
		case "screenshot":
			return <Screenshot {...aside} />;
	}
}

/**
 * A UI screenshot, shown whole (never cropped) on the mist surface so a light
 * interface doesn't blend into the lavender page, lifted with a soft shadow.
 */
function Screenshot({ src, alt, caption, detail }: { src: string; alt: string; caption?: string; detail?: string }) {
	return (
		<figure className="flex flex-col gap-4">
			<div className="bg-mist p-5 lg:p-10">
				<img
					src={src}
					alt={alt}
					loading="lazy"
					className="w-full drop-shadow-[0_22px_26px_rgba(11,48,72,0.28)]"
				/>
			</div>
			{(caption || detail) && (
				<figcaption className="type-mono flex justify-between gap-4">
					<span className="uppercase text-marine">{caption}</span>
					<span className="text-moss-ink">{detail}</span>
				</figcaption>
			)}
		</figure>
	);
}
