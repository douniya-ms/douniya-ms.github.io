import { createFileRoute, Link } from "@tanstack/react-router";
import { Fragment } from "react";
import githubIcon from "#/assets/icons/github.svg";
import linkedinIcon from "#/assets/icons/linkedin.svg";
import { Chip } from "#/components/Chip";
import { FooterLink } from "#/components/FooterLink";
import { LongArrow } from "#/components/icons";
import { ProjectControls } from "#/components/ProjectControls";
import { ProjectVisual } from "#/components/ProjectVisual";
import { SectionLabel } from "#/components/SectionLabel";
import { useWorkNavigation } from "#/components/WorkNavigation";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";

export const Route = createFileRoute("/_site/work/")({ component: Work });

const pad = (n: number) => String(n).padStart(2, "0");

function Work() {
	const { index, total, project } = useWorkNavigation();

	return (
		// Mobile: a fixed screen (content scrolls, moss bar at the bottom).
		// Desktop: the same 6-column grid as About and Contact.
		<div className="relative flex h-dvh flex-col bg-lavender pt-20 lg:grid lg:bg-transparent lg:h-auto lg:grid-cols-6 lg:pt-0">
			<h1 className="sr-only">{m.nav_work()}</h1>
			<p className="sr-only" aria-live="polite">
				{m.work_project_announce({
					title: project.title(),
					current: String(index + 1),
					total: String(total),
				})}
			</p>

			<div className="hidden lg:col-span-3 lg:block lg:self-start">
				<ProjectVisual project={project} />
			</div>

			<section
				aria-labelledby="work-project-title"
				className="relative z-30 flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto px-(--gutter) pt-8 pb-6 [scrollbar-width:none] *:shrink-0 max-lg:[mask-image:linear-gradient(to_bottom,transparent_0,#000_1rem)] lg:col-span-3 lg:gap-8 lg:overflow-visible lg:px-0 lg:pt-[50px] lg:pr-4 lg:pb-0 lg:short:gap-6 lg:short:pt-6"
			>
				{/* Keyed on the project so its content re-animates on every switch */}
				<Fragment key={project.slug}>
					{/* Section heading: count above the label on mobile, beside it on desktop */}
					<div
						className="flex animate-fade-up flex-col-reverse gap-4 lg:flex-row lg:items-center lg:justify-between"
						style={{ animationDelay: "0.5s" }}
					>
						<SectionLabel withRule>{project.label()}</SectionLabel>
						<p className="type-mono self-end text-moss-ink lg:self-auto">
							{m.work_project_count({ current: pad(index + 1), total: pad(total) })}
						</p>
					</div>

					<div className="flex animate-fade-up flex-col gap-6" style={{ animationDelay: "0.55s" }}>
						<h2 id="work-project-title" className="type-heading text-ink">
							{project.title()}
						</h2>
						<p className="type-body max-w-[600px] text-ink">{project.summary()}</p>
					</div>

					<img
						src={project.cover}
						alt=""
						className="aspect-[380/490] w-full animate-fade-up object-cover lg:hidden"
						style={{ animationDelay: "0.6s" }}
					/>

					<div className="flex animate-fade-up flex-col gap-4" style={{ animationDelay: "0.65s" }}>
						<p className="type-mono uppercase text-moss-ink">{m.project_tech_stack()}</p>
						<ul className="flex flex-wrap gap-2">
							{project.tags.map((tag) => (
								<Chip key={tag}>{tag}</Chip>
							))}
						</ul>
					</div>

					<div className="flex animate-fade-up items-start gap-[18px]" style={{ animationDelay: "0.75s" }}>
						<span aria-hidden className="type-mono text-moss-ink">
							//
						</span>
						<div className="flex flex-1 flex-col gap-[7px]">
							<p className="type-mono uppercase text-moss-ink">{m.project_results()}</p>
							<p className="type-body text-ink">{project.results()}</p>
						</div>
					</div>

					<Link
						to={project.route}
						className="group type-mono mt-auto ml-auto flex animate-fade-up items-center gap-3 py-2 text-marine"
						style={{ animationDelay: "0.85s" }}
					>
						<span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
							{m.work_view_details()}
						</span>
						{/* The clip hides the arrow while it loops from the right edge back to the left */}
						<span className="flex overflow-hidden py-1">
							<LongArrow className="group-hover:animate-arrow-loop group-focus-visible:animate-arrow-loop" />
						</span>
					</Link>
				</Fragment>
			</section>

			{/* Mobile bar: logo + socials + project controls. On desktop the controls live in SiteFooter. */}
			<div className="flex flex-none items-center justify-between gap-4 bg-moss px-4 py-2 lg:hidden">
				<p aria-hidden className="type-logo-sm text-lavender">
					<span className="block">{site.logo[0]}</span>
					<span className="block">{site.logo[1]}</span>
				</p>
				<ul className="mr-auto flex items-center gap-4">
					<li>
						<FooterLink href={site.github} icon={githubIcon} className="text-lavender">
							{m.footer_github()}
						</FooterLink>
					</li>
					<li>
						<FooterLink href={site.linkedin} icon={linkedinIcon} className="text-lavender">
							{m.footer_linkedin()}
						</FooterLink>
					</li>
				</ul>
				<ProjectControls tone="onMoss" />
			</div>
		</div>
	);
}
