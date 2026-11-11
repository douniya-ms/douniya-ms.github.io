/**
 * CADENCE case study copy (a fictional, illustrative project).
 * The layout lives in src/routes/_case/work/cadence.tsx; only the words live here.
 */

const en = {
	intro:
		"From a spreadsheet of last week’s sales to a clear plan for next week’s shelves. Cadence brings a data pipeline, a forecasting model and a simple mobile view together to help small shops decide what to reorder, and when.",
	aim: "The aim: test whether a small, well-checked pipeline can make weekly stock decisions easier than gut feeling alone.",
	tags: ["Data engineering", "ML", "LLM", "Cloud"],
	readingCue: "The problem, the pipeline, the lessons",
	facts: [
		{ label: "Focus", value: "Data | Forecasting | Decision support" },
		{ label: "My role", value: "Data & AI Engineer" },
		{ label: "Collaboration", value: "Team of 3" },
	],
	note: "Illustrative example. All names, data and figures are fictional.",

	intention: {
		marker: "01 / The intention",
		title: "Turn last week into next week’s plan.",
		paragraphs: [
			"Small shop owners make dozens of stock decisions every week with almost no tooling. Overstock ties up cash; empty shelves send customers elsewhere. The data to do better already exists in their till exports, but it is scattered, inconsistent and rarely read.",
			"Our goal was modest and measurable: forecast weekly demand per product, show it in a view an owner can read in under a minute, and be honest about how far to trust it. This is a prototype tested on historical data, not a production system.",
		],
		question: "A small question with big consequences: how wrong can a forecast be before it stops helping?",
		imageAlt: "Cadence reorder list: products, order quantities, ranges and confidence labels",
	},

	startingPoint: {
		marker: "02 / Starting point",
		title: "Messy data, real constraints.",
		paragraphs: [
			"We started with 14 months of daily sales exports from 38 shops, saved by hand as spreadsheets. Product names differed between shops, dates came in two formats and some days were simply missing. Before any model, the first job was to decide what counts as a trustworthy row.",
			"We were a team of three: a mobile developer, a product designer and me. I owned the data side: ingestion, cleaning, features and the forecasting experiments. Established tools gave us the building blocks; the project-specific work was making messy inputs behave like one dataset.",
		],
	},

	underTheHood: {
		marker: "03 / Under the hood",
		title: "From spreadsheets to forecasts.",
		paragraphs: [
			"Files land in cloud storage, where Python jobs validate and standardise them into a PostgreSQL warehouse. dbt models turn raw rows into daily, product-level features, and a scheduled workflow retrains the model every week. Each step can be re-run on its own, which made debugging far easier.",
			"LightGBM predicts weekly demand per product, with prediction intervals so the app can show a range instead of a single number. An LLM then writes a two-sentence summary of the biggest changes, in French or English. It only receives computed figures, so it explains the numbers rather than inventing them.",
		],
		diagram: {
			title: "The system at a glance",
			annotation: "Conceptual data flow",
			layers: [
				{ label: "01 / Python + cloud storage", text: "Validate and standardise raw sales files." },
				{ label: "02 / PostgreSQL + dbt", text: "Model clean, daily features per product." },
				{ label: "03 / LightGBM", text: "Forecast weekly demand with an error range." },
				{ label: "04 / API + mobile app", text: "Serve forecasts and a plain-language summary." },
			],
			caption: "Different tools, one thread: keep the meaning of a sale intact from file to forecast.",
		},
	},

	experience: {
		marker: "04 / The experience",
		title: "A range, not a promise.",
		paragraphs: [
			"Owners get a short reorder list: what to order, how much and how sure we are. Each line shows a range and a confidence label instead of a single figure, and a weekly summary explains the biggest changes in plain language.",
			"On weeks the model had never seen, it cut average forecast error by about 18% against a simple “same as last week” baseline. The gain was uneven: fast-moving products improved most, while rarely sold items stayed hard to predict. We chose to say so in the interface.",
		],
		imageAlt: "Cadence reorder list beside the forecast detail for olive oil, with its 8-week range",
		states: [
			{ label: "High", text: "A stable product with a long sales history." },
			{ label: "Medium", text: "Enough history, but demand moves around." },
			{ label: "Low", text: "Sparse or new products: treat the range as a rough guide." },
		],
	},

	hardPart: {
		marker: "05 / The hard part",
		title: "Clean data is a decision, not a step.",
		paragraphs: [
			"The hardest problem was not the model. Forecasts for a dozen products suddenly dipped and nobody could explain why. Tracing them back, I found that two shops recorded promotions as negative sales, which quietly distorted the training data.",
			"I stopped tuning and followed one product end to end: raw row, cleaned row, feature, prediction. The bug sat in the cleaning step, not the model. I added validation rules so questionable files are held back and flagged instead of silently loaded.",
		],
		considerations: [
			{ label: "Data contracts", text: "Define what a valid file looks like and reject anything that breaks the rule, with a message a person can act on." },
			{ label: "Evaluation", text: "Test on held-out weeks against a naive baseline, so the result mirrors real use rather than shuffled rows." },
			{ label: "LLM guardrails", text: "Pass only computed figures to the summary step and check every number in the text against its source." },
		],
		closing: [
			"The result: weekly retraining now runs with automated data checks, and a short report lists any file that was held back, so the team finds problems before a shop owner does.",
			"The lesson stuck: test each hand-off on its own, then reconnect the whole flow.",
		],
	},

	forward: {
		marker: "06 / Taking it forward",
		title: "The learning lives in the data.",
		lesson:
			"The main lesson is that model choice is the smaller half of an AI product. Data quality, clear contracts and honest uncertainty decided whether owners trusted the output. A better algorithm would not have fixed the bug that taught me the most.",
		next: "Next time I would define the data contract before writing the first pipeline, add drift monitoring from day one and test the summaries with real shop owners earlier. The habit I want to keep is simple: be precise about what the system can and cannot claim.",
		questionLabel: "Still worth asking",
		question: "How do we show a shop owner what the model doesn’t know?",
	},
};

