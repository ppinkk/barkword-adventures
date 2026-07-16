export interface Level {
  enemyName: string;
  hp: number;
  attack: number;
  introDialogue: string;
  idlePath: string;
  attackPath: string;
  hurtPath: string;
  lostPath: string;
}

export interface GameConfig {
  player: {
    startingMaxHP: number;
    hpLevelUpBonus: number;
    idlePath: string;
    attackPath: string;
    hurtPath: string;
  };
  levels: Level[];
  calculateDamage: (wordLength: number) => number;
}

export const GAME_CONFIG: GameConfig = {
  player: {
    startingMaxHP: 80,
    hpLevelUpBonus: 20,
    idlePath: "/assets/poodle-idle.png",
    attackPath: "/assets/poodle-attack.png",
    hurtPath: "/assets/poodle-hurt.png",
  },
  levels: [
    {
      enemyName: "The Menacing Courier",
      hp: 75,
      attack: 4,
      introDialogue: "Step aside, pup! I've got a high-priority delivery of doom for you!",
      idlePath: "/assets/enemy-courier-idle.png",
      attackPath: "/assets/enemy-courier-attack.png",
      hurtPath: "/assets/enemy-courier-hurt.png",
      lostPath: "/assets/enemy-courier-lost.png",
    },
    {
      enemyName: "The Autonomous Robot Vacuum",
      hp: 150,
      attack: 8,
      introDialogue: "Whirr... Dirt detected. Initiating maximum suction protocol. Prepare to be swept away!",
      idlePath: "/assets/enemy-vacuum-idle.png",
      attackPath: "/assets/enemy-vacuum-attack.png",
      hurtPath: "/assets/enemy-vacuum-hurt.png",
      lostPath: "/assets/enemy-vacuum-lost.png",
    },
    {
      enemyName: "The Robotic Smart Bathtub",
      hp: 300,
      attack: 15,
      introDialogue: "Splash! The water is fine... and full of electrical nightmares! Ready for a dip?",
      idlePath: "/assets/enemy-bathtub-idle.png",
      attackPath: "/assets/enemy-bathtub-attack.png",
      hurtPath: "/assets/enemy-bathtub-hurt.png",
      lostPath: "/assets/enemy-bathtub-lost.png",
    },
  ],
  calculateDamage: (wordLength: number) => wordLength * wordLength,
};
