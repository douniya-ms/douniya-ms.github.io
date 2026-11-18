import type { ReactNode } from "react";
import sparklesIcon from "#/assets/icons/sparkles.svg";
// Abstract placeholder until there is a real photo. The original photo is kept
// at src/assets/portrait.png: to use it (or a new one), change this import.
import portrait from "#/assets/abstract-portrait.jpg";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";

export function Identity({
	children,
	showNameplate = true,
}: {
	children?: ReactNode;
	showNameplate?: boolean;
}) {
	return (
		<section className="about-identity relative lg:col-span-3 lg:self-start">
			<div className="relative flex aspect-[580/682] overflow-hidden lg:max-h-[max(600px,calc(100dvh-209px))] lg:w-[86.3%]">
				{[0, 1, 2].map((i) => (
					<div
						key={i}
						className="relative z-10 h-full flex-1 overflow-hidden animate-slice-bounce"
						style={{ animationDelay: `${0.1 + i * 0.08}s` }}
					>
						<img
							src={portrait}
							alt=""
							className="absolute top-0 h-full w-[300%] max-w-none object-cover"
							style={{ left: `-${i * 100}%` }}
						/>
						<div
							aria-hidden
							className="portrait-shade absolute inset-0 w-[300%]"
							style={{ left: `-${i * 100}%` }}
						/>
					</div>
				))}

				<p
					className="portrait-caption animate-fade-up type-mono absolute left-6 top-6 flex items-center gap-2 uppercase text-marine"
					style={{ animationDelay: "0.5s" }}
				>
					{m.portrait_caption()}
					<img
						src={sparklesIcon}
						alt=""
						width={15}
						height={15}
						className="origin-bottom cursor-pointer hover:animate-ss"
					/>
				</p>
				<p
					className="portrait-initials animate-fade-up type-mono absolute bottom-8 right-10 text-ink"
					style={{ animationDelay: "0.5s" }}
				>
					[ {site.initials} ]
				</p>
			</div>

			{showNameplate && (
				<div
					className="about-nameplate animate-fade-up relative z-30 px-(--gutter) py-6 lg:absolute lg:top-[35%] lg:-left-[25px] lg:w-[83%] lg:p-0"
					style={{ animationDelay: "0.5s" }}
				>
					<h1 className="type-display text-ink">
						<span className="lg:block">{site.firstName}</span>{" "}
						<span className="lg:block">{site.lastName}</span>
					</h1>
					<p className="mt-6 flex items-center gap-2.5 pl-1.5">
						<span className="font-mono text-[15px] text-marine">{"</>"}</span>
						<span className="type-mono text-ink">{m.tagline()}</span>
					</p>
					{children}
				</div>
			)}
		</section>
	);
}
