import { Link } from "@tanstack/react-router";
import { LongArrow } from "#/components/icons";
import { NavigationButton } from "#/components/NavigationButton";
import { type ProjectCard, projects } from "#/content/projects";
import { m } from "#/paraglide/messages";

/** Every project except the current one, as cards. */
export function OtherProjects({ current }: { current: ProjectCard["slug"] }) {
	const others = projects.filter((project) => project.slug !== current);

	return (
		<section className="flex flex-col gap-8 border-t border-surface-variant px-4 py-10 lg:px-(--gutter) lg:py-20">
			<div className="flex items-center justify-between gap-4">
				<h2 className="type-heading text-ink">{m.case_other_projects()}</h2>
				<Link to="/work" className="group type-mono hidden items-center gap-2.5 px-3 py-2 text-marine lg:flex">
					{/* Same loop as "View details". The arrow is rotated 180°, so it
					    exits to the left and comes back in from the right. */}
					<span className="flex overflow-hidden py-1">
						<LongArrow className="rotate-180 group-hover:animate-arrow-loop group-focus-visible:animate-arrow-loop" />
					</span>
					{m.project_back_to_work()}
				</Link>
			</div>

			<ul className="grid gap-8 lg:grid-cols-2">
				{others.map((project, i) => (
					<li key={project.slug}>
						<Link
							to={project.route}
							className={`group flex h-full flex-col gap-5 px-8 py-[30px] ${i % 2 === 0 ? "bg-mist-light" : "bg-mist"}`}
						>
							<p className="type-mono uppercase text-moss-ink">
								{project.status === "published" ? m.case_status_published() : m.case_status_soon()}
							</p>
							<div className="relative h-56 overflow-hidden">
								<img
									src={project.card}
									alt=""
									className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								/>
								<div aria-hidden className="absolute inset-0 bg-linear-to-r from-lavender/55 to-lavender/0" />
							</div>
							<p className="text-[28px] leading-[1.2] font-medium text-ink">{project.title()}</p>
							<div className="mt-auto flex items-center justify-between gap-2.5">
								<p className="type-small text-marine">{project.tagline()}</p>
								<NavigationButton direction="right" />
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
}
