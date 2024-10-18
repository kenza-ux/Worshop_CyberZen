const allArticles = [
{
  name: 'Les bases juridiques contre le cyberharcèlement',
    id: 1,
  source: 'https://cyberlaw.com/legal-basics',
  author: 'John Doe',
  keywords: ['juridique', 'cyberharcèlement', 'protection'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'secu', theme: true },
  { name: 'anonymat' },
  { name: 'guide' },
],
},
{
  name: 'Sécuriser son identité en ligne',
    id: 2,
  source: 'https://security.net/id-protection',
  author: 'Jane Smith',
  keywords: ['sécurité', 'identité', 'protection'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'secu', theme: true },
  { name: 'anonymat' },
  { name: 'article' },
],
},
{
  name: 'Guide pratique : Protéger son anonymat sur les réseaux sociaux',
    id: 3,
  source: 'https://privacyguides.com/anonymat',
  author: 'Alice Brown',
  keywords: ['anonymat', 'guide', 'réseaux sociaux'],
  categories: [
  { name: 'anonymat', theme: true },
  { name: 'guide' },
],
},
{
  name: 'Quiz : Êtes-vous bien protégé contre le vol d’identité ?',
    id: 4,
  source: 'https://cyberquiz.com/identity-theft',
  author: 'Michael Lee',
  keywords: ['quiz', 'vol d’identité', 'protection'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'quiz' },
  { name: 'enfant' },
],
},
{
  name: 'Article : Les lois contre l’usurpation d’identité en ligne',
    id: 5,
  source: 'https://cyberlaw.com/identity-laws',
  author: 'David Clark',
  keywords: ['usurpation', 'juridique', 'lois'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'secu', theme: true },
  { name: 'article' },
  { name: 'adulte' },
],
},
{
  name: 'Anonymat et protection des données personnelles à l’adolescence',
    id: 6,
  source: 'https://privacyadvice.com/teen-anonymity',
  author: 'Emily Davis',
  keywords: ['adolescents', 'protection', 'données personnelles'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'guide' },
  { name: 'ado' },
],
},
{
  name: 'Comment protéger ses enfants des dangers du web',
    id: 7,
  source: 'https://parentsguide.com/web-safety',
  author: 'Olivia Williams',
  keywords: ['sécurité', 'enfants', 'protection'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'article' },
  { name: 'adulte' },
],
},
{
  name: 'Les dangers des réseaux sociaux expliqués aux enfants',
    id: 8,
  source: 'https://cybersafetykids.com/social-dangers',
  author: 'Paul Green',
  keywords: ['réseaux sociaux', 'enfants', 'sécurité'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'enfant' },
],
},
{
  name: 'Protéger son identité en ligne : Conseils pour les enfants',
    id: 9,
  source: 'https://kidsprivacy.com/identity-protection',
  author: 'Rachel Miller',
  keywords: ['identité', 'enfants', 'protection'],
  categories: [
  { name: 'anonymat', theme: true },
  { name: 'article' }, { name: 'enfant' }
],
},
{
  name: 'Comment parler à un adulte si tu es harcelé en ligne',
    id: 10,
  source: 'https://talktoadult.com/cyberbullying-help',
  author: 'Sandra Hall',
  keywords: ['cyberharcèlement', 'aide', 'enfants'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'guide' },
  { name: 'enfant' },
],
},
{
  name: 'Comprendre les conséquences du cyberharcèlement',
    id: 11,
  source: 'https://schoolguide.com/understanding-cyberbullying',
  author: 'Anna Parker',
  keywords: ['cyberharcèlement', 'conséquences', 'éducation'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'article' },
  { name: 'ado' },
],
},
{
  name: 'Prévenir l’addiction aux réseaux sociaux chez les jeunes',
    id: 12,
  source: 'https://addictionhelp.com/youth-social-media',
  author: 'Kevin White',
  keywords: ['addiction', 'réseaux sociaux', 'prévention'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'article' },
  { name: 'ado' },
],
},
{
  name: 'Les effets des réseaux sociaux sur la santé mentale des adolescents',
    id: 13,
  source: 'https://mentalhealth.com/social-media-teen',
  author: 'Megan Brown',
  keywords: ['santé mentale', 'réseaux sociaux', 'adolescents'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'article' },
  { name: 'ado' },
],
},
{
  name: 'Aidez votre enfant à naviguer sur les réseaux sociaux',
    id: 14,
  source: 'https://parentingtips.com/navigating-social-media',
  author: 'Laura Thompson',
  keywords: ['réseaux sociaux', 'enfants', 'aide'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'article' },
  { name: 'enfant' },
],
},
{
  name: 'Guide complet sur la protection de la vie privée en ligne',
    id: 15,
  source: 'https://privacyguide.com/comprehensive-privacy',
  author: 'Alice Johnson',
  keywords: ['vie privée', 'protection', 'guide'],
  categories: [
  { name: 'juridique', theme: true },
  { name: 'guide' },
],
},
{
  name: 'Cyberharcèlement : Comment le reconnaître et réagir',
    id: 16,
  source: 'https://schoolguide.com/cyberbullying-recognition',
  author: 'Rachel Adams',
  keywords: ['cyberharcèlement', 'prévention', 'éducation'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'guide' },
  { name: 'enfant' },
],
},
{
  name: 'Sécuriser ses informations personnelles : Un guide pour les adultes',
    id: 21,
  source: 'https://adultsafety.com/personal-info-security',
  author: 'Mark Wilson',
  keywords: ['sécurité', 'adultes', 'informations personnelles'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'guide' },
  { name: 'adulte' },
],
},
{
  name: 'Quiz: La désinformation en ligne : Comment s’en protéger ?',
    id: 22,
  source: 'https://adulteducation.com/disinformation',
  author: 'Linda Scott',
  keywords: ['désinformation', 'protection', 'adultes'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'quiz' },
  { name: 'adulte' },
],
},
{
  name: 'Vidéo Guide : Bloquer ou signaler un spammeur sur Instagram',
  id: 23,
  source: 'https://www.youtube.com/watch?v=mp6fHqYp3HE',
  author: 'SocialMediaHelp',
  keywords: ['spam', 'instagram', 'bloquer', 'signalement','video'],
  categories: [
    { name: 'guidevideo', theme: true },
    { name: 'guide' },
  ],
},
{
  name: 'Vidéo Guide : Sécuriser votre compte Instagram contre les cyberharcèlements',
  id: 24,
  source: 'https://www.youtube.com/watch?v=S0GoTF75jAU',
  author: 'SafeNet',
  keywords: ['sécurité', 'instagram', 'cyberharcèlement', 'protection','video'],
  categories: [
    { name: 'guidevideo', theme: true },
    { name: 'secu' },
  ],
},
{
  name: 'Vidéo Guide : Comment signaler un compte frauduleux sur Facebook',
  id: 25,
  source: 'https://www.youtube.com/watch?v=poHZedjIrlw',
  author: 'CyberSafety',
  keywords: ['frauduleux', 'signalement', 'facebook', 'sécurité', 'video'],
  categories: [
    { name: 'guidevideo', theme: true },
    { name: 'juridique' },
  ],
},
{
  name: 'Vidéo Guide : Protéger sa vie privée sur Twitter',
  id: 26,
  source: 'https://www.youtube.com/watch?v=1OKc2Ly_0eA',
  author: 'PrivacyMatters',
  keywords: ['vie privée', 'twitter', 'protection', 'sécurité', 'video'],
  categories: [
    { name: 'guidevideo', theme: true },
    { name: 'anonymat' },
  ],
}
];
const allQuizzes = [
  {
    id: 1,
    articleId: 4,
    questions: [
      {
        question: "Qu'est-ce que le vol d'identité ?",
        answers: [
          { index: 1, name: "L'utilisation frauduleuse d'informations personnelles", correct: true },
          { index: 2, name: "La création d'un faux document" },
          { index: 3, name: "Le vol d'argent liquide" },
          { index: 4, name: "L'accès non autorisé à un compte en ligne" },
        ],
      },
      {
        question: 'Quelle loi protège les données personnelles en Europe ?',
        answers: [
          { index: 1, name: 'Loi sur la confiance en ligne' },
          { index: 2, name: 'Règlement général sur la protection des données (RGPD)', correct: true },
          { index: 3, name: 'Loi sur la sécurité des informations' },
          { index: 4, name: 'Loi sur la cybercriminalité' },
        ],
      },
      {
        question: "Quels sont les droits d'une victime de vol d'identité ?",
        answers: [
          { index: 1, name: 'Droit à la réparation' },
          { index: 2, name: "Droit à l'anonymat", correct: true },
          { index: 3, name: 'Droit à être informée des mesures prises', correct: true },
          { index: 4, name: 'Droit à la confidentialité des données', correct: true },
        ],
        multi: true,
      },
      {
        question: "Quel est un moyen courant de vol d'identité en ligne ?",
        answers: [
          { index: 1, name: 'Le phishing', correct: true },
          { index: 2, name: "L'usurpation d'identité physique" },
          { index: 3, name: 'Le spam' },
          { index: 4, name: 'Le vol de cartes de crédit' },
        ],
      },
      {
        question: 'Quelles sanctions peuvent être imposées aux entreprises en cas de violation des données ?',
        answers: [
          { index: 1, name: "Amendes jusqu'à 4 % du chiffre d'affaires annuel mondial", correct: true },
          { index: 2, name: 'Retrait de licences commerciales' },
          { index: 3, name: 'Peines de prison pour les dirigeants' },
          { index: 4, name: 'Remboursement intégral des clients' },
        ],
      },
      {
        question: 'Que doit faire une entreprise en cas de violation de données ?',
        answers: [
          { index: 1, name: 'Informer les autorités compétentes', correct: true },
          { index: 2, name: 'Ne rien faire pour éviter la panique' },
          { index: 3, name: 'Notifier les personnes affectées', correct: true },
          { index: 4, name: 'Changer tous ses mots de passe' },
        ],
        multi: true,
      },
      {
        question: 'Quelle est la principale fonction des organismes de réglementation dans la cybersécurité ?',
        answers: [
          { index: 1, name: 'Collecter des données personnelles' },
          { index: 2, name: 'Établir des normes et surveiller la conformité', correct: true },
          { index: 3, name: 'Offrir des services de sécurité aux entreprises' },
          { index: 4, name: 'Sensibiliser le public aux cybermenaces' },
        ],
      },
      {
        question: "Qu'est-ce qu'un faux document d'identité ?",
        answers: [
          { index: 1, name: 'Un document officiel' },
          {
            index: 2,
            name: "Un document créé frauduleusement pour usurper l'identité d'une personne",
            correct: true,
          },
          { index: 3, name: 'Un document temporaire pour une procédure légale' },
          { index: 4, name: "Un document utilisé pour voyager à l'étranger" },
        ],
      },
    ],
  },
];
export async function getArticles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allArticles);
    }, 1000);
  });
}

export async function getArticleById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allArticles.find((article) => article.id == id));
    }, 1000);
  });
}

export async function getArticlesByCategory(categoryFilter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allArticles.filter((article) => article.categories.some((category) => category.name === categoryFilter)));
    }, 1000);
  });
}
export async function getArticleQuizInfo(articleId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allQuizzes.find((quiz) => quiz.articleId == articleId));
    }, 1000);
  });
}
