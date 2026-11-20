import { createFileRoute } from "@tanstack/react-router";
import githubIcon from "#/assets/icons/github.svg";
import linkedinIcon from "#/assets/icons/linkedin.svg";
import { FooterLink } from "#/components/FooterLink";
import { Identity } from "#/components/Identity";
import { SectionLabel } from "#/components/SectionLabel";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";
import { pageTitle, seo } from "#/lib/seo";

export const Route = createFileRoute("/_site/contact")({
	head: () =>
		seo({ title: pageTitle(m.nav_contact()), description: m.seo_contact_description(), path: "/contact" }),
	component: Contact,
});

function Contact() {
	return (
		<div className="about-page relative lg:grid lg:grid-cols-6">
			<Identity />

			<section className="about-content relative z-30 flex flex-col px-(--gutter) lg:col-span-3 lg:px-0 lg:pt-[50px] lg:pr-4">
				{/* Mobile: this block takes the free space and centers its content (safely,
				    with auto margins, so a tall screen never clips the top). Desktop: top-aligned. */}
				<div className="grid flex-1 lg:block">
					<div className="my-auto flex flex-col gap-6 lg:my-0 lg:gap-[104px]">
						<div className="animate-fade-up" style={{ animationDelay: "0.5s" }}>
							<SectionLabel withRule caps={false}>{m.contact_label()}</SectionLabel>
						</div>

						<div className="flex animate-fade-up flex-col gap-12" style={{ animationDelay: "0.7s" }}>
							<h2 className="type-heading contact-heading text-ink">{m.contact_heading()}</h2>
							<p className="type-body max-w-[600px] text-ink">{m.contact_text()}</p>
							<address className="type-body flex flex-col text-ink not-italic">
								<a
									href={`mailto:${site.email}`}
									className="group relative w-fit pb-0.5 font-bold transition-colors hover:text-marine after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
								>
									{site.email}
								</a>
								<a
									href={site.phoneHref}
									className="group relative w-fit pb-0.5 font-bold transition-colors hover:text-marine after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
								>
									{site.phone}
								</a>
							</address>
						</div>
					</div>
				</div>

				{/* Mobile footer bar: sits at the bottom when content is short, scrolls with it when long */}
				<div className="-mx-4 flex flex-none items-center justify-between bg-moss px-4 py-2 text-lavender lg:hidden">
					<p aria-hidden className="type-logo-sm">
						<span className="block">{site.logo[0]}</span>
						<span className="block">{site.logo[1]}</span>
					</p>
					<ul className="flex items-center gap-6">
						{site.github && <li><FooterLink href={site.github} icon={githubIcon} className="text-lavender">{m.footer_github()}</FooterLink></li>}
						<li><FooterLink href={site.linkedin} icon={linkedinIcon} className="text-lavender">{m.footer_linkedin()}</FooterLink></li>
					</ul>
				</div>
			</section>
		</div>
	);
}