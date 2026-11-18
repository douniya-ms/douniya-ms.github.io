/**
 * The shape of a case study. Each project's words live in
 * src/content/case-studies/<slug>.ts as one CaseCopy per language.
 */

export type Stat = { value: string; label: string };
export type Item = { label: string; text: string };

/** Content stacked in a chapter's text column, in order */
export type Block =
	| { kind: "text"; paragraphs: string[] }
	| { kind: "stats"; items: Stat[] }
	| { kind: "list"; items: Item[] }
	| { kind: "states"; items: Item[] }
	| { kind: "question"; label?: string; text: string }
	/** A screenshot on the mist surface, with a shadow */
	| { kind: "figure"; src: string; alt: string; caption?: string; detail?: string };

/** The visual beside the text, for the aside layouts */
export type Aside =
	| { kind: "image"; src: string; alt: string; caption?: string; detail?: string }
	| { kind: "diagram"; title: string; annotation: string; layers: Item[]; caption: string }
	| { kind: "stats"; items: Stat[] }
	/** Like image, but for UI screenshots: kept whole on the mist surface, with a shadow */
	| { kind: "screenshot"; src: string; alt: string; caption?: string; detail?: string };

export type CaseChapter = {
	marker: string;
	title: string;
	/**
	 * aside-left:  visual left, text right (mobile: heading, visual, text)
	 * aside-right: text left, visual right
	 * marker-left: chapter marker left, text right
	 * full:        everything stacked, full width
	 */
	layout: "aside-left" | "aside-right" | "marker-left" | "full";
	blocks: Block[];
	aside?: Aside;
};

export type CaseCopy = {
	intro: string;
	aim: string;
	tags: string[];
	readingCue: string;
	facts: { label: string; value: string }[];
	note?: string;
	chapters: CaseChapter[];
};
