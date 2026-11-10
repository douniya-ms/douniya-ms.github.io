import { m } from "#/paraglide/messages";

export const navLinks = [
	{ to: "/", index: "01", label: () => m.nav_about() },
	{ to: "/work", index: "02", label: () => m.nav_work() },
	{ to: "/contact", index: "03", label: () => m.nav_contact() },
] as const;