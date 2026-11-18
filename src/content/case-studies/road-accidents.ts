/** Road accident risk: case study copy. Numbers come from Douniya's answers. */
import type { CaseCopy } from "#/components/case/types";

const en: CaseCopy = {
	intro:
		"Every year, Moroccan roads turn statistics into funerals. I wanted to find out whether a model could learn which accidents become the most serious, from the road, the weather and the moment they happen.",
	aim: "The aim: train a classifier on more than 4 million real accident records to flag the rare accidents that turn severe.",
	tags: ["Data Science", "Machine Learning", "Classification", "Python"],
	readingCue: "The why, the data, the trade-offs",
	facts: [
		{ label: "Focus", value: "Data Science | ML | Classification" },
		{ label: "My role", value: "Solo: from raw data to model" },
		{ label: "Context", value: "My first individual AI project" },
	],
	chapters: [
		{
			marker: "01 / The spark",
			title: "Behind every number, a family.",
			layout: "aside-left",
			aside: {
				kind: "stats",
				items: [
					{ value: "160,000+", label: "Injury accidents in Morocco, 2025" },
					{ value: "~4,800", label: "Deaths on Moroccan roads, 2025" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Road accidents are a subject that hits close to home. In 2025, Morocco recorded more than 160,000 injury accidents and nearly 4,800 deaths. Each of those numbers is a phone call that someone never wanted to receive.",
						"The topic is already well studied in data science, and I knew it. I chose it anyway, because I wanted my first real project to matter: to understand what pushes an accident from bad to fatal, and to contribute, at my level, to preventing it.",
					],
				},
				{
					kind: "question",
					text: "If a model could warn that a road, at a given hour and in given weather, is far more dangerous than usual, who should hear it first?",
				},
			],
		},
		{
			marker: "02 / What makes it different",
			title: "4 million accidents, one question.",
			layout: "aside-right",
			aside: {
				kind: "stats",
				items: [
					{ value: "4M+", label: "Accident records in the dataset" },
					{ value: "3", label: "Layers of context: geography, weather, road" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"What sets this project apart is the richness of its data. I worked with US Accidents, a public dataset of more than 4 million observations in the version I studied, gathered from several traffic sources.",
						"Every record is enriched with geographic, weather and road information. That matters: an accident is never just a collision. It's a time, a place, a temperature, a visibility, a road layout, and a model can only find patterns if the data carries that context.",
					],
				},
				{ kind: "question", text: "What would it take to build a dataset this rich for Moroccan roads?" },
			],
		},
		{
			marker: "03 / Starting point",
			title: "First project, the whole pipeline.",
			layout: "aside-right",
			aside: {
				kind: "diagram",
				title: "The pipeline at a glance",
				annotation: "From raw rows to risk",
				layers: [
					{ label: "01 / pandas + NumPy", text: "Clean millions of rows and handle missing values." },
					{ label: "02 / Feature engineering", text: "Turn time, place, weather and road data into model inputs." },
					{ label: "03 / imbalanced-learn", text: "Rebalance the rare severe class." },
					{ label: "04 / scikit-learn", text: "Train and compare Logistic Regression, Random Forest and ensembles." },
				],
				caption: "One rule at every step: never let a shortcut hide the rare cases that matter most.",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"This was my first individual project in data science and AI, and I built every stage of the pipeline myself in Python: cleaning, handling missing values, feature engineering, rebalancing the classes and training the models.",
						"I chose a public dataset on purpose. The point wasn’t to collect data, it was to learn the craft of turning a mountain of raw records into information you can actually act on.",
					],
				},
				{
					kind: "question",
					text: "How do you know a cleaning step didn’t quietly delete the very accidents you’re trying to predict?",
				},
			],
		},
		{
			marker: "04 / The hard part",
			title: "99% accurate, and almost useless.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"To keep training times reasonable, I started with a sample of about 200,000 observations. That’s when I met the real problem: the most severe accidents made up less than 0.1% of the data.",
						"My first model scored 99% accuracy, and it caught almost no severe accidents. It had simply learned to answer “not severe” every time. That was the moment I understood the challenge wasn’t accuracy. It was finding the needle in the haystack: the minority class.",
					],
				},
				{
					kind: "stats",
					items: [
						{ value: "~200,000", label: "Observations in my first sample" },
						{ value: "<0.1%", label: "Of accidents were the most severe" },
						{ value: "99%", label: "Accuracy of a model that missed them" },
					],
				},
				{ kind: "question", text: "If 99 answers out of 100 are right, but the one that matters is wrong, is the model right?" },
			],
		},
		{
			marker: "05 / Finding a way through",
			title: "Trading precision for the cases that matter.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: ["I stopped chasing accuracy and changed the question the model was answering, one step at a time:"],
				},
				{
					kind: "list",
					items: [
						{ label: "Reframing", text: "Turn the severity levels into one binary decision: is this accident severe or not?" },
						{ label: "Resampling", text: "Test several resampling techniques so the model sees enough severe accidents to learn from them." },
						{ label: "Comparing", text: "Compare Logistic Regression, Random Forest and ensemble methods such as EasyEnsemble." },
					],
				},
				{
					kind: "stats",
					items: [
						{ value: "40%", label: "Recall on severe accidents" },
						{ value: "7%", label: "Precision on those alerts" },
					],
				},
				{
					kind: "text",
					paragraphs: [
						"The results are still limited, and I say it plainly: 7% precision means most alerts are false alarms. But going from catching almost none to catching 4 in 10 taught me the trade-off at the heart of every classifier: missing a case, or raising a false alarm.",
					],
				},
				{ kind: "question", text: "For road safety, which costs more: a false alarm, or a missed severe accident?" },
			],
		},
		{
			marker: "06 / What it taught me",
			title: "Good AI starts with good data.",
			layout: "marker-left",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"This project taught me that a good AI model depends first and foremost on the quality of its data.",
						"It also taught me that high accuracy doesn’t mean a model performs well. You have to choose the right metrics, and understand the results, before you trust them. Since then, it’s the first question I ask of any score: what is this number hiding?",
					],
				},
				{
					kind: "question",
					label: "Still worth asking",
					text: "What would change if road-safety models were judged on the lives they help protect, rather than on their accuracy?",
				},
			],
		},
	],
};

