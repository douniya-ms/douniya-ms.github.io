import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy, caseHead } from "#/components/case/CaseStudy";
import { roadAccidentsCopy } from "#/content/case-studies/road-accidents";
import { getProject } from "#/content/projects";

// The words live in src/content/case-studies/road-accidents.ts
const project = getProject("road-accidents");

export const Route = createFileRoute("/_case/work/road-accidents")({
	head: caseHead(project, roadAccidentsCopy),
	component: () => <CaseStudy project={project} copies={roadAccidentsCopy} />,
});
