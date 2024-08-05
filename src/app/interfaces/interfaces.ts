export interface StoryMeta {
  storyFileName:string
  description: string;
  coverImage: string;
  introVideo: string;
  initialScene: string;
  stats: {
    readBy: number;
    rating: number;
  };
}
export interface Story{
  [key:string]:{scenes: { [key: string]: Scene }};
}
export interface Stories {
  [key: string]: StoryMeta;
}

export interface Scene {
  decisions: decision[];
  description: string;
  id: string;
  image: string;
  title: string;
  nextScene?: string;
}

export interface decision {
  choice: string;
  text: string;
  nextScene: string;
}
