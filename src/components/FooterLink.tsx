import type { ReactNode } from "react";
import { ArrowUpRight } from "#/components/icons";

type FooterLinkProps = {
	href: string;
	icon?: string;
	className?: string;
	children: ReactNode;
};

export function FooterLink({ href, icon, className = "text-moss-ink", children }: FooterLinkProps) {
	const external = href.startsWith("http");
	return (
		<a
			href={href}
			target={external ? "_blank" : undefined}
			rel={external ? "noreferrer" : undefined}
			className={`group type-mono flex items-center gap-2 ${className}`}
		>
			{icon && (
				<img src={icon} alt="" width={15} height={15} className="origin-bottom group-hover:animate-ss" />
			)}
			<span className="flex items-center gap-1">
				<span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
					{children}
				</span>
				<ArrowUpRight className="origin-bottom-left text-marine group-hover:animate-ss-tr" />
			</span>
		</a>
	);
}