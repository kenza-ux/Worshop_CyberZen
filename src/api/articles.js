const allArticles = [
  {
    name: 'Juridique',
    id: 1,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [
      { name: 'juridique', theme: true },
      { name: 'secu', theme: true },
      { name: 'anonymat' },
      { name: 'guide' },
    ],
  },
  {
    name: 'Secu',
    id: 2,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [
      { name: 'juridique', theme: true },
      { name: 'secu', theme: true },
      { name: 'anonymat' },
      { name: 'guide' },
    ],
  },
  {
    name: 'Guide',
    id: 3,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [{ name: 'anonymat', theme: true }, { name: 'guide' }],
  },
  {
    name: 'Quiz',
    id: 4,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [{ name: 'juridique', theme: true }, { name: 'guide' }, { name: 'enfant' }],
  },
  {
    name: 'Article',
    id: 5,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [
      { name: 'juridique', theme: true },
      { name: 'secu', theme: true },
      { name: 'article' },
      { name: 'adulte' },
    ],
  },
  {
    name: 'Anonymat',
    id: 6,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [{ name: 'juridique', theme: true }, { name: 'guide' }, { name: 'ado' }],
  },
  {
    name: 'proteger son enfant',
    id: 7,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [{ name: 'juridique', theme: true }, { name: 'article' }, { name: 'adulte' }],
  },
  {
    name: 'Ado',
    id: 8,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [{ name: 'secu', theme: true }, { name: 'quiz' }, { name: 'ado' }],
  },
  {
    name: 'Adulte',
    id: 9,
    source: 'https://source.source.net',
    author: 'John doe',
    keywords: ['juridique', 'loi', 'aide'],
    categories: [{ name: 'juridique', theme: true }, { name: 'article' }],
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
