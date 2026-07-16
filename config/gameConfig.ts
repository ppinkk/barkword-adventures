export interface Level {
  enemyName: string;
  hp: number;
  attack: number;
  introDialogue: string;
}

export interface GameConfig {
  player: {
    startingMaxHP: number;
    hpLevelUpBonus: number;
  };
  levels: Level[];
  calculateDamage: (wordLength: number) => number;
}

export const GAME_CONFIG: GameConfig = {
  player: {
    startingMaxHP: 80,
    hpLevelUpBonus: 20,
  },
  levels: [
    {
      enemyName: "The Menacing Courier",
      hp: 75,
      attack: 4,
      introDialogue: "Step aside, pup! I've got a high-priority delivery of doom for you!",
    },
    {
      enemyName: "The Autonomous Robot Vacuum",
      hp: 150,
      attack: 8,
      introDialogue: "Whirr... Dirt detected. Initiating maximum suction protocol. Prepare to be swept away!",
    },
    {
      enemyName: "The Robotic Smart Bathtub",
      hp: 300,
      attack: 15,
      introDialogue: "Splash! The water is fine... and full of electrical nightmares! Ready for a dip?",
    },
  ],
  calculateDamage: (wordLength: number) => wordLength * wordLength,
};
