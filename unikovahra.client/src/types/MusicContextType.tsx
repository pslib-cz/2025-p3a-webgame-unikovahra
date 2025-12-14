export type MusicContextType = {
  playMusic: (src: string, volume?: number) => void;
  stopMusic: () => void;
};