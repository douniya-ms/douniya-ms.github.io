import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MenuLocaleSwitcher } from "#/components/MenuLocaleSwitcher";
import { navLinks } from "#/content/nav";
import { m } from "#/paraglide/messages";

const enter =
	"-translate-x-6 opacity-0 transition-[opacity,translate,color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] " +
	"group-data-[open=true]/menu:translate-x-0 group-data-[open=true]/menu:opacity-100";

const bar = "h-px bg-marine transition-[width] duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-data-[open=true]/btn:w-2";

export function MobileMenu() {
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	useEffect(() => {
		if (!open) return;
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);

	// stagger only on the way in; on the way out everything leaves together
	const delay = (i: number) => ({ transitionDelay: open ? `${0.3 + i * 0.09}s` : "0s" });

	return (
		<>
			<button
				type="button"
				data-open={open}
				aria-expanded={open}
				aria-controls="mobile-menu"
				aria-label={open ? m.menu_close() : m.menu_open()}
				onClick={() => setOpen((v) => !v)}
				className="group/btn relative z-60 flex w-auto items-center gap-4 text-marine lg:hidden"
			>
				{/* label: two lines in a one-line window, slid up on open */}
				<span aria-hidden className="type-body block h-[30px] overflow-hidden whitespace-nowrap">
					<span className="block transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-data-[open=true]/btn:-translate-y-[30px]">
						<span className="block h-[30px] leading-[30px]">{m.menu_open()}</span>
						<span className="block h-[30px] leading-[30px]">{m.menu_close()}</span>
					</span>
				</span>

				{/* icon: 20px with uneven bars, shrinks to 8px with even bars */}
				<span aria-hidden className="flex h-[7px] w-5 flex-col items-end justify-between">
					<span className={`${bar} w-5`} />
					<span className={`${bar} w-[17px]`} />
					<span className={`${bar} w-[17px]`} />
				</span>
			</button>

			<div
				id="mobile-menu"
				data-open={open}
				inert={!open}
				className="group/menu invisible fixed inset-0 z-50 overscroll-contain bg-lavender transition-[clip-path,visibility] duration-600 ease-[cubic-bezier(0.7,0,0.3,1)] [clip-path:inset(0_0_100%_0)] data-[open=true]:visible data-[open=true]:[clip-path:inset(0)] lg:hidden"
			>
				<nav aria-label="Main" className="absolute left-12 top-1/2 flex -translate-y-1/2 flex-col gap-8">
					{navLinks.map(({ to, label }, i) => (
						<Link
							key={to}
							to={to}
							activeOptions={{ exact: true }}
							onClick={close}
							className={`type-heading w-fit text-marine data-[status=active]:text-moss ${enter}`}
							style={delay(i)}
						>
							{label()}
						</Link>
					))}
				</nav>

				<div
					className={`absolute bottom-[calc(2.5rem+env(safe-area-inset-bottom))] left-12 ${enter}`}
					style={delay(navLinks.length)}
				>
					<MenuLocaleSwitcher />
				</div>
			</div>
		</>
	);
}