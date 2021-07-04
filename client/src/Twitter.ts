export interface User {
  id: string;
  screenName: string;
  url: string;
  profileImageUrl: string;
}

export interface Tweet {
  id: string;
  user : User;
  createdAt: string;
  fullText: string;
  favoriteCount: number;
  replyCount: number;
  retweetCount: number;
  quoteCount: number;
}

export interface Timeline {
  tweets: Tweet[];
}

export interface QueryData {
  timeline: Timeline
}