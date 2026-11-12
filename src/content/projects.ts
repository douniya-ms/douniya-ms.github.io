import avatarCard from "#/assets/projects/avatar/Avatar-landscape.jpg";
import avatarCover from "#/assets/projects/avatar/Avatar.jpg";
import cadenceCard from "#/assets/projects/cadence/Metrics.jpg";
import cadenceCover from "#/assets/projects/cadence/Forecast Detail.jpg";
import yallaCard from "#/assets/projects/yalla-agent/AI_Agent.jpg";
import yallaCover from "#/assets/projects/yalla-agent/yalla-agent-portrait.jpg";
import { m } from "#/paraglide/messages";

export type ProjectCard = {
	slug: "avatar" | "cadence" | "yalla-agent";
	/** Must match a route file in src/routes/_case/work/ */
	route: "/work/avatar" | "/work/cadence" | "/work/yalla-agent";
	/** Portrait image, ideally 4:5 (shown at 580x682 on desktop, 380x490 on mobile) */
	cover: string;
	/** Landscape image for the "Other projects" cards (shown at about 530x224) */
	card: string;
	status: "published" | "coming-soon";
	year: number;
	tags: string[];
	/** The small label above the title, e.g. "Technology at the service of humanity" */
	label: () => string;
	title: () => string;
	/** One line under the title, e.g. "Intelligent asthma monitoring system" */
	tagline: () => string;
	summary: () => string;
	results: () => string;
};

export const projects: ProjectCard[] = [
	{
		slug: "avatar",
		route: "/work/avatar",
		cover: avatarCover,
		card: avatarCard,
		status: "published",
		year: 2024,
		tags: ["ML/AI", "Flutter", "Supabase"],
		label: () => m.project_avatar_label(),
		title: () => m.project_avatar_title(),
		tagline: () => m.project_avatar_tagline(),
		summary: () => m.project_avatar_summary(),
		results: () => m.project_avatar_results(),
	},
	{
		slug: "cadence",
		route: "/work/cadence",
		cover: cadenceCover,
		card: cadenceCard,
		status: "published",
		year: 2024,
		tags: ["Data", "Forecasting", "Python"],
		label: () => m.project_cadence_label(),
		title: () => m.project_cadence_title(),
		tagline: () => m.project_cadence_tagline(),
		summary: () => m.project_cadence_summary(),
		results: () => m.project_cadence_results(),
	},
	{
		slug: "yalla-agent",
		route: "/work/yalla-agent",
		cover: yallaCover,
		card: yallaCard,
		status: "coming-soon",
		year: 2025,
		tags: ["AI agents", "RAG", "Python"],
		label: () => m.project_yalla_label(),
		title: () => m.project_yalla_title(),
		tagline: () => m.project_yalla_tagline(),
		summary: () => m.project_yalla_summary(),
		results: () => m.project_yalla_results(),
	},
];

export function getProject(slug: ProjectCard["slug"]): ProjectCard {
	const project = projects.find((p) => p.slug === slug);
	if (!project) throw new Error(`Unknown project: ${slug}`);
	return project;
}
