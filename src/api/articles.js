export async function getArticles() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'Juridique',
          id: 1,
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
          categories: [{ name: 'anonymat', theme: true }, { name: 'guide' }],
        },
        {
          name: 'Quiz',
          id: 4,
          categories: [{ name: 'juridique', theme: true }, { name: 'guide' }, { name: 'enfant' }],
        },
        {
          name: 'Article',
          id: 5,
          categories: [{ name: 'juridique', theme: true }, { name: 'secu', theme: true }, { name: 'article' },{ name: 'adulte' }],
        },
        {
          name: 'Anonymat',
          id: 6,
          categories: [{ name: 'juridique', theme: true }, { name: 'guide' }, { name: 'ado' }],
        },
        {
          name: 'proteger son enfant',
          id: 7,
          categories: [{ name: 'juridique', theme: true }, { name: 'article' }, { name: 'adulte' }],
        },
        {
          name: 'Ado',
          id: 8,
          categories: [{ name: 'secu', theme: true }, { name: 'quiz' }, { name: 'ado' }],
        },
        {
          name: 'Adulte',
          id: 9,
          categories: [{ name: 'juridique', theme: true }, { name: 'article' }],
        },
      ]);
    }, 1000);
  });
}
