# Rock Paper Scissors — Tiny Animated Game

A small, self-contained Rock Paper Scissors web game with playful animations.

This repository contains a single-page game you can open in your browser. It adds animated reveals, button press effects, a winner pulse, and a shake animation on losing.

**Features**
- Simple, zero-dependency HTML/CSS/JS game
- Animated choice reveal (dots → pop reveal)
- Button press and hover polish
- Winner color + pulse; losing rounds add a shake
- Buttons are disabled while the round plays to avoid accidental extra clicks

**Files**
- `index.html` — markup and semantic structure for the UI
- `styles.css` — all styles and animations (keyframes: `pop`, `shake`, `pulse`)
- `app.js` — game logic and animation wiring (event listeners, reveal sequence)

**How to run**
1. Open `index.html` in your browser (double-click the file or serve the folder with a static server).
2. Click one of the three buttons (Rock, Paper, Scissors) to play.
3. Watch the animated reveal and the result.

**How to play**
- Click a button to choose Rock, Paper, or Scissors.
- The computer randomly picks a choice.
- The result is displayed with a colored animation: green for win, red for lose, yellow for draw.

**Development notes**
- The project is intentionally dependency-free and uses DOM APIs plus CSS keyframes.
- To extend the project, consider adding:
  - Score tracking with animated increments
  - Confetti effect on wins (lightweight JS or CSS particles)
  - Responsive/touch improvements for mobile

**License**
This is provided as-is for learning and experimentation. No license file is included — add one if you plan to publish.

Enjoy! If you'd like, I can add confetti on wins or a persistent score counter next.
