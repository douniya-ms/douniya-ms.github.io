/**
 * AVATAR case study copy. The page layout lives in src/routes/_case/work/avatar.tsx;
 * only the words live here, so translating means filling in `fr` below.
 */

const en = {
	intro:
		"From a signal on the wrist to a clearer picture on the phone. AVATAR brings an AI-powered smart bracelet and a mobile healthcare platform together to monitor asthma-related vital signs in real time.",
	aim: "The aim: explore how connected sensing and machine learning could flag changing risk before a situation becomes critical.",
	tags: ["AI / ML", "IoT", "Mobile", "Cloud"],
	readingCue: "The idea, the system, the learning",
	facts: [
		{ label: "Focus", value: "AI | Data | Connected health" },
		{ label: "My role", value: "Data Engineer" },
		{ label: "Collaboration", value: "Team of 4" },
	],

	intention: {
		marker: "01 / The intention",
		title: "Make the numbers mean something.",
		paragraphs: [
			"A useful starting question for AVATAR is simple: what happens between collecting a health signal and knowing that it deserves attention? Heart rate, oxygen saturation and respiratory rate are more useful when they can be read together, in context, rather than as isolated numbers.",
			"That is the human purpose behind the system: connect continuous monitoring with an understandable mobile view and an alert pathway. Earlier awareness is the goal, not a proven medical outcome. The project explores predictive risk; it does not establish a clinically validated prediction tool.",
		],
		question:
			"A small question with a big engineering footprint: what should happen after a reading?",
		imageAlt: "AVATAR app screens: emergency contacts and live vital signs",
		caption: "AVATAR / Mobile experience",
		captionDetail: "Vitals + care network",
	},

	startingPoint: {
		marker: "02 / Starting point",
		title: "One connected experience.",
		paragraphs: [
			"AVATAR is described as an integrated system: an ESP32-based bracelet, a Flutter app and a cloud-connected backend. The work is best understood as connecting these layers into a coherent journey, rather than inventing every underlying technology from scratch.",
			"Established tools provide the building blocks. The project-specific problem is how readings move through them, how risk is represented and how alerts stay consistent. The interesting work sits at these hand-offs: making separate technologies feel like one system.",
		],
	},

	underTheHood: {
		marker: "03 / Under the hood",
		title: "From sensing to understanding.",
		paragraphs: [
			"The IoT bracelet is the sensing layer for heart rate, SpO₂ and respiratory rate. Cloud connectivity links the wearable and mobile experience. FastAPI provides the service layer, while Supabase supports data storage and backend needs. Flutter brings the information together on the phone.",
			"Fuzzy C-Means adds a machine-learning layer for grouping readings by similarity, with degrees of membership rather than only hard boundaries. Turning those groups into Normal, Warning and Critical states needs careful interpretation; clustering alone cannot validate asthma prediction.",
		],
		diagram: {
			title: "The system at a glance",
			annotation: "Conceptual data flow",
			layers: [
				{ label: "01 / ESP32 + IoT", text: "Sense heart rate, SpO₂ and respiratory rate." },
				{ label: "02 / Cloud backend", text: "FastAPI services + Supabase data support." },
				{ label: "03 / Fuzzy C-Means", text: "Group signals to explore risk states." },
				{ label: "04 / Flutter", text: "Show vitals, risk labels and alert pathways." },
			],
			caption:
				"Different technologies, one thread: keep the meaning of a reading intact as it moves through the system.",
		},
	},

	experience: {
		marker: "04 / The experience",
		title: "Not just another number on a screen.",
		paragraphs: [
			"The defining idea is continuity: live vital signs, AI-powered risk detection and a smart alert and emergency escalation system belong to the same experience. The existing mobile mockup brings a vitals overview alongside a care network, making the connection between monitoring and response visible.",
			"Rather than claiming to outperform existing approaches, AVATAR focuses on joining the wearable-to-mobile journey and making risk states understandable. A label should explain the system’s interpretation, not pretend to be a diagnosis.",
		],
		states: [
			{ label: "Normal", text: "A stable-state label for the monitoring view." },
			{ label: "Warning", text: "A change that the system aims to flag for attention." },
			{ label: "Critical", text: "The state intended to trigger emergency escalation." },
		],
	},

	hardPart: {
		marker: "05 / The hard part",
		title: "A working pipeline is not yet a trustworthy signal.",
		paragraphs: [
			"For a system like AVATAR, the hardest boundary is likely the one between a noisy sensor reading and a meaningful alert. A movement artefact, a delayed update or a value near a risk boundary could make the app feel uncertain—even when each technical layer works on its own.",
			"This is where the engineering thinking needs to slow down. Before tuning the model, trace a reading end to end: what was measured, when did it arrive, how was it grouped and why did the displayed state change? These are the likely sticking points to investigate first.",
		],
		considerations: [
			{
				label: "Signal quality",
				text: "Start with missing, stale and noisy readings. A questionable input should not silently become a confident risk label.",
			},
			{
				label: "State consistency",
				text: "Review how cluster membership maps to a state. Check boundary cases so the backend and mobile view tell the same story.",
			},
			{
				label: "Alert coherence",
				text: "Trace the alert pathway separately from the live display. Repeated updates should not become confusing, repeated alarms.",
			},
		],
		closing:
			"A sensible path through these obstacles is to test each hand-off independently, then reconnect the whole flow. It makes the problem smaller and the reasoning easier to explain. The next question becomes specific: is the uncertainty coming from the input, the model or the way the result is shown?",
	},

	forward: {
		marker: "06 / Taking it forward",
		title: "The learning lives between the layers.",
		lesson:
			"The lesson this architecture points toward is that model choice is only one part of an AI product. Data quality, clear service boundaries and the words shown to a person all shape whether the output is understandable. A polished interface cannot compensate for an unclear signal.",
		next: "For later AI and data projects, the reflection to carry forward is practical: define the data contract early, make uncertainty visible and build small, testable steps before adding complexity. That is a useful foundation for a junior engineer—stay curious, but be precise about what the system can and cannot claim.",
		questionLabel: "Still worth asking",
		question: "Can someone understand the system’s uncertainty as clearly as its output?",
	},
};

