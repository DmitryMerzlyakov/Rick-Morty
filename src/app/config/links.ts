/* Стартовая страница */
const main = '/';

/* Не существующая страница */
const error = '*';

/* Герои */
const heroesNavigate = '/heroes/*';
const heroes = '/heroes';
const heroesDetail = '/heroes/:name';

/* Эпизоды */
const episodeNavigate = '/episodes/*';
const episode = '/episodes';
const episodeDetail = '/episodes/:name';

/* Локации */
const locationNavigate = '/locations/*';
const location = '/locations';
const locationDetail = '/locations/:name';

const heroesLinks = {
  heroesNavigate,
  heroes,
  heroesDetail,
};

const episodeLinks = {
  episodeNavigate,
  episode,
  episodeDetail,
};

const locationLinks = {
  locationNavigate,
  location,
  locationDetail,
};

export const links = {
  ...heroesLinks,
  ...episodeLinks,
  ...locationLinks,
  error,
  main,
};
