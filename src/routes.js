const host = 'https://opentdb.com';

export default {
  questions: () => [host, 'api.php?amount=10&difficulty=medium&type=multiple'].join('/'),
};
