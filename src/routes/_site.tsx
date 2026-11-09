import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ColumnRules } from "#/components/ColumnRules";
import { SiteFooter } from "#/components/SiteFooter";
import { SiteHeader } from "#/components/SiteHeader";

export const Route = createFileRoute("/_site")({ component: SiteLayout });

function SiteLayout() {
	return (
		<div className="site-shell relative h-dvh overflow-hidden lg:px-(--gutter)">
			<div
				aria-hidden
				className="site-gutter absolute inset-y-0 left-0 z-0 hidden w-(--gutter) bg-moss lg:block"
			/>
			<SiteHeader />
			<main>
				<Outlet />
			</main>
			<SiteFooter />
			<ColumnRules />
		</div>
	);
}
