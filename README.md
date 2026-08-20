# Wordle Clone (Next.js & TypeScript)

A fully playable, responsive Wordle clone built using **Next.js (App Router)**, **React**, and **TypeScript**. Features real-time tile evaluation, dynamic keyboard tracking, dictionary validation, custom game status badges, and accessible modal overlays.

---

## 🎯 Features

* **6x5 Game Grid:** Clean layout supporting up to 6 attempts for 5-letter word entries.
* **Color-Coded Tile Evaluation:**
  * 🟩 **Green (Correct):** Letter is correct and in the right position.
  * 🟨 **Yellow (Present):** Letter exists in the secret word, but in a different position.
  * ⬛ **Gray (Absent):** Letter does not exist in the secret word.
* **Dictionary Validation:** Verifies guesses against an official 5-letter English word list (`Set` lookup) before submission. Displays an animated error toast when an invalid word is entered.
* **Interactive On-Screen & Physical Keyboard:** Real-time key status tracking (`correct`, `present`, `absent`) supporting both physical typing and on-screen virtual keyboard clicks.
* **Win/Loss Badges:** Displays styled completion status with victory badges, guess count statistics, and one-click game reset functionality.
* **Rules Modal:** Embedded modal window detailing game rules and tile color meanings.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** CSS3 Modules / Custom CSS

---

## 📁 Project Structure

```text
wordle-clone-nextjs/
├── app/
│   ├── layout.tsx         # App layout and metadata setup
│   ├── page.tsx           # Main application entry point
│   └── globals.css        # Global CSS, theme colors, and animations
├── components/
│   ├── GameScreen.tsx     # Core game logic, state management, and event listeners
│   ├── GameHeader.tsx     # Application header bar and options trigger
│   ├── Grid/              # Grid and row layout components
│   ├── Tile/              # Individual letter tile component and status renderer
│   ├── Keyboard/          # Virtual on-screen keyboard component
│   ├── GameStatus/        # End-game badge and restart button controls
│   └── GameRules/         # "How to Play" modal window
├── utils/
│   └── wordList.ts        # Word validation Set data structure
├── public/                # Static assets and icons
├── package.json
├── tsconfig.json
└── README.md