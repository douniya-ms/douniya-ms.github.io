import { createFileRoute } from "@tanstack/react-router";
import coffeeIcon from "#/assets/icons/coffee.svg";
import { Chip } from "#/components/Chip";
import { SectionLabel } from "#/components/SectionLabel";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";
import { Identity } from "#/components/Identity";

export const Route = createFileRoute("/_site/")({ component: About });

function About() {
    return (
        <div className="about-page relative lg:grid lg:min-h-[calc(100dvh-209px)] lg:grid-cols-6">

            <Identity>
                <div className="mobile-about-label">
                    <SectionLabel withRule>{m.about_label()}</SectionLabel>
                </div>
            </Identity>

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