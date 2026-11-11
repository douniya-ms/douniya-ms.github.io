import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Chip } from "#/components/Chip";
import { ArrowRight } from "#/components/icons";
import { NavigationButton } from "#/components/NavigationButton";
import { SectionLabel } from "#/components/SectionLabel";
import { useWorkNavigation } from "#/components/WorkNavigation";
import type { ProjectCard } from "#/content/projects";
import { m } from "#/paraglide/messages";

type CaseHeroProps = {
	project: ProjectCard;
	intro: string;
	aim: string;
	tags: string[];
	readingCue: string;
	/** id of the first chapter, for the reading cue link */
	readingTarget: string;
	facts: { label: string; value: string }[];
	/** Optional line under the facts, e.g. a disclaimer for an illustrative project */
	note?: string;
};

/** Breadcrumb, project promise and key facts: the top of every case study. */
export function CaseHero({ project, intro, aim, tags, readingCue, readingTarget, facts, note }: CaseHeroProps) {
	// Opening a case study makes it the current project on the Work page, so
	// any way back to Work (buttons, header link, browser back) lands on it.
	const { select } = useWorkNavigation();
	useEffect(() => {
		select(project.slug);
	}, [select, project.slug]);

	return (
		<>
			{/* Breadcrumb */}
			<div className="flex animate-fade-up items-center justify-between gap-4 px-4 pt-8 lg:px-20 lg:py-10">
				<Link to="/work" className="group type-mono flex items-center gap-3 text-marine">
					<NavigationButton direction="left" />
					{m.project_back_to_work()}
				</Link>
				<p className="type-mono uppercase text-moss-ink">
					{m.case_selected_work()} / {project.title()}
				</p>
			</div>

			{/* Project promise */}
			<div
				className="flex animate-fade-up flex-col gap-6 px-4 pt-8 lg:gap-7 lg:px-20 lg:py-6"
				style={{ animationDelay: "0.15s" }}
			>
				<SectionLabel withRule>{project.label()}</SectionLabel>
				<h1 className="type-heading text-ink lg:type-display">
					{project.title()}
					<span className="text-moss">.</span>
				</h1>
				<p className="text-2xl leading-[1.13] font-medium tracking-[-0.04em] text-ink lg:type-heading">
					{project.tagline()}
				</p>
				<p className="type-body text-ink">{intro}</p>
				<p className="type-body text-ink">{aim}</p>
				<ul className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<Chip key={tag}>{tag}</Chip>
					))}
				</ul>
				<a href={`#${readingTarget}`} className="group type-mono flex w-fit items-center gap-2 uppercase text-marine">
					<ArrowRight className="rotate-90 transition-transform duration-300 group-hover:translate-y-0.5" />
					{readingCue}
				</a>
			</div>

			{/* Key facts (+ optional note) */}
			<div
				className="flex animate-fade-up flex-col gap-7 px-4 py-8 lg:px-40 lg:py-14"
				style={{ animationDelay: "0.3s" }}
			>
				<dl className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:gap-10">
					{facts.map((fact, i) => (
						<div key={fact.label} className={`flex flex-col gap-3 ${i === 0 ? "col-span-2 lg:col-span-1" : ""}`}>
							<dt className="type-mono uppercase text-moss-ink">{fact.label}</dt>
							<dd className="type-small text-ink">{fact.value}</dd>
						</div>
					))}
				</dl>
				{note && <p className="type-mono text-ink">{note}</p>}
			</div>
		</>
	);
}
