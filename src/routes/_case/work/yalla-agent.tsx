import { createFileRoute, Link } from "@tanstack/react-router";
import { m } from "#/paraglide/messages";

export const Route = createFileRoute("/_case/work/yalla-agent")({
	component: () => <ProjectShell title={m.project_yalla_title()} />,
});

function ProjectShell({ title }: { title: string }) {
	return (
		<div className="project-shell">
			<Link className="project-shell-back" to="/work">
				← {m.project_back_to_work()}
			</Link>
			<p className="type-mono text-moss-ink">{m.project_yalla_label()}</p>
			<h1 className="type-heading">{title}</h1>
			<p className="type-body">{m.project_details_coming_soon()}</p>
		</div>
	);
}
