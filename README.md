# Tenzies — React + Vite

A small Tenzies game built with React, Vite and Yarn.

Play: roll dice until all 10 dice show the same value. Click a die to "hold" it between rolls.

## Features

- 10 dice with random values (1–6)
- Hold individual dice to freeze their value
- Roll only non-held dice
- Confetti celebration when you win (optional `react-confetti`)

## Prerequisites

- Node.js (LTS recommended)
- Yarn (project uses Yarn)


## Install dependencies:
yarn install


## Start the dev server and open the app at http://localhost:5173:
yarn dev

## Build a production bundle:

yarn build

## Gameplay / Controls
Click any die to toggle the held state (held dice are visually highlighted).
Click Roll to roll all non-held dice.
When all dice are held and show the same value, the game is won and a celebration (confetti) is shown if installed.
