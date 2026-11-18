/** Smart ATS: case study copy, from Douniya's answers. */
import atsDashboard from "#/assets/projects/smart-ats/ATS-1.png";
import atsMatching from "#/assets/projects/smart-ats/ATS-2.png";
import type { CaseCopy } from "#/components/case/types";

const en: CaseCopy = {
	intro:
		"As a student looking for my own first opportunities, I know what’s at stake when a machine reads your CV before a person does. Smart ATS reads CVs by meaning, not keywords, and shows the recruiter why each candidate scored the way they did.",
	aim: "The aim: match candidates to roles on four weighted criteria, with results a recruiter can open up and understand.",
	tags: ["NLP", "LLM", "Backend", "Data Engineering"],
	readingCue: "The why, the engine, the lessons",
	facts: [
		{ label: "Focus", value: "NLP | LLM | Backend" },
		{ label: "My role", value: "Backend & AI" },
		{ label: "Collaboration", value: "Pair project at SEWS Kénitra" },
	],
	chapters: [
		{
			marker: "01 / The spark",
			title: "A good profile shouldn’t lose to a bad parser.",
			layout: "aside-left",
			aside: {
				kind: "screenshot",
				src: atsDashboard,
				alt: "CVForge dashboard: job offers, CVs ranked and CVs in progress",
				caption: "CVForge / Dashboard",
				detail: "Offers, CVs, matching",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"I’m a student looking for opportunities myself, so I know how much a fair chance in recruitment matters. I didn’t want a strong profile to be rejected simply because an automated system misread its CV.",
						"That’s what pushed me, during my project at SEWS Kénitra, to build an intelligent ATS: one that analyses applications and gives results that are more transparent, and explainable.",
					],
				},
				{ kind: "question", text: "How many good candidates are filtered out before a human ever reads their name?" },
			],
		},
		{
			marker: "02 / What makes it different",
			title: "Meaning, not keywords.",
			layout: "aside-right",
			aside: {
				kind: "stats",
				items: [
					{ value: "50%", label: "Skills" },
					{ value: "25%", label: "Experience" },
					{ value: "15%", label: "Education" },
					{ value: "10%", label: "Languages" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Most ATS tools hunt for keywords. Ours goes further: an LLM analyses each CV, and ESCO, the European classification of skills, recognises a skill even when it’s worded differently.",
						"Every candidate is then scored on four weighted criteria, and the recruiter can open the matching details to see exactly where the score comes from.",
					],
				},
				{
					kind: "question",
					text: "If one candidate writes “data analysis” and another “analyse de données”, should the system see one skill, or two?",
				},
			],
		},
		{
			marker: "03 / My part",
			title: "Two people, a clear split.",
			layout: "aside-right",
			aside: {
				kind: "diagram",
				title: "The engine at a glance",
				annotation: "Backend pipeline",
				layers: [
					{ label: "01 / PyMuPDF", text: "Extract the text from every CV, whatever its layout." },
					{ label: "02 / LLM (Groq API)", text: "Structure it into skills, experience, education and languages." },
					{ label: "03 / Pydantic + ESCO + embeddings", text: "Validate the data and map skills to a shared vocabulary." },
					{ label: "04 / PostgreSQL + Celery + RabbitMQ", text: "Score, store and process applications in the background." },
				],
				caption: "Four steps, each one checkable: when a score looks wrong, you can see which step got it wrong.",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"We built Smart ATS as a pair at SEWS Kénitra. My teammate built the frontend in React; I built the backend and the AI.",
						"That meant CV extraction and parsing, the matching engine and storage with PostgreSQL, plus Celery and RabbitMQ to process many applications asynchronously, so a batch of CVs never blocks the app.",
					],
				},
				{ kind: "question", text: "What should happen when the LLM is confident, but wrong?" },
			],
		},
		{
			marker: "04 / The hard part",
			title: "No two CVs look alike.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"The biggest difficulty was the variety of CV formats. Some use tables, others several columns, and every layout makes extraction harder in its own way.",
						"Matching was the second wall. Two candidates can have exactly the same skill without using the same words to describe it, and a naive system would rank them differently.",
					],
				},
				{ kind: "question", text: "How do you test a parser against CV layouts you haven’t seen yet?" },
			],
		},
		{
			marker: "05 / Finding a way through",
			title: "Break the problem into steps you can check.",
			layout: "full",
			blocks: [
				{ kind: "text", paragraphs: ["I split the processing into four stages, each with a single job:"] },
				{
					kind: "list",
					items: [
						{ label: "Extraction", text: "PyMuPDF pulls the raw text out of each CV." },
						{ label: "Structuring", text: "An LLM turns that text into structured fields." },
						{ label: "Validation", text: "Pydantic rejects anything that doesn’t match the expected shape." },
						{ label: "Normalisation", text: "ESCO maps every skill to a shared reference, whatever the wording." },
					],
				},
				{
					kind: "text",
					paragraphs: ["This made the code easier to organise, the errors easier to find, and the results more consistent."],
				},
				{
					kind: "figure",
					src: atsMatching,
					alt: "CVForge matching screen: a Data Engineer offer and the profile the LLM extracted from it, as structured JSON",
					caption: "CVForge / Matching",
					detail: "Offer profile, structured by the LLM",
				},
				{ kind: "question", text: "Which of those four steps would you trust least, and why?" },
			],
		},
		{
			marker: "06 / What it taught me",
			title: "Explainable beats impressive.",
			layout: "marker-left",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"I learned to integrate an LLM into a real application and to build a modular backend.",
						"Above all, I understood that in AI, reliability and explainability matter as much as technical performance, especially when a system can influence human decisions, like who gets an interview.",
					],
				},
				{
					kind: "question",
					label: "Still worth asking",
					text: "Would you accept a hiring decision you couldn’t ask the system to explain?",
				},
			],
		},
	],
};

