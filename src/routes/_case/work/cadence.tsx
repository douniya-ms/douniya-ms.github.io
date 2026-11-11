import { createFileRoute } from "@tanstack/react-router";
import forecastDetail from "#/assets/projects/cadence/Forecast Detail.jpg";
import reorderList from "#/assets/projects/cadence/Reorder list.jpg";
import { CaseHero } from "#/components/case/CaseHero";
import { Chapter, HumanQuestion, Narrative } from "#/components/case/Chapter";
import { ChapterMarker } from "#/components/case/ChapterMarker";
import { DataFlow } from "#/components/case/DataFlow";
import { OtherProjects } from "#/components/case/OtherProjects";
import { cadenceCopy } from "#/content/case-studies/cadence";
import { getProject } from "#/content/projects";
import { site } from "#/content/site";
import { getLocale } from "#/paraglide/runtime";

const project = getProject("cadence");

export const Route = createFileRoute("/_case/work/cadence")({
	head: () => ({
		meta: [
			{ title: `${project.title()} · ${site.firstName} ${site.lastName}` },
			{ name: "description", content: cadenceCopy[getLocale()].intro },
		],
	}),
	component: CadenceCaseStudy,
});

function CadenceCaseStudy() {
	const c = cadenceCopy[getLocale()];

	return (
		<article>
			<CaseHero
				project={project}
				intro={c.intro}
				aim={c.aim}
				tags={c.tags}
				readingCue={c.readingCue}
				readingTarget="the-intention"
				facts={c.facts}
				note={c.note}
			/>

			{/* 01: image left, story right (mobile: heading, image, story) */}
			<Chapter id="the-intention">
				<div className="grid gap-6 lg:grid-cols-[580fr_607fr] lg:grid-rows-[auto_1fr] lg:gap-x-25">
					<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-1">
						<ChapterMarker>{c.intention.marker}</ChapterMarker>
						<h2 className="type-heading text-ink">{c.intention.title}</h2>
					</div>
					<img
						src={reorderList}
						alt={c.intention.imageAlt}
						className="aspect-[380/490] w-full object-cover lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-[580/682]"
					/>
					<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-2">
						<Narrative paragraphs={c.intention.paragraphs} />
						<HumanQuestion>{c.intention.question}</HumanQuestion>
					</div>
				</div>
			</Chapter>

			{/* 02: marker left, story right */}
			<Chapter>
				<div className="flex flex-col gap-6 lg:grid lg:max-w-[1133px] lg:grid-cols-[273fr_760fr] lg:items-start lg:gap-x-25">
					<ChapterMarker>{c.startingPoint.marker}</ChapterMarker>
					<div className="flex flex-col gap-6">
						<h2 className="type-heading text-ink">{c.startingPoint.title}</h2>
						<Narrative paragraphs={c.startingPoint.paragraphs} />
					</div>
				</div>
			</Chapter>

			{/* 03: story left, diagram right */}
			<Chapter>
				<div className="flex flex-col gap-8 lg:grid lg:grid-cols-[577fr_532fr] lg:items-center lg:gap-x-25">
					<div className="flex flex-col gap-6">
						<ChapterMarker>{c.underTheHood.marker}</ChapterMarker>
						<h2 className="type-heading text-ink">{c.underTheHood.title}</h2>
						<Narrative paragraphs={c.underTheHood.paragraphs} />
					</div>
					<DataFlow {...c.underTheHood.diagram} className="lg:self-stretch" />
				</div>
			</Chapter>

			{/* 04: image left, story + confidence levels right (stacked, not in columns) */}
			<Chapter>
				<div className="grid gap-6 lg:grid-cols-[580fr_607fr] lg:grid-rows-[auto_1fr] lg:gap-x-25">
					<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-1">
						<ChapterMarker>{c.experience.marker}</ChapterMarker>
						<h2 className="type-heading text-ink">{c.experience.title}</h2>
					</div>
					<img
						src={forecastDetail}
						alt={c.experience.imageAlt}
						className="aspect-[380/490] w-full object-cover lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:aspect-[580/682]"
					/>
					<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-2">
						<Narrative paragraphs={c.experience.paragraphs} />
						<dl className="flex flex-col pt-3">
							{c.experience.states.map((state) => (
								<div key={state.label} className="flex flex-col gap-2.5 border-t border-marine py-4">
									<dt className="type-mono text-marine">{state.label}</dt>
									<dd className="type-small text-ink">{state.text}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
			</Chapter>

			{/* 05: full width, with the thought process as rows */}
			<Chapter>
				<div className="flex flex-col gap-6">
					<ChapterMarker>{c.hardPart.marker}</ChapterMarker>
					<h2 className="type-heading text-ink">{c.hardPart.title}</h2>
					<Narrative paragraphs={c.hardPart.paragraphs} />
					<dl>
						{c.hardPart.considerations.map((item) => (
							<div key={item.label} className="flex gap-6 border-t border-surface-variant py-5">
								<dt className="type-mono w-[150px] shrink-0 uppercase text-moss-ink">{item.label}</dt>
								<dd className="type-body flex-1 text-ink">{item.text}</dd>
							</div>
						))}
					</dl>
					<Narrative paragraphs={c.hardPart.closing} />
				</div>
			</Chapter>

			{/* 06: lesson left, marker + next steps right (mobile: marker first) */}
			<Chapter>
				<div className="flex flex-col gap-6 lg:grid lg:grid-cols-[577fr_532fr] lg:gap-x-25">
					<div className="lg:col-start-2 lg:row-start-1">
						<ChapterMarker>{c.forward.marker}</ChapterMarker>
					</div>
					<div className="flex flex-col gap-6 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-center">
						<h2 className="type-heading text-ink">{c.forward.title}</h2>
						<p className="type-body text-ink">{c.forward.lesson}</p>
					</div>
					<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-2">
						<p className="type-body text-ink">{c.forward.next}</p>
						<HumanQuestion label={c.forward.questionLabel}>{c.forward.question}</HumanQuestion>
					</div>
				</div>
			</Chapter>

			<OtherProjects current="cadence" />
		</article>
	);
}
