export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image | null;
  summary: string;
  updated: number;
  _links: Links;
}

export interface SearchResult {
  score: number;
  show: Show;
}

export interface ShowCast {
  person: Person;
  character: Character;
  self: boolean;
  voice: boolean;
}

export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
  _links: Links;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Person {
  id: number;
  url: string;
  name: string;
  country: Country;
  birthday: Date;
  deathday: null;
  gender: string;
  image: Image;
  updated: number;
  _links: Links;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Links {
  self: Self;
  previousepisode: PreviousEpisode;
}

export interface PreviousEpisode {
  href: string;
  name: string;
}

export interface Self {
  href: string;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  time: string;
  days: Array<string>;
}
