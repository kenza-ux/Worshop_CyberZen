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
  { name: 'guide' },
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
  { name: 'guide' },
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
  { name: 'enfant' },
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
  { name: 'guide' },
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
  { name: 'guide' },
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
  name: 'La désinformation en ligne : Comment s’en protéger ?',
    id: 22,
  source: 'https://adulteducation.com/disinformation',
  author: 'Linda Scott',
  keywords: ['désinformation', 'protection', 'adultes'],
  categories: [
  { name: 'secu', theme: true },
  { name: 'guide' },
  { name: 'adulte' },
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
