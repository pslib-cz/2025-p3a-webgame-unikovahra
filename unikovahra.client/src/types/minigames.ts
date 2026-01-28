export const MINIGAME_ORDER = [
    'gamebook',
    'moneygrab',
    'switchboard',
    'tablet',
    'codetyping',
    'puzzle',
    'keylock'
] as const;

export type MinigameName = typeof MINIGAME_ORDER[number];
