import { Brush, Hammer, Layers, PaintBucket, Sparkles, Wrench } from "lucide-react";

export const company = {
  name: "PLATRERIE-PEINTURE,FINITION",
  phoneRaw: "0620385685",
  phoneDisplay: "06 20 38 56 85",
  area: "Vals-près-le-Puy · Le Puy-en-Velay et alentours",
  address: "43 Rue Léon et Jeanne Coudeyrette",
  city: "43000 Le Puy-en-Velay",
  country: "France",
  addressFull: "43 Rue Léon et Jeanne Coudeyrette, 43000 Le Puy-en-Velay, France",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=43+Rue+L%C3%A9on+et+Jeanne+Coudeyrette+43000+Le+Puy-en-Velay+France",
};

export const reassuranceItems = [
  {
    title: "Travail propre et soigné",
    text: "Organisation rigoureuse du chantier et attention portée à chaque détail de finition.",
  },
  {
    title: "Conseils adaptés à votre projet",
    text: "Accompagnement clair pour choisir les solutions les plus cohérentes selon vos besoins.",
  },
  {
    title: "Intervention locale et réactive",
    text: "Présence de proximité sur le secteur du Puy-en-Velay pour un suivi plus simple.",
  },
  {
    title: "Finitions nettes et durables",
    text: "Objectif constant: un rendu homogène, propre visuellement et pensé pour durer.",
  },
];

export const services = [
  {
    id: "platrerie",
    title: "Plâtrerie",
    short: "Cloisons, doublages et reprises pour des surfaces nettes et prêtes à finir.",
    intro:
      "Réalisation de travaux de plâtrerie intérieure pour structurer vos espaces et garantir une base saine avant mise en peinture.",
    points: [
      "Montage de cloisons et contre-cloisons",
      "Doublage et correction de parois",
      "Reprises localisées sur murs et plafonds",
      "Finitions prêtes à recevoir les revêtements",
    ],
    benefit: "Des volumes propres et réguliers, pensés pour un résultat final harmonieux.",
    icon: Hammer,
  },
  {
    id: "peinture",
    title: "Peinture intérieure",
    short: "Application maîtrisée pour un rendu régulier, lumineux et soigné.",
    intro:
      "Travaux de peinture intérieure avec attention portée aux préparations, à la régularité des teintes et à la netteté des raccords.",
    points: [
      "Mise en peinture murs et plafonds",
      "Application adaptée aux supports intérieurs",
      "Traitement précis des angles et jonctions",
      "Rendu homogène pièce après pièce",
    ],
    benefit: "Un intérieur valorisé, propre au regard et agréable au quotidien.",
    icon: PaintBucket,
  },
  {
    id: "finitions",
    title: "Finitions",
    short: "Derniers détails exécutés avec précision pour un résultat net et cohérent.",
    intro:
      "Interventions de finition pour améliorer la qualité perçue d'un intérieur et garantir une présentation finale impeccable.",
    points: [
      "Reprises fines avant livraison",
      "Correction d'imperfections visuelles",
      "Uniformisation des surfaces",
      "Contrôle visuel final des zones traitées",
    ],
    benefit: "Une finition maîtrisée qui fait la différence sur l'ensemble du projet.",
    icon: Sparkles,
  },
  {
    id: "renovation",
    title: "Rénovation intérieure",
    short: "Mise à niveau des pièces existantes avec une approche propre et structurée.",
    intro:
      "Travaux intérieurs en rénovation pour remettre en état, moderniser et améliorer le confort visuel de vos espaces.",
    points: [
      "Remise en état des surfaces existantes",
      "Adaptation des travaux à l'usage des pièces",
      "Coordination logique des étapes",
      "Rendu final cohérent avec votre intérieur",
    ],
    benefit: "Un intérieur rénové avec une exécution lisible et soignée de bout en bout.",
    icon: Wrench,
  },
  {
    id: "preparation",
    title: "Préparation des supports",
    short: "Étape clé pour assurer l'adhérence, la tenue et la qualité du rendu final.",
    intro:
      "Préparation des supports avant finition: nettoyage, reprises et mise en état pour travailler sur une base fiable.",
    points: [
      "Diagnostic visuel des supports",
      "Rebouchage et lissage ciblés",
      "Ponçage et dépoussiérage soignés",
      "Préparation adaptée au traitement prévu",
    ],
    benefit: "Des finitions plus régulières et durables grâce à une base correctement préparée.",
    icon: Layers,
  },
  {
    id: "neuf-renovation",
    title: "Travaux neufs et rénovation",
    short: "Interventions adaptées aussi bien aux projets neufs qu'aux biens existants.",
    intro:
      "Accompagnement sur des travaux intérieurs en construction neuve comme en rénovation, avec une même exigence de propreté.",
    points: [
      "Approche adaptée au contexte du chantier",
      "Lecture précise du niveau de finition attendu",
      "Exécution méthodique, poste par poste",
      "Résultat final aligné avec le projet",
    ],
    benefit: "Une intervention fiable quel que soit le point de départ de votre chantier.",
    icon: Brush,
  },
] as const;
