/** AVATAR: case study copy, from Douniya's answers. */
import avatarMockup from "#/assets/projects/avatar/Avatar.jpg";
import type { CaseCopy } from "#/components/case/types";

const en: CaseCopy = {
	intro:
		"It started with a friend, and an asthma attack that was frightening to watch. AVATAR is our answer: a connected bracelet that watches three vital signs, sorts the risk into three levels, and calls for help when it turns critical.",
	aim: "The aim: connect a sensor, a cloud backend, an AI model and a mobile app into one system that alerts loved ones before it’s too late.",
	tags: ["IoT", "Artificial Intelligence", "Cloud Computing", "Mobile"],
	readingCue: "The why, the system, the teamwork",
	facts: [
		{ label: "Focus", value: "IoT | AI | Cloud Computing" },
		{ label: "My role", value: "AI model (Fuzzy C-Means)" },
		{ label: "Collaboration", value: "Team of 5" },
	],
	chapters: [
		{
			marker: "01 / The spark",
			title: "It started with a friend.",
			layout: "aside-left",
			aside: {
				kind: "image",
				src: avatarMockup,
				alt: "AVATAR app screens: emergency contacts and live vital signs",
				caption: "AVATAR / Mobile experience",
				detail: "Vitals + care network",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"A friend of mine has asthma. I’ve seen how frightening an attack can be, for her and for everyone around her, and how helpless you feel when all you can do is watch.",
						"With my team, we wanted to imagine something that keeps watch when no one else can: a system that monitors her condition and alerts the people close to her when it matters. What drove me was using AI on a problem that touches people’s lives directly.",
					],
				},
				{
					kind: "question",
					text: "What should a device do in the seconds between “something is wrong” and “someone is on the way”?",
				},
			],
		},
		{
			marker: "02 / What makes it different",
			title: "Four technologies, one bracelet.",
			layout: "aside-right",
			aside: {
				kind: "stats",
				items: [
					{ value: "3", label: "Vital signs monitored" },
					{ value: "3", label: "Risk levels" },
					{ value: "4", label: "Technologies in one system" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"AVATAR combines IoT, artificial intelligence, cloud computing and a mobile app in a single system. Our bracelet, simulated with an ESP32, watches three parameters: blood oxygen, heart rate and respiratory rate.",
						"I used Fuzzy C-Means to classify the risk into three levels. When it turns critical, the system can automatically alert emergency contacts.",
					],
				},
				{
					kind: "states",
					items: [
						{ label: "Normal", text: "Stable readings, shown in the monitoring view." },
						{ label: "Warning", text: "A change worth watching, flagged for attention." },
						{ label: "Critical", text: "Emergency contacts are alerted automatically." },
					],
				},
				{
					kind: "question",
					text: "Should a reading that is 70% “warning” and 30% “critical” be treated as a warning, or as an emergency?",
				},
			],
		},
		{
			marker: "03 / My part",
			title: "A team, and my piece of it.",
			layout: "aside-right",
			aside: {
				kind: "diagram",
				title: "The system at a glance",
				annotation: "From wrist to alert",
				layers: [
					{ label: "01 / ESP32 + Wokwi + C++", text: "Simulate the bracelet and its three sensors." },
					{ label: "02 / Supabase + PostgreSQL", text: "Receive and store the readings in the cloud." },
					{ label: "03 / FastAPI + Fuzzy C-Means", text: "Classify each reading: normal, warning or critical." },
					{ label: "04 / Flutter + Dart", text: "Show the vitals and alert emergency contacts." },
				],
				caption: "Different technologies, one thread: keep the meaning of a reading intact from the wrist to the alert.",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"AVATAR was a team project: five of us. We started by analysing the needs together, then each of us took the part she knew best.",
						"Mine was the AI model: using Fuzzy C-Means, with Python and scikit-learn, to classify physiological readings by risk level. Then we came back together to integrate every piece into one system.",
					],
				},
				{ kind: "question", text: "When each person builds a different part, who owns the moment those parts meet?" },
			],
		},
		{
			marker: "04 / The hard part",
			title: "Every part worked. Together, they didn’t.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"The hardest part wasn’t any single technology. It was integration: making the ESP32 bracelet, the cloud, the backend, the AI model and the Flutter app talk to each other.",
						"Each part worked on its own. Bringing them together into one system took far more coordination than any of us expected.",
					],
				},
				{
					kind: "stats",
					items: [
						{ value: "5", label: "Components to connect" },
						{ value: "1", label: "Pipeline, sensor to alert" },
					],
				},
				{ kind: "question", text: "Where does a reading get lost when every layer swears it passed it on?" },
			],
		},
		{
			marker: "05 / Finding a way through",
			title: "One hand-off at a time.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: ["We decided to tackle integration together, testing each component step by step instead of all at once:"],
				},
				{
					kind: "list",
					items: [
						{ label: "1 · Data in", text: "Check that readings from the simulated bracelet reach Supabase." },
						{ label: "2 · Prediction", text: "Check that FastAPI returns the right risk level for those readings." },
						{ label: "3 · Alerts", text: "Check that Flutter shows the result and triggers the alerts." },
					],
				},
				{
					kind: "text",
					paragraphs: ["That method got the full pipeline working, from the simulated sensor all the way to the alerts."],
				},
				{ kind: "question", text: "Which test would you write first if a real patient wore the bracelet tomorrow?" },
			],
		},
		{
			marker: "06 / What it taught me",
			title: "The learning lives between the layers.",
			layout: "marker-left",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Above all, this project taught me teamwork: collaborating with people who build different parts of the same system, and agreeing on how those parts meet.",
						"I also learned how to plug an AI model into IoT and the cloud, in a field as sensitive as health, where a wrong label isn’t just a bug: it’s a worried family.",
					],
				},
				{
					kind: "question",
					label: "Still worth asking",
					text: "Can someone understand the system’s uncertainty as clearly as its output?",
				},
			],
		},
	],
};

