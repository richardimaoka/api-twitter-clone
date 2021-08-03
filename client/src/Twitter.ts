export interface User {
  name: string;
  id: string;
  screenName: string;
  url: string;
  profileImageUrl: string;
}

export interface Tweet {
  id: string;
  user: User;
  createdAt: string;
  fullText: string;
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
  quoteCount: number;
}

export interface Profile {
  tweets: Tweet[];
}

export interface QueryData {
  profile: Profile;
}

export interface AppState {}
