import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";

/**
 * GoatCounter analytics: privacy-friendly, no cookies, no banner needed.
 * Dashboard: https://ilyass-lr.goatcounter.com
 *
 * The site changes pages without reloading, so GoatCounter's automatic count
 * (first load only) is turned off and every page view is sent from here.
 * Only active in production builds: nothing is counted while you develop.
 */
const ENDPOINT = "https://ilyass-lr.goatcounter.com/count";

declare global {
	interface Window {
		goatcounter?: { count?: (vars: { path: string }) => void };
	}
}

/** The script tag, for the document <head> */
export function AnalyticsScript() {
	if (!import.meta.env.PROD) return null;
	return (
		<script
			data-goatcounter={ENDPOINT}
			data-goatcounter-settings='{"no_onload": true}'
			async
			src="https://gc.zgo.at/count.js"
		/>
	);
}

/** Sends one page view per page shown, including the first one */
export function PageviewTracker() {
	const pathname = useLocation({ select: (location) => location.pathname });

	useEffect(() => {
		if (!import.meta.env.PROD) return;
		// The real address, with its /fr prefix, so each language is counted separately
		const path = window.location.pathname;
		let tries = 0;
		// The script loads asynchronously: wait for it (up to ~10s) on the first page view
		const send = () => {
			const count = window.goatcounter?.count;
			if (count) count({ path });
			else if (tries++ < 40) timer = window.setTimeout(send, 250);
		};
		let timer = window.setTimeout(send, 0);
		return () => window.clearTimeout(timer);
	}, [pathname]);

	return null;
}
