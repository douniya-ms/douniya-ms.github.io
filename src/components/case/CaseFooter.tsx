import githubIcon from "#/assets/icons/github.svg";
import linkedinIcon from "#/assets/icons/linkedin.svg";
import { FooterLink } from "#/components/FooterLink";
import { ArrowUpRight } from "#/components/icons";
import { site } from "#/content/site";
import { m } from "#/paraglide/messages";

function Logo({ className }: { className: string }) {
	return (
		<p aria-hidden className={className}>
			<span className="block">{site.logo[0]}</span>
			<span className="block">{site.logo[1]}</span>
		</p>
	);
}

/** Moss contact band + identity footer, shared by every case study. */
export function CaseFooter() {
	return (
		<>
			<section className="flex flex-col gap-6 bg-moss px-4 py-8 text-lavender lg:flex-row lg:items-center lg:gap-[70px] lg:px-(--gutter) lg:py-16">
				<div className="flex flex-col gap-[18px] lg:w-[51%] lg:shrink-0">
					<h2 className="type-heading">{m.case_invite_heading()}</h2>
					<p className="type-body">{m.case_invite_text()}</p>
				</div>
				<address className="flex flex-col gap-2 not-italic">
					<a href={`mailto:${site.email}`} className="group type-body flex w-fit items-center gap-1.5">
						<span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100 group-focus-visible:after:origin-left group-focus-visible:after:scale-x-100">{site.email}</span>
						<ArrowUpRight className="text-xs transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
					</a>
					<a href={site.phoneHref} className="type-body w-fit relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100">
						{site.phone}
					</a>
				</address>

				{/* Mobile: the identity row closes the moss band */}
				<div className="flex items-center gap-6 lg:hidden">
					<Logo className="type-logo-sm mr-auto" />
					<FooterLink href={site.github} icon={githubIcon} className="text-lavender">{m.footer_github()}</FooterLink>
					<FooterLink href={site.linkedin} icon={linkedinIcon} className="text-lavender">{m.footer_linkedin()}</FooterLink>
				</div>
			</section>

			{/* Desktop: identity footer on lavender */}
			<footer className="hidden items-center justify-between px-(--gutter) py-8 lg:flex">
				<ul className="flex items-center gap-6">
					<li><FooterLink href={site.github} icon={githubIcon}>{m.footer_github()}</FooterLink></li>
					<li><FooterLink href={site.linkedin} icon={linkedinIcon}>{m.footer_linkedin()}</FooterLink></li>
				</ul>
				<div className="flex items-center gap-16">
					<p className="type-mono text-marine">{m.tagline()}</p>
					<Logo className="type-logo text-moss" />
				</div>
			</footer>
		</>
	);
}
