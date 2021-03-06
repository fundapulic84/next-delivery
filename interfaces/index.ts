export type ArticleType = {
  id: number;
  home: boolean;
  title: string;
  image: string;
  text: string;
};

export type PartyType = {
  id: number;
  name: string;
  votes: number;
  percentage: number;
};
