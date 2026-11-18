import { createFileRoute } from "@tanstack/react-router";
import { CaseStudy, caseHead } from "#/components/case/CaseStudy";
import { avatarCopy } from "#/content/case-studies/avatar";
import { getProject } from "#/content/projects";

// The words live in src/content/case-studies/avatar.ts
const project = getProject("avatar");

export const Route = createFileRoute("/_case/work/avatar")({
	head: caseHead(project, avatarCopy),
	component: () => <CaseStudy project={project} copies={avatarCopy} />,
});
