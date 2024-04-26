function isNum(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

function guessUserNumber() {
  const secretNumber = 88;
  const userNum = prompt("Угадай число от 1 до 100");

  if (userNum === null) {
    alert("Игра закончена");
    return;
  }

  if (isNum(userNum)) {
    userNum = +userNum;
    if (userNum > secretNumber) {
      alert("Загаданное число меньше");
    } else if (userNum < secretNumber) {
      alert("Загаданное число больше");
    } else if (userNum === secretNumber) {
      alert("Поздравляю, Вы угадали!!!");
      return userNum;
    }
  } else {
    alert("Введи число");
  }

  return guessUserNumber();
}

console.log(guessUserNumber());
