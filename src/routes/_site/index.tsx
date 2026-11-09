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
		<div className="about-page relative lg:grid lg:min-h-[calc(100dvh-209px)] lg:grid-cols-6">
            
            <section className="about-identity relative lg:col-span-3 lg:self-start">
                <div className="relative flex aspect-[580/682] overflow-hidden lg:max-h-[max(600px,calc(100dvh-209px))] lg:w-[86.3%]">
    {/* Images animate in parallel */}
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

                <div className="about-nameplate animate-fade-up relative z-30 px-(--gutter) py-6 lg:absolute lg:top-[35%] lg:-left-[25px] lg:w-[83%] lg:p-0" style={{ animationDelay: "0.5s" }}>
                    <h1 className="type-display text-ink">
                        <span>{site.firstName}</span>
                        <span>{site.lastName}</span>
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

<section className="about-content relative z-30 flex flex-col gap-6 lg:short:gap-4 px-(--gutter) lg:col-span-3 lg:px-0 lg:pt-[50px] lg:short:pt-6 lg:pr-4">
                
                {/* 1. SECTION 1 TITLE APPEARS FIRST: "A little about me" */}
                <div className="mobile-hidden-section-label animate-fade-up" style={{ animationDelay: "0.5s" }}>
                    <SectionLabel withRule>{m.about_label()}</SectionLabel>
                </div>

                {/* Section 1 Content follows shortly after */}
                <div className="flex flex-col gap-6 lg:short:gap-4 animate-fade-up" style={{ animationDelay: "0.7s" }}>
                    <h2 className="type-heading text-ink">
                        <span className="block">{m.about_heading_1()}</span>
                        <span className="block">{m.about_heading_2()}</span>
                    </h2>
                    <p className="type-body max-w-[600px] text-ink">{m.about_p1()}</p>
                    <p className="type-body max-w-[600px] text-ink">{m.about_p2()}</p>
                </div>

                {/* 2. SECTION 2 TITLE APPEARS FIRST: "Things I'm learning" */}
                <div className="flex flex-col gap-4">
                    <div className="animate-fade-up" style={{ animationDelay: "0.6s" }}>
                        <p className="type-mono uppercase text-moss-ink">
                            {m.learning_label()}
                        </p>
                    </div>
                    {/* Chips follow after */}
                    <div className="animate-slide-in-right flex flex-col gap-2" style={{ animationDelay: "0.8s" }}>
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
                </div>

                {/* 3. SECTION 3 TITLE APPEARS FIRST: "When I'm not at my desk" */}
                <div className="animate-slide-in-right flex items-start gap-[18px]" style={{ animationDelay: "0.7s" }}>
                    <div>
                        <span aria-hidden className="type-mono text-moss-ink">
                            //
                        </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-[7px]">
                        <div>
                            <p className="type-mono uppercase text-moss-ink">
                                {m.personal_label()}
                            </p>
                        </div>
                        {/* Personal description text follows */}
                        <div>
                            <p className="type-body text-ink">{m.personal_text()}</p>
                        </div>
                    </div>
                    <div>
                        <img
                            src={coffeeIcon}
                            alt=""
                            width={23}
                            height={23}
                            className="origin-bottom cursor-pointer hover:animate-ss"
                        />
                    </div>
                </div>
                
                <div className="mobile-footer lg:hidden">
                    <div className="flex w-full items-center justify-between px-(--mobile-footer-row-padding)">
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