export type AvatarCopy = typeof en;

/** French draft, written to check the layout. Have Douniya review the wording. */
const fr: AvatarCopy = {
	intro:
		"D’un signal au poignet à une vision plus claire sur le téléphone. AVATAR réunit un bracelet connecté alimenté par l’IA et une plateforme de santé mobile pour suivre en temps réel les signes vitaux liés à l’asthme.",
	aim: "L’objectif : explorer comment les capteurs connectés et l’apprentissage automatique peuvent signaler un risque qui évolue, avant qu’une situation ne devienne critique.",
	tags: ["IA / ML", "IoT", "Mobile", "Cloud"],
	readingCue: "L’idée, le système, les apprentissages",
	facts: [
		{ label: "Domaine", value: "IA | Données | Santé connectée" },
		{ label: "Mon rôle", value: "Ingénieure données" },
		{ label: "Collaboration", value: "Équipe de 4" },
	],

	intention: {
		marker: "01 / L’intention",
		title: "Donner du sens aux chiffres.",
		paragraphs: [
			"Pour AVATAR, une question de départ utile est simple : que se passe-t-il entre la collecte d’un signal de santé et le moment où l’on sait qu’il mérite de l’attention ? La fréquence cardiaque, la saturation en oxygène et la fréquence respiratoire sont plus utiles lues ensemble, en contexte, que comme des chiffres isolés.",
			"C’est la raison d’être humaine du système : relier un suivi continu à une vue mobile compréhensible et à un circuit d’alerte. L’objectif est une prise de conscience plus précoce, pas un résultat médical prouvé. Le projet explore le risque prédictif ; il ne constitue pas un outil de prédiction validé cliniquement.",
		],
		question:
			"Une petite question aux grandes conséquences techniques : que doit-il se passer après une mesure ?",
		imageAlt: "Écrans de l’application AVATAR : contacts d’urgence et signes vitaux en direct",
		caption: "AVATAR / Expérience mobile",
		captionDetail: "Signes vitaux + réseau de soin",
	},

	startingPoint: {
		marker: "02 / Point de départ",
		title: "Une seule expérience connectée.",
		paragraphs: [
			"AVATAR est présenté comme un système intégré : un bracelet basé sur un ESP32, une application Flutter et un backend connecté au cloud. Le travail consiste surtout à relier ces couches en un parcours cohérent, plutôt qu’à réinventer chaque technologie de zéro.",
			"Des outils éprouvés fournissent les briques de base. Le vrai problème du projet, c’est la façon dont les mesures les traversent, dont le risque est représenté et dont les alertes restent cohérentes. Le travail intéressant se situe à ces points de passage : faire de technologies distinctes un seul système.",
		],
	},

	underTheHood: {
		marker: "03 / Sous le capot",
		title: "De la mesure à la compréhension.",
		paragraphs: [
			"Le bracelet IoT est la couche de capteurs pour la fréquence cardiaque, la SpO₂ et la fréquence respiratoire. La connexion cloud relie le bracelet à l’expérience mobile. FastAPI fournit la couche de services, tandis que Supabase gère le stockage des données et les besoins du backend. Flutter rassemble le tout sur le téléphone.",
			"Fuzzy C-Means ajoute une couche d’apprentissage automatique qui regroupe les mesures par similarité, avec des degrés d’appartenance plutôt que des frontières strictes. Transformer ces groupes en états Normal, Alerte et Critique demande une interprétation prudente ; le clustering seul ne peut pas valider une prédiction de l’asthme.",
		],
		diagram: {
			title: "Le système en un coup d’œil",
			annotation: "Flux de données conceptuel",
			layers: [
				{ label: "01 / ESP32 + IoT", text: "Mesurer la fréquence cardiaque, la SpO₂ et la fréquence respiratoire." },
				{ label: "02 / Backend cloud", text: "Services FastAPI + données sur Supabase." },
				{ label: "03 / Fuzzy C-Means", text: "Regrouper les signaux pour explorer les états de risque." },
				{ label: "04 / Flutter", text: "Afficher les signes vitaux, les niveaux de risque et les alertes." },
			],
			caption:
				"Des technologies différentes, un même fil : préserver le sens d’une mesure tout au long du système.",
		},
	},

	experience: {
		marker: "04 / L’expérience",
		title: "Pas un chiffre de plus sur un écran.",
		paragraphs: [
			"L’idée centrale est la continuité : signes vitaux en direct, détection du risque par l’IA et système d’alerte et d’escalade d’urgence font partie de la même expérience. La maquette mobile existante place la vue des signes vitaux à côté d’un réseau de soin, rendant visible le lien entre le suivi et la réponse.",
			"Plutôt que de prétendre surpasser les approches existantes, AVATAR se concentre sur le parcours du bracelet au téléphone et sur des états de risque compréhensibles. Un libellé doit expliquer l’interprétation du système, pas se faire passer pour un diagnostic.",
		],
		states: [
			{ label: "Normal", text: "Un état stable, affiché dans la vue de suivi." },
			{ label: "Alerte", text: "Un changement que le système cherche à signaler." },
			{ label: "Critique", text: "L’état qui doit déclencher l’escalade d’urgence." },
		],
	},

	hardPart: {
		marker: "05 / Le plus difficile",
		title: "Un pipeline qui fonctionne n’est pas encore un signal fiable.",
		paragraphs: [
			"Pour un système comme AVATAR, la frontière la plus difficile est sans doute celle entre une mesure bruitée et une alerte pertinente. Un artefact de mouvement, une mise à jour en retard ou une valeur proche d’un seuil de risque peuvent rendre l’application peu fiable, même quand chaque couche technique fonctionne de son côté.",
			"C’est là que la réflexion doit ralentir. Avant d’ajuster le modèle, suivre une mesure de bout en bout : qu’a-t-on mesuré, quand est-ce arrivé, comment a-t-elle été regroupée et pourquoi l’état affiché a-t-il changé ? Ce sont les points de blocage probables à examiner en premier.",
		],
		considerations: [
			{
				label: "Qualité du signal",
				text: "Commencer par les mesures manquantes, périmées et bruitées. Une donnée douteuse ne doit pas devenir en silence un niveau de risque affirmé.",
			},
			{
				label: "Cohérence des états",
				text: "Vérifier comment l’appartenance aux clusters se traduit en état. Tester les cas limites pour que le backend et l’application racontent la même histoire.",
			},
			{
				label: "Cohérence des alertes",
				text: "Suivre le circuit d’alerte séparément de l’affichage en direct. Des mises à jour répétées ne doivent pas devenir des alarmes répétées et confuses.",
			},
		],
		closing:
			"Une approche raisonnable consiste à tester chaque point de passage séparément, puis à reconnecter l’ensemble du flux. Le problème devient plus petit et le raisonnement plus facile à expliquer. La question suivante devient précise : l’incertitude vient-elle de la donnée, du modèle ou de la façon dont le résultat est affiché ?",
	},

	forward: {
		marker: "06 / Pour la suite",
		title: "L’apprentissage se joue entre les couches.",
		lesson:
			"La leçon de cette architecture : le choix du modèle n’est qu’une partie d’un produit d’IA. La qualité des données, des frontières claires entre services et les mots montrés à une personne déterminent ensemble si le résultat est compréhensible. Une interface soignée ne compense pas un signal flou.",
		next: "Pour les prochains projets d’IA et de données, la réflexion à retenir est concrète : définir tôt le contrat de données, rendre l’incertitude visible et avancer par petites étapes testables avant d’ajouter de la complexité. Une bonne base pour une ingénieure junior : rester curieuse, mais précise sur ce que le système peut et ne peut pas affirmer.",
		questionLabel: "À se demander encore",
		question: "Peut-on comprendre l’incertitude du système aussi clairement que son résultat ?",
	},
};

export const avatarCopy = { en, fr };
