import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy, caseHead } from "#/components/case/CaseStudy";
import { smartAtsCopy } from "#/content/case-studies/smart-ats";
import { getProject } from "#/content/projects";

// The words live in src/content/case-studies/smart-ats.ts
const project = getProject("smart-ats");

export const Route = createFileRoute("/_case/work/smart-ats")({
	head: caseHead(project, smartAtsCopy),
	component: () => <CaseStudy project={project} copies={smartAtsCopy} />,
});
