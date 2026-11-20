import { site } from "#/content/site";
import { getLocale } from "#/paraglide/runtime";

/**
 * The site's public address, without a trailing slash.
 * Set at build time by the deploy workflow (https://<owner>.github.io, or the
 * SITE_URL repository variable for a custom domain). Falls back to the live address.
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://douniya-ms.github.io").replace(/\/+$/, "");

/** Absolute URL of a page in a given language. GitHub Pages serves folders, so keep the trailing slash. */
export function pageUrl(path: string, locale: "en" | "fr") {
	const clean = path === "/" ? "/" : `/${path.replace(/^\/+|\/+$/g, "")}/`;
	const localized = locale === "en" ? clean : `/fr${clean}`;
	return `${SITE_URL}${localized}`;
}

type SeoOptions = {
	/** Full page title, as shown in the browser tab and search results */
	title: string;
	/** 150–160 characters ideally */
	description: string;
	/** The page's path without the language prefix, e.g. "/work" */
	path: string;
	/** Social preview image in public/, e.g. "/og/avatar.jpg" (1200x630) */
	image?: string;
	type?: "website" | "article";
	/** Keep the page out of search results (e.g. the 404 page) */
	noindex?: boolean;
};

/**
 * Everything a page needs in <head> for search engines and link previews:
 * title, description, canonical URL, EN/FR alternates, Open Graph and Twitter cards.
 * Use it as a route's `head`: head: () => seo({ ... })
 */
export function seo({ title, description, path, image = "/og/site.jpg", type = "website", noindex }: SeoOptions) {
	const locale = getLocale();
	const url = pageUrl(path, locale);
	const imageUrl = `${SITE_URL}${image}`;

	return {
		meta: [
			{ title },
			{ name: "description", content: description },
			...(noindex ? [{ name: "robots", content: "noindex" }] : []),
			{ property: "og:type", content: type },
			{ property: "og:site_name", content: `${site.firstName} ${site.lastName}` },
			{ property: "og:title", content: title },
			{ property: "og:description", content: description },
			{ property: "og:url", content: url },
			{ property: "og:image", content: imageUrl },
			{ property: "og:image:width", content: "1200" },
			{ property: "og:image:height", content: "630" },
			{ property: "og:image:alt", content: title },
			{ property: "og:locale", content: locale === "fr" ? "fr_FR" : "en_US" },
			{ property: "og:locale:alternate", content: locale === "fr" ? "en_US" : "fr_FR" },
			{ name: "twitter:card", content: "summary_large_image" },
			{ name: "twitter:title", content: title },
			{ name: "twitter:description", content: description },
			{ name: "twitter:image", content: imageUrl },
		],
		links: [
			{ rel: "canonical", href: url },
			{ rel: "alternate", hrefLang: "en", href: pageUrl(path, "en") },
			{ rel: "alternate", hrefLang: "fr", href: pageUrl(path, "fr") },
			{ rel: "alternate", hrefLang: "x-default", href: pageUrl(path, "en") },
		],
	};
}

/** "Work · Douniya Maayoussi" */
export const pageTitle = (page: string) => `${page} · ${site.firstName} ${site.lastName}`;
