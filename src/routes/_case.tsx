import { Outlet, createFileRoute } from "@tanstack/react-router";
import { CaseFooter } from "#/components/case/CaseFooter";
import { SiteHeader } from "#/components/SiteHeader";

/**
 * Layout for the long, scrolling case-study pages: same header as the site,
 * a moss identity rail on the left, no column lines, and the contact footer.
 */
export const Route = createFileRoute("/_case")({ component: CaseLayout });

function CaseLayout() {
	return (
		<div className="case-shell relative min-h-dvh overflow-x-clip bg-lavender lg:px-(--gutter)">
			<div aria-hidden className="absolute inset-y-0 left-0 hidden w-(--gutter) bg-moss lg:block" />
			<SiteHeader />
			<main>
				<Outlet />
			</main>
			<CaseFooter />
		</div>
	);
}
