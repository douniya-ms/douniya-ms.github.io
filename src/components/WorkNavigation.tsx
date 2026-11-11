import { createContext, type ReactNode, useCallback, useContext, useState } from "react";
import { type ProjectCard, projects } from "#/content/projects";

type WorkNavigation = {
	index: number;
	total: number;
	project: ProjectCard;
	canGoBack: boolean;
	canGoForward: boolean;
	previous: () => void;
	next: () => void;
	/** Jump to a project, e.g. when its case study opens */
	select: (slug: ProjectCard["slug"]) => void;
};

const WorkNavigationContext = createContext<WorkNavigation | null>(null);

const last = projects.length - 1;

/**
 * Holds the current project on the Work page.
 * It lives in the root route, above both the _site and _case layouts, so it
 * survives moving between them: open Cadence's case study, go back, and Work
 * is still on Cadence. (A full page reload starts again at the first project.)
 */
export function WorkNavigationProvider({ children }: { children: ReactNode }) {
	const [index, setIndex] = useState(0);

	// Stable functions, so components can safely use them in effects.
	const previous = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);
	const next = useCallback(() => setIndex((i) => Math.min(last, i + 1)), []);
	const select = useCallback((slug: ProjectCard["slug"]) => {
		const found = projects.findIndex((p) => p.slug === slug);
		if (found !== -1) setIndex(found);
	}, []);

	const value: WorkNavigation = {
		index,
		total: projects.length,
		project: projects[index],
		canGoBack: index > 0,
		canGoForward: index < last,
		previous,
		next,
		select,
	};

	return <WorkNavigationContext value={value}>{children}</WorkNavigationContext>;
}

export function useWorkNavigation() {
	const value = useContext(WorkNavigationContext);
	if (!value) {
		throw new Error("useWorkNavigation must be used inside <WorkNavigationProvider>");
	}
	return value;
}
