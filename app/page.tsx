"use client";

import { useState } from "react";
import Image from "next/image";
import { GAME_CONFIG } from "@/config/gameConfig";

export default function Home() {
  const [testWord, setTestWord] = useState("Barkword");
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);

  const damage = GAME_CONFIG.calculateDamage(testWord.length);
  const activeLevel = GAME_CONFIG.levels[selectedLevelIndex];

  return (
    <main className="flex-1 flex flex-col justify-between p-6 bg-slate-950 text-slate-100 overflow-y-auto select-none">
      {/* Header */}
      <div className="text-center py-4">
        <div className="inline-block animate-bounce mb-2">
          <Image
            src="/assets/poodle-idle.png"
            alt="Jabby Poodle"
            width={744}
            height={659}
            className="w-16 max-w-full h-auto object-contain mx-auto"
            priority
            unoptimized
          />
        </div>
        <h1 className="text-2xl font-black tracking-wider bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent uppercase drop-shadow-md">
          Barkword Adventures
        </h1>
        <p className="text-xs font-semibold tracking-widest text-purple-400 uppercase mt-0.5">
          Jabby's Nightmare
        </p>
      </div>

      {/* Hero / Player Stats Section */}
      <div className="bg-slate-900/80 border border-purple-500/30 rounded-2xl p-4 shadow-lg backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl -mr-4 -mt-4"></div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-bold text-slate-300 uppercase tracking-wider">Player Profile</span>
          <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-purple-500/30">
            Phase 1 Scaffolding
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 p-0.5 shadow-md shadow-pink-500/20 animate-pulse flex-shrink-0">
            <div className="w-full h-full bg-slate-900 rounded-[10px] overflow-hidden flex items-center justify-center p-1">
              <Image
                src="/assets/poodle-idle.png"
                alt="Jabby the Poodle"
                width={744}
                height={659}
                className="max-w-full h-auto object-contain"
                unoptimized
              />
            </div>
          </div>
          <div>
            <h2 className="font-extrabold text-base text-slate-100">Jabby the Poodle</h2>
            <div className="flex gap-4 mt-1 text-xs text-slate-400">
              <div>
                HP: <span className="text-emerald-400 font-bold">{GAME_CONFIG.player.startingMaxHP}</span>
              </div>
              <div>
                Level Up Bonus: <span className="text-indigo-400 font-bold">+{GAME_CONFIG.player.hpLevelUpBonus} HP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Combat Simulator (Static Config Verification) */}
      <div className="my-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col gap-3 shadow-inner">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Damage Calculator
          </h3>
          <span className="text-[10px] text-slate-500 font-mono">Word Length²</span>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="test-word-input" className="text-xs text-slate-400">
            Type a combat word:
          </label>
          <input
            id="test-word-input"
            type="text"
            value={testWord}
            onChange={(e) => setTestWord(e.target.value.replace(/[^a-zA-Z]/g, ""))}
            className="w-full bg-slate-950 border border-slate-800 focus:border-pink-500/50 rounded-xl px-3 py-2 text-sm text-slate-200 outline-none transition-all font-mono"
            placeholder="Type word..."
            maxLength={15}
          />
        </div>

        <div className="flex items-center justify-between bg-slate-950/80 rounded-xl p-3 border border-slate-900">
          <div className="text-xs text-slate-400">
            Word: <span className="font-mono text-pink-400 font-semibold">"{testWord}"</span> ({testWord.length} letters)
          </div>
          <div className="text-sm font-bold text-slate-200">
            Damage: <span className="text-pink-500 text-lg font-black">{damage}</span> HP
          </div>
        </div>
      </div>

      {/* Nightmare Levels Section */}
      <div className="flex-1 flex flex-col justify-start gap-3">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Nightmare Levels
        </h3>

        {/* Level List selector */}
        <div className="grid grid-cols-3 gap-2">
          {GAME_CONFIG.levels.map((level, idx) => (
            <button
              key={level.enemyName}
              onClick={() => setSelectedLevelIndex(idx)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 ${
                selectedLevelIndex === idx
                  ? "bg-purple-950/40 border-purple-500/80 shadow-md shadow-purple-500/10"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700 text-slate-400"
              }`}
            >
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Level {idx + 1}
              </div>
              <div className="text-xs font-extrabold truncate mt-0.5 text-slate-200">
                {level.enemyName.split(" ").pop()}
              </div>
            </button>
          ))}
        </div>

        {/* Active level details */}
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-4 flex flex-col gap-4">
          <div>
            <div className="flex justify-between items-start gap-2 mb-2">
              <h4 className="text-sm font-black text-purple-300 leading-tight">
                {activeLevel.enemyName}
              </h4>
              <div className="flex gap-2 shrink-0">
                <span className="bg-rose-950/50 text-rose-400 border border-rose-950 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  HP: {activeLevel.hp}
                </span>
                <span className="bg-amber-950/50 text-amber-400 border border-amber-950 text-[10px] font-bold px-2 py-0.5 rounded-md">
                  ATK: {activeLevel.attack}
                </span>
              </div>
            </div>
            <div className="text-xs italic text-slate-300 bg-slate-950/40 p-3 rounded-lg border border-slate-900/60 leading-relaxed relative pl-7 pr-4">
              <span className="absolute left-2.5 top-1.5 text-purple-500 font-serif text-lg">“</span>
              {activeLevel.introDialogue}
              <span className="absolute right-2.5 bottom-0.5 text-purple-500 font-serif text-lg">”</span>
            </div>
          </div>

          {/* Enemy Visual Preview */}
          <div className="flex flex-col items-center justify-center bg-slate-950/30 border border-slate-900/50 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08)_0%,transparent_70%)]"></div>
            <div className="relative flex items-center justify-center w-full">
              <Image
                src={activeLevel.idleAssetPath}
                alt={activeLevel.enemyName}
                width={1024}
                height={1024}
                className="w-40 max-w-full h-auto object-contain"
                priority
                unoptimized
              />
            </div>
            <div className="mt-3 text-[9px] text-purple-400 font-bold uppercase tracking-wider text-center">
              {activeLevel.enemyName} (Idle Preview)
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="text-center py-2 text-[9px] text-slate-600 font-mono tracking-wider mt-4">
        © 2026 Barkword Adventures. All Rights Reserved.
      </div>
    </main>
  );
}
