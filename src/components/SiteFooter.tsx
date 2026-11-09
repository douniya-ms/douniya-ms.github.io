import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import githubIcon from '#/assets/icons/github.svg'
import linkedinIcon from '#/assets/icons/linkedin.svg'
import { ArrowUpRight } from '#/components/icons'
import { site } from '#/content/site'
import { m } from '#/paraglide/messages'

function FooterLink({ href, icon, children }: { href: string; icon?: string; children: ReactNode }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group type-mono flex items-center gap-2 text-moss-ink"
    >
      {icon && (
         <img 
           src={icon} 
           alt="" 
           width={15} 
           height={15}
           // Standard vertical SS for prefix icons
           className="origin-bottom group-hover:animate-ss" 
         />
      )}
      <span className="flex items-center gap-1">
        <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
            {children}
        </span>
        {/* Diagonal top-right SS for suffix arrows */}
        <ArrowUpRight className="origin-bottom-left text-marine group-hover:animate-ss-tr" />
      </span>
    </a>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer relative z-10 hidden h-[105px] grid-cols-6 items-center lg:grid">
      <ul className="col-span-3 flex items-center gap-6 pl-20">
        <li><FooterLink href={site.github} icon={githubIcon}>{m.footer_github()}</FooterLink></li>
        <li><FooterLink href={site.linkedin} icon={linkedinIcon}>{m.footer_linkedin()}</FooterLink></li>
        <li><FooterLink href={site.email}>{m.footer_hello()}</FooterLink></li>
      </ul>

      <div className="col-span-3 ml-[34px] flex h-[65px] items-center gap-2.5 border-t border-surface-variant pr-8">
        <span className="type-body text-marine">{m.cta_question()}</span>
        <Link to="/contact" className="group type-body flex items-center gap-1 text-ink">
          <span className="relative pb-[1px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
             {m.cta_link()}
          </span>
          {/* Diagonal top-right SS for the CTA arrow */}
          <ArrowUpRight className="origin-bottom-left text-[13px] group-hover:animate-ss-tr" />
        </Link>
      </div>
    </footer>
  )
}