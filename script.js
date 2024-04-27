let attempts = 10;

const isNum = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const guessUserNumber = function () {
  let secretNumber = 88;
  let userNum = prompt("Угадай число от 1 до 100");

  if (userNum === null) {
    alert("Игра закончена");
    return;
  }

  const checkAttempts = function () {
    if (attempts === 0) {
      const answer = confirm("Попытки закончились, хотите сыграть еще?");

      if (answer) {
        attempts = 10;
        guessUserNumber();
      } else {
        alert("Игра закончена");
        return;
      }
    }
  };

  if (isNum(userNum)) {
    userNum = +userNum;
    if (userNum > secretNumber) {
      attempts--;
      alert(`Загаданное число меньше, осталось попыток: ${attempts}`);
      checkAttempts();
    } else if (userNum < secretNumber) {
      attempts--;
      alert(`Загаданное число больше, осталось попыток: ${attempts}`);
      checkAttempts();
    } else if (userNum === secretNumber) {
      const answer = confirm(
        "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
      );

      if (answer) {
        attempts = 10;
        secretNumber = randomIntFromInterval(1, 100);
        guessUserNumber();
      }
      alert("Игра закончена");
      return;
    }
  } else {
    alert("Введи число");
  }

  return guessUserNumber();
};
