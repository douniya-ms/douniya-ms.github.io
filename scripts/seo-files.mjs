/**
 * Runs after `vite build` (see the "build" script in package.json).
 * Writes dist/client/sitemap.xml and dist/client/robots.txt from the pages that
 * were actually prerendered, so new projects are included automatically.
 * The site address comes from VITE_SITE_URL (set by the deploy workflow).
 */
import { readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "dist/client";
const SITE_URL = (process.env.VITE_SITE_URL || "https://douniya-ms.github.io").replace(/\/+$/, "");

if (!existsSync(OUT)) {
	console.error(`[seo] ${OUT} not found, run vite build first`);
	process.exit(1);
}

/** Every folder that holds an index.html is a page */
function findPages(dir) {
	const pages = [];
	for (const entry of readdirSync(dir)) {
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) {
			if (entry === "assets" || entry === "og") continue;
			pages.push(...findPages(full));
		} else if (entry === "index.html") {
			const rel = relative(OUT, dir).split(sep).join("/");
			pages.push(rel ? `/${rel}/` : "/");
		}
	}
	return pages;
}

const pages = findPages(OUT).sort();
// Pair each page with its other language, for hreflang alternates
const unlocalize = (p) => (p === "/fr/" ? "/" : p.replace(/^\/fr\//, "/"));
const localize = (p, locale) => (locale === "en" ? p : p === "/" ? "/fr/" : `/fr${p}`);
const today = new Date().toISOString().slice(0, 10);

const urls = pages.map((page) => {
	const base = unlocalize(page);
	const alternates = ["en", "fr"]
		.filter((l) => pages.includes(localize(base, l)))
		.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${localize(base, l)}"/>`)
		.join("\n");
	return `  <url>\n    <loc>${SITE_URL}${page}</loc>\n    <lastmod>${today}</lastmod>\n${alternates}\n  </url>`;
});

writeFileSync(
	join(OUT, "sitemap.xml"),
	`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`,
);
writeFileSync(join(OUT, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`[seo] sitemap.xml (${pages.length} pages) and robots.txt written for ${SITE_URL}`);
