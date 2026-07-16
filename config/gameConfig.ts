export interface Level {
  enemyName: string;
  hp: number;
  attack: number;
  dialogueHook: string;
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
      dialogueHook: "menacing_courier_dialogue",
    },
    {
      enemyName: "The Autonomous Robot Vacuum",
      hp: 150,
      attack: 8,
      dialogueHook: "robot_vacuum_dialogue",
    },
    {
      enemyName: "The Robotic Smart Bathtub",
      hp: 300,
      attack: 15,
      dialogueHook: "smart_bathtub_dialogue",
    },
  ],
  calculateDamage: (wordLength: number) => wordLength * wordLength,
};