export type CadenceCopy = typeof en;

/** French draft, written to check the layout. Have Douniya review the wording. */
const fr: CadenceCopy = {
	intro:
		"D’un tableur des ventes de la semaine dernière à un plan clair pour les rayons de la semaine prochaine. Cadence réunit un pipeline de données, un modèle de prévision et une vue mobile simple pour aider les petits commerces à décider quoi réapprovisionner, et quand.",
	aim: "L’objectif : vérifier si un petit pipeline bien contrôlé peut rendre les décisions de stock hebdomadaires plus simples que l’intuition seule.",
	tags: ["Ingénierie des données", "ML", "LLM", "Cloud"],
	readingCue: "Le problème, le pipeline, les leçons",
	facts: [
		{ label: "Domaine", value: "Données | Prévision | Aide à la décision" },
		{ label: "Mon rôle", value: "Ingénieure données & IA" },
		{ label: "Collaboration", value: "Équipe de 3" },
	],
	note: "Exemple illustratif. Les noms, données et chiffres sont fictifs.",

	intention: {
		marker: "01 / L’intention",
		title: "Faire de la semaine passée le plan de la suivante.",
		paragraphs: [
			"Les petits commerçants prennent des dizaines de décisions de stock chaque semaine, presque sans outils. Le surstock immobilise de la trésorerie ; les rayons vides envoient les clients ailleurs. Les données pour mieux faire existent déjà dans leurs exports de caisse, mais elles sont éparpillées, incohérentes et rarement lues.",
			"Notre objectif était modeste et mesurable : prévoir la demande hebdomadaire par produit, l’afficher dans une vue lisible en moins d’une minute et dire honnêtement jusqu’où s’y fier. C’est un prototype testé sur des données historiques, pas un système en production.",
		],
		question: "Une petite question aux grandes conséquences : à partir de quelle erreur une prévision cesse-t-elle d’être utile ?",
		imageAlt: "Liste de réapprovisionnement Cadence : produits, quantités, fourchettes et niveaux de confiance",
	},

	startingPoint: {
		marker: "02 / Point de départ",
		title: "Des données en désordre, de vraies contraintes.",
		paragraphs: [
			"Nous sommes partis de 14 mois d’exports de ventes quotidiennes de 38 commerces, enregistrés à la main dans des tableurs. Les noms de produits variaient d’un commerce à l’autre, les dates avaient deux formats et certains jours manquaient tout simplement. Avant tout modèle, il fallait décider ce qu’est une ligne fiable.",
			"Nous étions une équipe de trois : un développeur mobile, une designer produit et moi. J’étais responsable de la partie données : ingestion, nettoyage, variables et expériences de prévision. Des outils éprouvés fournissaient les briques ; le vrai travail du projet consistait à faire d’entrées désordonnées un seul jeu de données.",
		],
	},

	underTheHood: {
		marker: "03 / Sous le capot",
		title: "Des tableurs aux prévisions.",
		paragraphs: [
			"Les fichiers arrivent dans un stockage cloud, où des scripts Python les valident et les normalisent dans un entrepôt PostgreSQL. Des modèles dbt transforment les lignes brutes en variables quotidiennes par produit, et un workflow planifié réentraîne le modèle chaque semaine. Chaque étape peut être relancée seule, ce qui a beaucoup facilité le débogage.",
			"LightGBM prévoit la demande hebdomadaire par produit, avec des intervalles de prédiction pour que l’application affiche une fourchette plutôt qu’un chiffre unique. Un LLM rédige ensuite un résumé de deux phrases des principaux changements, en français ou en anglais. Il ne reçoit que des chiffres calculés : il explique les nombres au lieu de les inventer.",
		],
		diagram: {
			title: "Le système en un coup d’œil",
			annotation: "Flux de données conceptuel",
			layers: [
				{ label: "01 / Python + stockage cloud", text: "Valider et normaliser les fichiers de ventes bruts." },
				{ label: "02 / PostgreSQL + dbt", text: "Modéliser des variables quotidiennes propres par produit." },
				{ label: "03 / LightGBM", text: "Prévoir la demande hebdomadaire avec une marge d’erreur." },
				{ label: "04 / API + application mobile", text: "Servir les prévisions et un résumé en langage clair." },
			],
			caption: "Des outils différents, un même fil : préserver le sens d’une vente, du fichier à la prévision.",
		},
	},

	experience: {
		marker: "04 / L’expérience",
		title: "Une fourchette, pas une promesse.",
		paragraphs: [
			"Les commerçants reçoivent une courte liste de réapprovisionnement : quoi commander, combien et avec quelle certitude. Chaque ligne affiche une fourchette et un niveau de confiance plutôt qu’un chiffre unique, et un résumé hebdomadaire explique les principaux changements simplement.",
			"Sur des semaines jamais vues par le modèle, l’erreur moyenne de prévision a baissé d’environ 18 % par rapport à une référence simple « comme la semaine dernière ». Le gain était inégal : les produits à forte rotation se sont le plus améliorés, tandis que les articles rarement vendus restaient difficiles à prévoir. Nous avons choisi de le dire dans l’interface.",
		],
		imageAlt: "Liste de réapprovisionnement Cadence à côté du détail de prévision de l’huile d’olive, avec sa fourchette sur 8 semaines",
		states: [
			{ label: "Élevée", text: "Un produit stable avec un long historique de ventes." },
			{ label: "Moyenne", text: "Assez d’historique, mais une demande qui varie." },
			{ label: "Faible", text: "Produits rares ou nouveaux : la fourchette n’est qu’une indication." },
		],
	},

	hardPart: {
		marker: "05 / Le plus difficile",
		title: "Des données propres, c’est une décision, pas une étape.",
		paragraphs: [
			"Le problème le plus difficile n’était pas le modèle. Les prévisions d’une douzaine de produits ont soudain chuté sans que personne ne sache pourquoi. En remontant la piste, j’ai découvert que deux commerces enregistraient leurs promotions comme des ventes négatives, ce qui faussait discrètement les données d’entraînement.",
			"J’ai arrêté d’ajuster le modèle et suivi un produit de bout en bout : ligne brute, ligne nettoyée, variable, prédiction. Le bug se trouvait dans l’étape de nettoyage, pas dans le modèle. J’ai ajouté des règles de validation pour que les fichiers douteux soient mis de côté et signalés au lieu d’être chargés en silence.",
		],
		considerations: [
			{ label: "Contrats de données", text: "Définir à quoi ressemble un fichier valide et rejeter tout ce qui enfreint la règle, avec un message sur lequel une personne peut agir." },
			{ label: "Évaluation", text: "Tester sur des semaines mises de côté face à une référence naïve, pour que le résultat reflète l’usage réel et non des lignes mélangées." },
			{ label: "Garde-fous LLM", text: "Ne transmettre que des chiffres calculés à l’étape de résumé et vérifier chaque nombre du texte par rapport à sa source." },
		],
		closing: [
			"Le résultat : le réentraînement hebdomadaire tourne désormais avec des contrôles automatiques, et un court rapport liste chaque fichier mis de côté, pour que l’équipe repère les problèmes avant un commerçant.",
			"La leçon est restée : tester chaque point de passage seul, puis reconnecter l’ensemble du flux.",
		],
	},

	forward: {
		marker: "06 / Pour la suite",
		title: "L’apprentissage se trouve dans les données.",
		lesson:
			"La leçon principale : le choix du modèle est la plus petite moitié d’un produit d’IA. La qualité des données, des contrats clairs et une incertitude assumée ont décidé si les commerçants faisaient confiance au résultat. Un meilleur algorithme n’aurait pas corrigé le bug qui m’a le plus appris.",
		next: "La prochaine fois, je définirais le contrat de données avant d’écrire le premier pipeline, j’ajouterais une surveillance de la dérive dès le premier jour et je testerais les résumés plus tôt avec de vrais commerçants. L’habitude que je veux garder est simple : être précise sur ce que le système peut et ne peut pas affirmer.",
		questionLabel: "À se demander encore",
		question: "Comment montrer à un commerçant ce que le modèle ne sait pas ?",
	},
};

export const cadenceCopy = { en, fr };