const fr: CaseCopy = {
	intro:
		"Tout a commencé avec une amie, et une crise d’asthme impressionnante à voir. AVATAR est notre réponse : un bracelet connecté qui surveille trois signes vitaux, classe le risque en trois niveaux et donne l’alerte quand il devient critique.",
	aim: "L’objectif : relier un capteur, un backend cloud, un modèle d’IA et une application mobile en un seul système capable d’alerter les proches avant qu’il ne soit trop tard.",
	tags: ["IoT", "Intelligence artificielle", "Cloud Computing", "Mobile"],
	readingCue: "Le pourquoi, le système, le travail d’équipe",
	facts: [
		{ label: "Domaine", value: "IoT | IA | Cloud Computing" },
		{ label: "Mon rôle", value: "Modèle d’IA (Fuzzy C-Means)" },
		{ label: "Collaboration", value: "Équipe de 5" },
	],
	chapters: [
		{
			marker: "01 / L’étincelle",
			title: "Tout a commencé avec une amie.",
			layout: "aside-left",
			aside: {
				kind: "image",
				src: avatarMockup,
				alt: "Écrans de l’application AVATAR : contacts d’urgence et signes vitaux en direct",
				caption: "AVATAR / Expérience mobile",
				detail: "Signes vitaux + réseau de soin",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Ce projet est né d’une situation personnelle : une amie souffre d’asthme, et j’ai vu à quel point une crise pouvait être inquiétante, pour elle comme pour son entourage, et à quel point on se sent impuissant quand on ne peut que regarder.",
						"Avec mon équipe, on a voulu imaginer une solution qui veille quand personne d’autre ne le peut : surveiller son état de santé et alerter ses proches en cas de danger. Ce qui m’a motivée, c’était d’utiliser l’IA sur un problème qui touche directement la vie des personnes.",
					],
				},
				{
					kind: "question",
					text: "Que doit faire un appareil dans les secondes entre « quelque chose ne va pas » et « quelqu’un arrive » ?",
				},
			],
		},
		{
			marker: "02 / Ce qui le distingue",
			title: "Quatre technologies, un bracelet.",
			layout: "aside-right",
			aside: {
				kind: "stats",
				items: [
					{ value: "3", label: "Signes vitaux surveillés" },
					{ value: "3", label: "Niveaux de risque" },
					{ value: "4", label: "Technologies dans un seul système" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"La particularité d’AVATAR, c’est qu’il combine l’IoT, l’IA, le Cloud Computing et une application mobile. Notre bracelet, simulé avec un ESP32, surveille trois paramètres : l’oxygène dans le sang, la fréquence cardiaque et la fréquence respiratoire.",
						"J’ai utilisé Fuzzy C-Means pour classer le risque en trois niveaux. En cas de risque critique, le système peut alerter automatiquement les contacts d’urgence.",
					],
				},
				{
					kind: "states",
					items: [
						{ label: "Normal", text: "Des mesures stables, affichées dans la vue de suivi." },
						{ label: "Alerte", text: "Un changement à surveiller, signalé à l’utilisateur." },
						{ label: "Critique", text: "Les contacts d’urgence sont alertés automatiquement." },
					],
				},
				{
					kind: "question",
					text: "Une mesure à 70 % « alerte » et 30 % « critique » doit-elle être traitée comme une alerte, ou comme une urgence ?",
				},
			],
		},
		{
			marker: "03 / Ma part",
			title: "Une équipe, et ma pièce du puzzle.",
			layout: "aside-right",
			aside: {
				kind: "diagram",
				title: "Le système en un coup d’œil",
				annotation: "Du poignet à l’alerte",
				layers: [
					{ label: "01 / ESP32 + Wokwi + C++", text: "Simuler le bracelet et ses trois capteurs." },
					{ label: "02 / Supabase + PostgreSQL", text: "Recevoir et stocker les mesures dans le cloud." },
					{ label: "03 / FastAPI + Fuzzy C-Means", text: "Classer chaque mesure : normal, alerte ou critique." },
					{ label: "04 / Flutter + Dart", text: "Afficher les signes vitaux et alerter les contacts d’urgence." },
				],
				caption: "Des technologies différentes, un même fil : préserver le sens d’une mesure, du poignet jusqu’à l’alerte.",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Ce projet a été réalisé en équipe de cinq. On a commencé par analyser les besoins ensemble, puis chacune a travaillé sur la partie qu’elle maîtrisait le mieux.",
						"Pour ma part, je me suis occupée du modèle d’IA : l’algorithme Fuzzy C-Means, avec Python et scikit-learn, pour classer les données physiologiques selon le niveau de risque. On a ensuite travaillé ensemble pour intégrer toutes les parties du système.",
					],
				},
				{ kind: "question", text: "Quand chacune construit une partie différente, qui est responsable du moment où elles se rencontrent ?" },
			],
		},
		{
			marker: "04 / Le plus difficile",
			title: "Chaque partie fonctionnait. Ensemble, non.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"La plus grande difficulté n’était pas une technologie en particulier, mais l’intégration : faire communiquer le bracelet ESP32, le cloud, le backend, le modèle d’IA et l’application Flutter.",
						"Chaque partie fonctionnait séparément. Les réunir dans un seul système a demandé bien plus de coordination que prévu.",
					],
				},
				{
					kind: "stats",
					items: [
						{ value: "5", label: "Composants à relier" },
						{ value: "1", label: "Pipeline, du capteur à l’alerte" },
					],
				},
				{ kind: "question", text: "Où se perd une mesure quand chaque couche jure l’avoir transmise ?" },
			],
		},
		{
			marker: "05 / Trouver la voie",
			title: "Un passage de relais à la fois.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: ["On a décidé de travailler ensemble sur l’intégration, en testant chaque composant progressivement plutôt que tout à la fois :"],
				},
				{
					kind: "list",
					items: [
						{ label: "1 · Données", text: "Vérifier que les mesures du bracelet simulé arrivent bien dans Supabase." },
						{ label: "2 · Prédiction", text: "Vérifier que FastAPI renvoie le bon niveau de risque pour ces mesures." },
						{ label: "3 · Alertes", text: "Vérifier que Flutter affiche le résultat et déclenche les alertes." },
					],
				},
				{
					kind: "text",
					paragraphs: ["Cette méthode nous a permis de faire fonctionner le pipeline complet, du capteur simulé jusqu’aux alertes."],
				},
				{ kind: "question", text: "Quel test écririez-vous en premier si une vraie patiente portait le bracelet demain ?" },
			],
		},
		{
			marker: "06 / Ce que j’en retiens",
			title: "L’apprentissage se joue entre les couches.",
			layout: "marker-left",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Ce projet m’a surtout appris à travailler en équipe : collaborer avec des personnes qui développent différentes parties d’un même système, et s’accorder sur la façon dont elles se rejoignent.",
						"J’ai aussi découvert comment intégrer un modèle d’IA avec l’IoT et le cloud, dans un domaine aussi sensible que la santé, où une mauvaise étiquette n’est pas qu’un bug : c’est une famille inquiète.",
					],
				},
				{
					kind: "question",
					label: "À se demander encore",
					text: "Peut-on comprendre l’incertitude du système aussi clairement que son résultat ?",
				},
			],
		},
	],
};

export const avatarCopy = { en, fr };
