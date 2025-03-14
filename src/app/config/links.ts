/* Стартовая страница */
const main = '/';

/* Не существующая страница */
const error = '*';

/* Страница авторизации */
const login = 'login';

/* Герои */
const heroesNavigate = '/heroes/*';
const heroes = 'heroes';
const heroesDetail = 'heroes/detail';
const heroesDetailById = 'heroes/detail/:id';

const heroesLinks = {
  heroesNavigate,
  heroes,
  heroesDetail,
  heroesDetailById
}

/* Эпизоды */
const episodesNavigate = '/episodes/*';
const episodes = 'episodes';
const episodesDetail = 'episodes/detail';
const episodesDetailById = 'episodes/detail/:id';

const episodesLinks = {
  episodesNavigate,
  episodes,
  episodesDetail,
  episodesDetailById
}

/* Локации */
const locationsNavigate = '/locations/*';
const locations = 'locations';
const locationsDetail = 'locations/detail';
const locationsDetailById = 'locations/detail/:id';

const locationsLinks = {
  locationsNavigate,
  locations,
  locationsDetail,
  locationsDetailById
}

export const links = {
  ...heroesLinks,
  ...episodesLinks,
  ...locationsLinks,
  error,
  main,
  login,
};
