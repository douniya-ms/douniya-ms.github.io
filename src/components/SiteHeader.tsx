import { Link } from "@tanstack/react-router";
import { LocaleSwitcher } from "#/components/LocaleSwitcher";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";

const navLinks = [
	{ to: "/", index: "01", label: () => m.nav_about() },
	{ to: "/work", index: "02", label: () => m.nav_work() },
	{ to: "/contact", index: "03", label: () => m.nav_contact() },
] as const;

export function SiteHeader() {
	return (
		<header className="relative z-40 flex h-[52px] items-center justify-between px-4 lg:grid lg:h-26 lg:grid-cols-6 lg:px-0">
			<div className="flex items-center gap-3.5 pl-1 lg:col-span-2 lg:row-start-1 lg:h-full lg:bg-moss">
				<p className="type-logo text-lavender">
					<span className="block">{site.logo[0]}</span>
					<span className="block">{site.logo[1]}</span>
				</p>
				<span aria-hidden className="h-[22px] w-px bg-surface-variant" />
				<p className="type-mono hidden text-lavender lg:block">
					{m.role_title()}
				</p>
			</div>

			<nav aria-label="Main" className="col-span-3 col-start-4 row-start-1 hidden lg:flex">
                {navLinks.map(({ to, index, label }) => (
                    <Link
                        key={to}
                        to={to}
                        activeOptions={{ exact: true }}
                        className="group flex h-12 w-35 flex-col gap-[13px] pt-1.5"
                    >
                        <span className="flex items-center gap-2.5 text-marine group-data-[status=active]:text-ink transition-colors">
                            <span className="type-mono">{index}</span>
                            <span className="type-nav group-data-[status=active]:font-semibold">
                                {label()}
                            </span>
                            <span
                                aria-hidden
                                // Note: Changed to inline-block so transform animations work
                                className="type-chip hidden text-moss origin-bottom group-data-[status=active]:inline-block group-hover:inline-block group-hover:animate-ss"
                            >
                                *
                            </span>
                        </span>
                        <span
                            aria-hidden
                            // Animated transform-origin underline
                            className="h-px w-23 bg-moss origin-right scale-x-0 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 group-data-[status=active]:origin-left group-data-[status=active]:scale-x-100"
                        />
                    </Link>
                ))}
            </nav>

			<div className="col-start-6 row-start-1 hidden justify-self-end lg:block">
				<LocaleSwitcher />
			</div>
			<button
				type="button"
				className="flex items-center gap-2 text-[18px] text-marine lg:hidden"
			>
				<span>Menu</span>
				<span aria-hidden className="text-[20px] leading-none">
					☰
				</span>
			</button>
		</header>
	);
}