const fr: CaseCopy = {
	intro:
		"En tant qu’étudiante à la recherche de mes premières opportunités, je sais ce qui se joue quand une machine lit votre CV avant une personne. Smart ATS lit les CV par le sens, pas par mots-clés, et montre au recruteur pourquoi chaque candidat obtient son score.",
	aim: "L’objectif : rapprocher candidats et postes selon quatre critères pondérés, avec des résultats que le recruteur peut ouvrir et comprendre.",
	tags: ["NLP", "LLM", "Backend", "Data Engineering"],
	readingCue: "Le pourquoi, le moteur, les leçons",
	facts: [
		{ label: "Domaine", value: "NLP | LLM | Backend" },
		{ label: "Mon rôle", value: "Backend & IA" },
		{ label: "Collaboration", value: "Projet en binôme chez SEWS Kénitra" },
	],
	chapters: [
		{
			marker: "01 / L’étincelle",
			title: "Un bon profil ne devrait pas perdre face à un mauvais parseur.",
			layout: "aside-left",
			aside: {
				kind: "screenshot",
				src: atsDashboard,
				alt: "Tableau de bord CVForge : offres, CV classés et CV en cours",
				caption: "CVForge / Tableau de bord",
				detail: "Offres, CV, matching",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"En tant qu’étudiante à la recherche d’opportunités professionnelles, je sais à quel point il est important d’avoir une chance équitable lors d’un recrutement. Je ne voulais pas qu’un bon profil soit écarté simplement parce que son CV était mal interprété par un système automatique.",
						"C’est ce qui m’a motivée à développer, pendant mon projet chez SEWS Kénitra, un ATS intelligent capable d’analyser les candidatures et de proposer des résultats plus transparents et explicables.",
					],
				},
				{ kind: "question", text: "Combien de bons candidats sont écartés avant qu’un humain ne lise leur nom ?" },
			],
		},
		{
			marker: "02 / Ce qui le distingue",
			title: "Le sens, pas les mots-clés.",
			layout: "aside-right",
			aside: {
				kind: "stats",
				items: [
					{ value: "50 %", label: "Compétences" },
					{ value: "25 %", label: "Expérience" },
					{ value: "15 %", label: "Formation" },
					{ value: "10 %", label: "Langues" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"La plupart des ATS se limitent à rechercher des mots-clés. Le nôtre va plus loin : un LLM analyse chaque CV, et ESCO, la classification européenne des compétences, reconnaît une compétence même lorsqu’elle est formulée différemment.",
						"Chaque candidat reçoit ensuite un score selon quatre critères pondérés, et le recruteur peut consulter le détail du matching pour comprendre d’où vient ce score.",
					],
				},
				{
					kind: "question",
					text: "Si un candidat écrit « data analysis » et un autre « analyse de données », le système doit-il voir une compétence, ou deux ?",
				},
			],
		},
		{
			marker: "03 / Ma part",
			title: "Deux personnes, une répartition claire.",
			layout: "aside-right",
			aside: {
				kind: "diagram",
				title: "Le moteur en un coup d’œil",
				annotation: "Pipeline backend",
				layers: [
					{ label: "01 / PyMuPDF", text: "Extraire le texte de chaque CV, quelle que soit sa mise en page." },
					{ label: "02 / LLM (API Groq)", text: "Le structurer en compétences, expérience, formation et langues." },
					{ label: "03 / Pydantic + ESCO + embeddings", text: "Valider les données et normaliser les compétences." },
					{ label: "04 / PostgreSQL + Celery + RabbitMQ", text: "Calculer, stocker et traiter les candidatures en arrière-plan." },
				],
				caption: "Quatre étapes, chacune vérifiable : quand un score semble faux, on voit quelle étape s’est trompée.",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Ce projet a été réalisé en binôme chez SEWS Kénitra. Mon binôme s’est occupé du frontend avec React, et j’ai développé le backend et la partie IA.",
						"J’ai travaillé sur l’extraction et le parsing des CV, le moteur de matching et le stockage avec PostgreSQL, et j’ai utilisé Celery et RabbitMQ pour traiter plusieurs candidatures de façon asynchrone, sans bloquer l’application.",
					],
				},
				{ kind: "question", text: "Que doit-il se passer quand le LLM est sûr de lui, mais se trompe ?" },
			],
		},
		{
			marker: "04 / Le plus difficile",
			title: "Deux CV ne se ressemblent jamais.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"La plus grande difficulté était la diversité des formats de CV. Certains contiennent des tableaux, d’autres plusieurs colonnes, et chaque mise en page complique l’extraction à sa façon.",
						"Le matching était le deuxième obstacle. Deux candidats peuvent posséder la même compétence sans utiliser les mêmes mots pour la décrire, et un système naïf les classerait différemment.",
					],
				},
				{ kind: "question", text: "Comment tester un parseur face à des mises en page qu’on n’a jamais vues ?" },
			],
		},
		{
			marker: "05 / Trouver la voie",
			title: "Découper le problème en étapes vérifiables.",
			layout: "full",
			blocks: [
				{ kind: "text", paragraphs: ["J’ai divisé le traitement en quatre étapes, chacune avec une seule mission :"] },
				{
					kind: "list",
					items: [
						{ label: "Extraction", text: "PyMuPDF extrait le texte brut de chaque CV." },
						{ label: "Structuration", text: "Un LLM transforme ce texte en champs structurés." },
						{ label: "Validation", text: "Pydantic rejette tout ce qui ne respecte pas le format attendu." },
						{ label: "Normalisation", text: "ESCO rattache chaque compétence à une référence commune, quelle que soit la formulation." },
					],
				},
				{
					kind: "text",
					paragraphs: ["Cette approche m’a permis de mieux organiser le code, d’identifier les erreurs plus facilement et d’améliorer la cohérence des résultats."],
				},
				{
					kind: "figure",
					src: atsMatching,
					alt: "Écran de matching CVForge : une offre Data Engineer et le profil extrait par le LLM, en JSON structuré",
					caption: "CVForge / Matching",
					detail: "Profil de l’offre, structuré par le LLM",
				},
				{ kind: "question", text: "À laquelle de ces quatre étapes feriez-vous le moins confiance, et pourquoi ?" },
			],
		},
		{
			marker: "06 / Ce que j’en retiens",
			title: "L’explicable avant l’impressionnant.",
			layout: "marker-left",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"J’ai appris à intégrer un LLM dans une application réelle et à construire un backend modulaire.",
						"Mais surtout, j’ai compris qu’en IA, la fiabilité et l’explicabilité sont aussi importantes que les performances techniques, particulièrement lorsqu’un système peut influencer des décisions humaines, comme le choix des candidats invités en entretien.",
					],
				},
				{
					kind: "question",
					label: "À se demander encore",
					text: "Accepteriez-vous une décision d’embauche que le système serait incapable d’expliquer ?",
				},
			],
		},
	],
};

export const smartAtsCopy = { en, fr };
