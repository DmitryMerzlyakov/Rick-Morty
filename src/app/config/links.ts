/* Стартовая страница */
const main = '/';

/* Не существующая страница */
const error = '*';

/* Герои */
const heroesNavigate = '/heroes/*';
const heroes = 'heroes';
const heroesDetail = '/heroes/detail';
const heroesDetailById = '/heroes/detail/:id';

/* Эпизоды */
const episodeNavigate = '/episodes/*';
const episode = 'episodes';
const episodeDetail = '/episodes/detail';
const episodeDetailById = '/episodes/detail/:id';


/* Локации */
const locationNavigate = '/locations/*';
const location = 'locations';
const locationDetail = '/locations/detail';
const locationDetailById = '/locations/detail/:id';


const heroesLinks = {
  heroesNavigate,
  heroes,
  heroesDetail,
  heroesDetailById
};

const episodeLinks = {
  episodeNavigate,
  episode,
  episodeDetail,
  episodeDetailById
};

const locationLinks = {
  locationNavigate,
  location,
  locationDetail,
  locationDetailById
};

export const links = {
  ...heroesLinks,
  ...episodeLinks,
  ...locationLinks,
  error,
  main,
};