const fr: CaseCopy = {
	intro:
		"Chaque année, les routes marocaines transforment des statistiques en deuils. J’ai voulu savoir si un modèle pouvait apprendre quels accidents deviennent les plus graves, à partir de la route, de la météo et du moment où ils surviennent.",
	aim: "L’objectif : entraîner un classifieur sur plus de 4 millions d’accidents réels pour repérer les rares accidents qui deviennent graves.",
	tags: ["Data Science", "Machine Learning", "Classification", "Python"],
	readingCue: "Le pourquoi, les données, les compromis",
	facts: [
		{ label: "Domaine", value: "Data Science | ML | Classification" },
		{ label: "Mon rôle", value: "Seule, des données brutes au modèle" },
		{ label: "Contexte", value: "Mon premier projet individuel en IA" },
	],
	chapters: [
		{
			marker: "01 / L’étincelle",
			title: "Derrière chaque chiffre, une famille.",
			layout: "aside-left",
			aside: {
				kind: "stats",
				items: [
					{ value: "160 000+", label: "Accidents corporels au Maroc, 2025" },
					{ value: "~4 800", label: "Décès sur les routes marocaines, 2025" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Les accidents de la route sont un sujet qui me touche particulièrement, surtout au Maroc. En 2025, le pays a enregistré plus de 160 000 accidents corporels et près de 4 800 décès. Chacun de ces chiffres est un appel que quelqu’un n’aurait jamais voulu recevoir.",
						"Le sujet est déjà très étudié en Data Science, je le savais. Je l’ai choisi quand même, parce que je voulais que mon premier vrai projet compte : comprendre ce qui fait basculer un accident vers le pire, et contribuer, à mon niveau, à sa prévention.",
					],
				},
				{
					kind: "question",
					text: "Si un modèle pouvait signaler qu’une route, à une heure et par une météo données, est bien plus dangereuse que d’habitude, qui devrait l’apprendre en premier ?",
				},
			],
		},
		{
			marker: "02 / Ce qui le distingue",
			title: "4 millions d’accidents, une question.",
			layout: "aside-right",
			aside: {
				kind: "stats",
				items: [
					{ value: "4M+", label: "Accidents dans le jeu de données" },
					{ value: "3", label: "Couches de contexte : géographie, météo, route" },
				],
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"La particularité de ce projet, c’est la richesse des données. J’ai travaillé avec US Accidents, un jeu de données public de plus de 4 millions d’observations dans la version étudiée, issu de plusieurs sources de trafic.",
						"Chaque accident est enrichi d’informations géographiques, météorologiques et routières. C’est essentiel : un accident n’est jamais qu’une collision. C’est une heure, un lieu, une température, une visibilité, un tracé de route, et un modèle ne trouve des tendances que si les données portent ce contexte.",
					],
				},
				{ kind: "question", text: "Que faudrait-il pour construire un jeu de données aussi riche sur les routes marocaines ?" },
			],
		},
		{
			marker: "03 / Point de départ",
			title: "Premier projet, tout le pipeline.",
			layout: "aside-right",
			aside: {
				kind: "diagram",
				title: "Le pipeline en un coup d’œil",
				annotation: "Des données brutes au risque",
				layers: [
					{ label: "01 / pandas + NumPy", text: "Nettoyer des millions de lignes et gérer les valeurs manquantes." },
					{ label: "02 / Feature engineering", text: "Transformer l’heure, le lieu, la météo et la route en variables." },
					{ label: "03 / imbalanced-learn", text: "Rééquilibrer la classe rare des accidents graves." },
					{ label: "04 / scikit-learn", text: "Entraîner et comparer régression logistique, Random Forest et ensembles." },
				],
				caption: "Une règle à chaque étape : ne jamais laisser un raccourci cacher les cas rares qui comptent le plus.",
			},
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"C’était mon premier projet individuel en Data Science et en IA, et j’ai développé moi-même tout le pipeline en Python : nettoyage, gestion des valeurs manquantes, feature engineering, rééquilibrage des classes et entraînement des modèles.",
						"J’ai choisi un jeu de données public exprès. Le but n’était pas de collecter des données, mais d’apprendre à transformer une montagne de données brutes en informations exploitables.",
					],
				},
				{
					kind: "question",
					text: "Comment savoir qu’une étape de nettoyage n’a pas supprimé, sans bruit, les accidents mêmes que l’on veut prédire ?",
				},
			],
		},
		{
			marker: "04 / Le plus difficile",
			title: "99 % de précision globale, et presque inutile.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Pour limiter le temps de calcul, j’ai commencé avec environ 200 000 observations. C’est là que j’ai rencontré le vrai problème : les accidents les plus graves représentaient moins de 0,1 % des données.",
						"Mon premier modèle affichait une accuracy de 99 %, et ne détectait presque aucun accident grave. Il avait simplement appris à répondre « pas grave » à chaque fois. C’est là que j’ai compris que le vrai défi n’était pas l’accuracy : c’était de trouver l’aiguille dans la botte de foin, la classe minoritaire.",
					],
				},
				{
					kind: "stats",
					items: [
						{ value: "~200 000", label: "Observations dans mon premier échantillon" },
						{ value: "<0,1 %", label: "D’accidents parmi les plus graves" },
						{ value: "99 %", label: "D’accuracy pour un modèle qui les ratait" },
					],
				},
				{ kind: "question", text: "Si 99 réponses sur 100 sont justes, mais que celle qui compte est fausse, le modèle a-t-il raison ?" },
			],
		},
		{
			marker: "05 / Trouver la voie",
			title: "Sacrifier la précision pour les cas qui comptent.",
			layout: "full",
			blocks: [
				{
					kind: "text",
					paragraphs: ["J’ai arrêté de courir après l’accuracy et j’ai changé la question posée au modèle, étape par étape :"],
				},
				{
					kind: "list",
					items: [
						{ label: "Reformuler", text: "Ramener les niveaux de gravité à une seule décision binaire : cet accident est-il grave ou non ?" },
						{ label: "Rééchantillonner", text: "Tester plusieurs techniques de rééchantillonnage pour que le modèle voie assez d’accidents graves." },
						{ label: "Comparer", text: "Comparer la régression logistique, Random Forest et des méthodes d’ensemble comme EasyEnsemble." },
					],
				},
				{
					kind: "stats",
					items: [
						{ value: "40 %", label: "De rappel sur les accidents graves" },
						{ value: "7 %", label: "De précision sur ces alertes" },
					],
				},
				{
					kind: "text",
					paragraphs: [
						"Les résultats restent limités, et je le dis clairement : 7 % de précision signifie que la plupart des alertes sont de fausses alarmes. Mais passer de presque aucun accident grave détecté à 4 sur 10 m’a appris le compromis au cœur de tout classifieur : rater un cas, ou déclencher une fausse alerte.",
					],
				},
				{ kind: "question", text: "Pour la sécurité routière, qu’est-ce qui coûte le plus cher : une fausse alerte, ou un accident grave manqué ?" },
			],
		},
		{
			marker: "06 / Ce que j’en retiens",
			title: "Une bonne IA commence par de bonnes données.",
			layout: "marker-left",
			blocks: [
				{
					kind: "text",
					paragraphs: [
						"Ce projet m’a appris qu’un bon modèle d’IA dépend avant tout de la qualité des données.",
						"J’ai aussi compris qu’une accuracy élevée ne signifie pas toujours qu’un modèle est performant. Il faut choisir les bonnes métriques et comprendre les résultats avant de leur faire confiance. Depuis, c’est la première question que je pose à n’importe quel score : que cache ce chiffre ?",
					],
				},
				{
					kind: "question",
					label: "À se demander encore",
					text: "Que changerait-on si les modèles de sécurité routière étaient jugés sur les vies qu’ils aident à protéger, plutôt que sur leur accuracy ?",
				},
			],
		},
	],
};

export const roadAccidentsCopy = { en, fr };
