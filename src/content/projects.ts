import avatarCard from "#/assets/projects/avatar/Avatar-landscape.jpg";
import avatarCover from "#/assets/projects/avatar/Avatar.jpg";
import roadCard from "#/assets/projects/road-accidents/road-accidents-card.jpg";
import roadCover from "#/assets/projects/road-accidents/road-accidents-portrait.jpg";
import atsCard from "#/assets/projects/smart-ats/smart-ats-card.jpg";
import atsCover from "#/assets/projects/smart-ats/smart-ats-portrait.jpg";
import { m } from "#/paraglide/messages";

export type ProjectCard = {
	slug: "smart-ats" | "avatar" | "road-accidents";
	/** Case-study page. Leave it out for a project without one (coming soon). */
	route?: "/work/smart-ats" | "/work/avatar" | "/work/road-accidents";
	/** Portrait image, ideally 4:5 (shown at 580x682 on desktop, 380x490 on mobile) */
	cover: string;
	/** Landscape image for the "Other projects" cards (shown at about 530x224) */
	card: string;
	status: "published" | "coming-soon";
	tags: string[];
	/** The small label above the title, e.g. "Technology at the service of humanity" */
	label: () => string;
	title: () => string;
	/** One line under the title, e.g. "Smart bracelet for asthma attack monitoring" */
	tagline: () => string;
	summary: () => string;
	/** Shown on the Work page. A coming-soon project shows its status instead. */
	results?: () => string;
};

/** The order here is the order on the Work page. */
export const projects: ProjectCard[] = [
	{
		slug: "smart-ats",
		route: "/work/smart-ats",
		cover: atsCover,
		card: atsCard,
		status: "published",
		tags: ["Python", "LLM", "ESCO", "PostgreSQL", "Celery"],
		label: () => m.project_ats_label(),
		title: () => m.project_ats_title(),
		tagline: () => m.project_ats_tagline(),
		summary: () => m.project_ats_summary(),
		results: () => m.project_ats_results(),
	},
	{
		slug: "avatar",
		route: "/work/avatar",
		cover: avatarCover,
		card: avatarCard,
		status: "published",
		tags: ["ESP32", "Fuzzy C-Means", "FastAPI", "Supabase", "Flutter"],
		label: () => m.project_avatar_label(),
		title: () => m.project_avatar_title(),
		tagline: () => m.project_avatar_tagline(),
		summary: () => m.project_avatar_summary(),
		results: () => m.project_avatar_results(),
	},
	{
		slug: "road-accidents",
		route: "/work/road-accidents",
		cover: roadCover,
		card: roadCard,
		status: "published",
		tags: ["Python", "scikit-learn", "imbalanced-learn", "Random Forest"],
		label: () => m.project_road_label(),
		title: () => m.project_road_title(),
		tagline: () => m.project_road_tagline(),
		summary: () => m.project_road_summary(),
		results: () => m.project_road_results(),
	},
];

export function getProject(slug: ProjectCard["slug"]): ProjectCard {
	const project = projects.find((p) => p.slug === slug);
	if (!project) throw new Error(`Unknown project: ${slug}`);
	return project;
}
