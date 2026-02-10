
export interface LoveStoryConfig {
  partnerName: string;
  yourName: string;
  relationshipDuration: string;
  favoriteMemory: string;
  ldrDistance: string;
  petNames: string;
}

export interface GeneratedContent {
  poem: string;
  letter: string;
  imagePrompt: string;
}

export enum AppStage {
  LANDING = 'LANDING',
  SETUP = 'SETUP',
  STORY = 'STORY',
  ART = 'ART',
  FINAL = 'FINAL'
}
