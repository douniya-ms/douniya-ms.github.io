import { createFileRoute } from "@tanstack/react-router";
import avatarMockup from "#/assets/projects/avatar/Avatar.jpg";
import { CaseHero } from "#/components/case/CaseHero";
import { Chapter, HumanQuestion, Narrative } from "#/components/case/Chapter";
import { ChapterMarker } from "#/components/case/ChapterMarker";
import { DataFlow } from "#/components/case/DataFlow";
import { OtherProjects } from "#/components/case/OtherProjects";
import { avatarCopy } from "#/content/case-studies/avatar";
import { getProject } from "#/content/projects";
import { site } from "#/content/site";
import { getLocale } from "#/paraglide/runtime";

const project = getProject("avatar");

export const Route = createFileRoute("/_case/work/avatar")({
	head: () => ({
		meta: [
			{ title: `${project.title()} · ${site.firstName} ${site.lastName}` },
			{ name: "description", content: avatarCopy[getLocale()].intro },
		],
	}),
	component: AvatarCaseStudy,
});

function AvatarCaseStudy() {
	const c = avatarCopy[getLocale()];

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
			/>

			{/* 01: image left, story right (mobile: heading, image, story) */}
			<Chapter id="the-intention">
				<div className="grid gap-6 lg:grid-cols-[580fr_607fr] lg:grid-rows-[auto_1fr] lg:gap-x-25">
					<div className="flex flex-col gap-6 lg:col-start-2 lg:row-start-1">
						<ChapterMarker>{c.intention.marker}</ChapterMarker>
						<h2 className="type-heading text-ink">{c.intention.title}</h2>
					</div>
					<figure className="flex flex-col gap-4 lg:col-start-1 lg:row-span-2 lg:row-start-1">
						<img
							src={avatarMockup}
							alt={c.intention.imageAlt}
							className="aspect-[380/490] w-full object-cover lg:aspect-[580/682]"
						/>
						<figcaption className="type-mono flex justify-between gap-4">
							<span className="uppercase text-marine">{c.intention.caption}</span>
							<span className="text-moss-ink">{c.intention.captionDetail}</span>
						</figcaption>
					</figure>
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

			{/* 04: marker left, story + risk states right */}
			<Chapter>
				<div className="flex flex-col gap-6 lg:grid lg:max-w-[1133px] lg:grid-cols-[273fr_760fr] lg:items-start lg:gap-x-25">
					<ChapterMarker>{c.experience.marker}</ChapterMarker>
					<div className="flex flex-col gap-6">
						<h2 className="type-heading text-ink">{c.experience.title}</h2>
						<Narrative paragraphs={c.experience.paragraphs} />
						<dl className="grid grid-cols-3 gap-6 pt-3">
							{c.experience.states.map((state) => (
								<div key={state.label} className="flex flex-col gap-3.5 border-t border-marine pt-[18px]">
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
					<p className="type-body text-ink">{c.hardPart.closing}</p>
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

			<OtherProjects current="avatar" />
		</article>
	);
}
