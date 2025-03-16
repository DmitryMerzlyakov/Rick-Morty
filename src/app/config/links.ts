/* Стартовая страница */
const main = '/';

/* Не существующая страница */
const error = '*';

/* Страница авторизации */
const login = 'login';

/* Герои */
const heroes = 'heroes';
const heroesDetail = 'heroes/detail';
const heroesDetailById = 'heroes/detail/:id';

const heroesLinks = {
  heroes,
  heroesDetail,
  heroesDetailById
}

/* Эпизоды */
const episodes = 'episodes';
const episodesDetail = 'episodes/detail';
const episodesDetailById = 'episodes/detail/:id';

const episodesLinks = {
  episodes,
  episodesDetail,
  episodesDetailById
}

/* Локации */
const locations = 'locations';
const locationsDetail = 'locations/detail';
const locationsDetailById = 'locations/detail/:id';

const locationsLinks = {
  locations,
  locationsDetail,
  locationsDetailById
}

const detail = 'detail';

export const links = {
  ...heroesLinks,
  ...episodesLinks,
  ...locationsLinks,
  detail,
  error,
  main,
  login,
};
