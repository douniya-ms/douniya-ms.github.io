import { Link, useMatch } from "@tanstack/react-router";
import githubIcon from "#/assets/icons/github.svg";
import linkedinIcon from "#/assets/icons/linkedin.svg";
import { FooterLink } from "#/components/FooterLink";
import { ArrowUpRight } from "#/components/icons";
import { ProjectControls } from "#/components/ProjectControls";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";

export function SiteFooter() {
	const onContact = useMatch({ from: "/_site/contact", shouldThrow: false });
	const onWork = useMatch({ from: "/_site/work/", shouldThrow: false });

	return (
		<footer className="site-footer relative z-30 hidden h-[105px] grid-cols-6 items-center lg:grid">
			<ul className="col-span-3 flex items-center gap-6 pl-20">
				{site.github && <li><FooterLink href={site.github} icon={githubIcon}>{m.footer_github()}</FooterLink></li>}
				<li><FooterLink href={site.linkedin} icon={linkedinIcon}>{m.footer_linkedin()}</FooterLink></li>
				{!onContact && (
					<li><FooterLink href={`mailto:${site.email}`}>{m.footer_hello()}</FooterLink></li>
				)}
			</ul>

			<div className="col-span-3 ml-[34px] flex h-[65px] items-center border-t border-surface-variant pr-8">
				{onContact ? (
					<p aria-hidden className="type-logo ml-auto text-moss">
						<span className="block">{site.logo[0]}</span>
						<span className="block">{site.logo[1]}</span>
					</p>
				) : (
					<div className="flex flex-1 items-center justify-between gap-6">
						<div className="flex items-center gap-2.5">
							<span className="type-body text-marine">{m.cta_question()}</span>
							<Link to="/contact" className="group type-body flex items-center gap-1 text-ink">
								<span className="relative pb-[1px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
									{m.cta_link()}
								</span>
								<ArrowUpRight className="origin-bottom-left text-[13px] group-hover:animate-ss-tr" />
							</Link>
						</div>
						{onWork && <ProjectControls />}
					</div>
				)}
			</div>
		</footer>
	);
}