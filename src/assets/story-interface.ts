export interface Story {
  Storytitle: string;
  scenes: { [key: string]: Scene };
}

export interface Scene {
  id: string;
  title: string;
  image: string;
  description: string;
  decisions: Decision[];
  nextScene?: string;
}

export interface Decision {
  choice: Choice;
  text: string;
  nextScene: string;
}

export enum Choice {
  A = 'A',
  B = 'B',
}
