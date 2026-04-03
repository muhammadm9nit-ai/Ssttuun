
export type Screen = 'login' | 'register' | 'dashboard' | 'profile' | 'matches' | 'results';

export interface GameMode {
  id: string;
  title: string;
  matches: number;
  image: string;
  tag: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
