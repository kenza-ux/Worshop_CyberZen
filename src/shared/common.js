export const getColor = (category) => {
  let color = '';
  if (category == null) {
    return;
  }
  switch (category.name.toLowerCase()) {
    case 'quiz':
      color = 'purple';
      break;
    case 'juridique':
      color = 'green';
      break;
    case 'secu':
      color = 'red';
      break;
    case 'anonymat':
      color = 'blue';
      break;
    case 'article':
      color = 'turquoise';
      break;
    case 'guide':
      color = 'pale-blue';
      break;
    case 'enfant':
      color = 'pink';
      break;
    case 'ado':
      color = 'yellow';
      break;
    case 'adulte':
      color = 'dark-purple';
      break;
    case 'videoguide':
      color = 'dark-purple';
      break;
    default:
      break;
  }
  return color + '-button-color';
};
