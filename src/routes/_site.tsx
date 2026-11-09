import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ColumnRules } from "#/components/ColumnRules";
import { SiteFooter } from "#/components/SiteFooter";
import { SiteHeader } from "#/components/SiteHeader";

export const Route = createFileRoute("/_site")({ component: SiteLayout });

function SiteLayout() {
	return (
		<div className="site-shell relative h-dvh lg:flex lg:h-auto lg:min-h-dvh lg:flex-col lg:overflow-x-clip lg:px-(--gutter)">
			<SiteHeader />
			<main className="lg:flex-1">
				<Outlet />
			</main>
			<SiteFooter />
			<ColumnRules />
		</div>
	);
}
