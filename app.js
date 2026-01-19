document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.choice-btn');
  const userSpan = document.querySelector('#user-choice .choice');
  const compSpan = document.querySelector('#computer-choice .choice');
  const winnerEl = document.getElementById('winner');
  const gameEl = document.querySelector('.game');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('disabled')) return;
      // simple visual press
      btn.classList.add('pressed');
      setTimeout(() => btn.classList.remove('pressed'), 160);
      // disable buttons until animation finishes
      buttons.forEach(b => b.classList.add('disabled'));
      playGame(btn.dataset.choice).then(() => {
        buttons.forEach(b => b.classList.remove('disabled'));
      });
    });
  });

  // core game logic with animations
  async function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // reset animations / classes
    userSpan.classList.remove('shake', 'pop');
    compSpan.classList.remove('shake', 'pop');
    winnerEl.className = '';

    gameEl.classList.add('lift');

    // small reveal animation: show dots then reveal choices
    userSpan.innerText = '...';
    compSpan.innerText = '...';
    userSpan.classList.add('pop');
    compSpan.classList.add('pop');

    await new Promise(r => setTimeout(r, 450));

    userSpan.classList.remove('pop');
    userSpan.innerText = userChoice;
    userSpan.classList.add('pop');

    await new Promise(r => setTimeout(r, 220));

    compSpan.classList.remove('pop');
    compSpan.innerText = computerChoice;
    compSpan.classList.add('pop');

    let result = '';
    if (userChoice === computerChoice) {
      result = "It's a Draw 😐";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You Win 🎉';
    } else {
      result = 'You Lose 😢';
    }

    winnerEl.innerText = result;

    // color + flash
    winnerEl.classList.remove('win', 'lose', 'draw');
    if (result.startsWith('You Win')) winnerEl.classList.add('win');
    else if (result.startsWith('You Lose')) winnerEl.classList.add('lose');
    else winnerEl.classList.add('draw');
    winnerEl.classList.add('winner-flash');

    // extra shake when losing
    if (result.startsWith('You Lose')) {
      userSpan.classList.add('shake');
      compSpan.classList.add('shake');
    }

    // cleanup after animations
    await new Promise(r => setTimeout(r, 1000));
    winnerEl.classList.remove('winner-flash');
    userSpan.classList.remove('shake');
    compSpan.classList.remove('shake');
    gameEl.classList.remove('lift');
  }
});
