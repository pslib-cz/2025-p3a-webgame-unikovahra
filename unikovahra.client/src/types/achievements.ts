export type AchievementId = 
 | 'cheater' | 'first_minigame' | 'halfway' | 'speedrunner' | 'rich' | 'broke' | 'winner';


 export interface Achievement {
  id: AchievementId;
  name: string;
  description: string;
  icon: string;
}

export const achievements: Record<AchievementId, Achievement> = {
    cheater: {
        id: 'cheater',
        name: 'Podvodník',
        description: 'Pokusil ses podvádět!',
        icon: '🥷'
    },
    first_minigame: {
        id: 'first_minigame',
        name: 'První krok',
        description: 'Vyhrál jsi první minihru!',
        icon: '🎉'
    },
    halfway: {
        id: 'halfway',
        name: 'Polovina cesty',
        description: 'Dosáhl jsi poloviny cesty!',
        icon: '🚀'
    },
    speedrunner: {
        id: 'speedrunner',
        name: 'Rychlík',
        description: 'Dokončil jsi minihru s více něž 50% času',
        icon: '⚡'
    },
    rich: {
        id: 'rich',
        name: 'Boháč',
        description: 'Nasbíral jsi více než $80 000 peněz!',
        icon: '💰'
    },
    broke: {
        id: 'broke',
        name: 'Chudák',
        description: 'Nezískal jsi žádné peníze!',
        icon: '🪙'
 
    },  
    winner: {
        id: 'winner',
        name: 'Vítěz',
        description: 'Vyhrál jsi všechny minihry!',
        icon: '🥇'
    }
};

const shown = new Set<AchievementId>();
let addToastFn: ((a: Achievement) => void) | null = null;

export function showAchievement(id: AchievementId) {
    if (shown.has(id)) return;
    shown.add(id);
    addToastFn?.(achievements[id]);
}

export function registerToastHandler(fn: (a: Achievement) => void) {
    addToastFn = fn;
}

export function unregisterToastHandler() {
    addToastFn = null;
}
