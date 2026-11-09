import { createFileRoute } from "@tanstack/react-router";
import coffeeIcon from "#/assets/icons/coffee.svg";
import sparklesIcon from "#/assets/icons/sparkles.svg";
import portrait from "#/assets/portrait.png";
import { Chip } from "#/components/Chip";
import { SectionLabel } from "#/components/SectionLabel";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";

export const Route = createFileRoute("/_site/")({ component: About });

function About() {
	return (
		<div className="about-page relative lg:grid lg:h-[calc(100dvh-209px)] lg:grid-cols-6">
			<section className="about-identity relative lg:col-span-3">
				<div className="relative aspect-[580/682] lg:w-[86.3%]">
					<img
						src={portrait}
						alt=""
						className="absolute inset-0 size-full object-cover"
					/>
					<div aria-hidden className="portrait-shade absolute inset-0" />
					<p className="portrait-caption type-mono absolute left-6 top-6 flex items-center gap-2 uppercase text-marine">
            {m.portrait_caption()}
            {/* Add origin-bottom, hover:animate-ss, and cursor-pointer */}
            <img src={sparklesIcon} alt="" width={15} height={15} className="origin-bottom cursor-pointer hover:animate-ss" />
          </p>
					<p className="portrait-initials type-mono absolute bottom-8 right-10 text-ink">
						[ {site.initials} ]
					</p>
				</div>

				<div className="about-nameplate relative z-30 px-(--gutter) py-6 lg:absolute lg:top-[35%] lg:-left-[25px] lg:w-[83%] lg:p-0">
					<h1 className="type-display text-ink">
						<span className="block">{site.firstName}</span>
						<span className="block">{site.lastName}</span>
					</h1>
					<p className="mt-6 flex items-center gap-2.5 pl-1.5">
						<span className="font-mono text-[15px] text-marine">{"</>"}</span>
						<span className="type-mono text-ink">{m.tagline()}</span>
					</p>
					<div className="mobile-about-label">
						<SectionLabel withRule>{m.about_label()}</SectionLabel>
					</div>
				</div>
			</section>

			<section className="about-content relative z-30 flex flex-col gap-6 px-(--gutter) lg:col-span-3 lg:px-0 lg:pt-[50px] lg:pr-4">
				<SectionLabel withRule>{m.about_label()}</SectionLabel>

				<div className="flex flex-col gap-6">
					<h2 className="type-heading text-ink">
						<span className="block">{m.about_heading_1()}</span>
						<span className="block">{m.about_heading_2()}</span>
					</h2>
					<p className="type-body max-w-[600px] text-ink">{m.about_p1()}</p>
					<p className="type-body max-w-[600px] text-ink">{m.about_p2()}</p>
				</div>

				<div className="flex flex-col gap-4">
					<p className="type-mono uppercase text-moss-ink">
						{m.learning_label()}
					</p>
					<ul className="flex flex-wrap gap-2">
						<Chip>{m.skill_python()}</Chip>
						<Chip>{m.skill_notebooks()}</Chip>
						<Chip>{m.skill_dataviz()}</Chip>
					</ul>
					<ul className="flex flex-wrap gap-2">
						<Chip>{m.skill_pandas()}</Chip>
						<Chip>{m.skill_numpy()}</Chip>
						<Chip>{m.skill_matplotlib()}</Chip>
						<Chip>{m.skill_markdown()}</Chip>
						<Chip>{m.skill_curiosity()}</Chip>
					</ul>
				</div>

				<div className="flex items-start gap-[18px]">
					<span aria-hidden className="type-mono text-moss-ink">
						//
					</span>
					<div className="flex flex-1 flex-col gap-[7px]">
        <p className="type-mono uppercase text-moss-ink">
            {m.personal_label()}
        </p>
        <p className="type-body text-ink">{m.personal_text()}</p>
    </div>
					<img src={coffeeIcon} alt="" width={23} height={23} className="origin-bottom cursor-pointer hover:animate-ss" />
				</div>
				<div className="mobile-footer lg:hidden">
					<div className="flex w-full items-center justify-between px-12">
						<p className="type-logo text-lavender">
							<span className="block">{site.logo[0]}</span>
							<span className="block">{site.logo[1]}</span>
						</p>
						<div className="flex items-center gap-4">
							<a href={site.github} className="type-mono text-lavender">
								GitHub <span className="text-marine">↗</span>
							</a>
							<a href={site.linkedin} className="type-mono text-lavender">
								LinkedIn <span className="text-marine">↗</span>
							</a>
						</div>
					</div>
					<a href="/contact" className="type-body text-marine">
						{m.cta_question()}{" "}
						<span className="text-lavender">{m.cta_link()} ↗</span>
					</a>
				</div>
			</section>
		</div>
	);
}
