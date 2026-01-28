const STORAGE_KEY = 'gameProgress';

export const saveProgress = (data: any) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadProgress = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : null;
};

export const clearProgress = () => {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('playerScore');
  localStorage.removeItem('puzzlePin');
};

