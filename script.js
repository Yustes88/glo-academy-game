const isNum = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num)
}

const randomIntFromInterval = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const guessUserNumber = function () {
  let secretNumber = randomIntFromInterval(1, 100)
  let attempts = 10

  const finish = function () {
    alert('Игра закончена')
    return
  }

  const round = function () {
    let userNum = prompt('Угадай число от 1 до 100')

    if (attempts === 1 && secretNumber !== userNum) {
      const answer = confirm('Попытки закончились, хотите сыграть еще?')

      if (answer) {
        attempts = 10
        round()
      } else {
        finish()
        return
      }
    }

    if (userNum === null) {
      finish()
    } else if (!isNum(userNum)) {
      alert('Введи число')
      round()
    } else if (isNum(userNum)) {
      userNum = +userNum
      if (userNum > secretNumber) {
        attempts--
        alert(`Загаданное число меньше, осталось попыток: ${attempts}`)
        round()
      } else if (userNum < secretNumber) {
        attempts--
        alert(`Загаданное число больше, осталось попыток: ${attempts}`)
        round()
      } else if (userNum === secretNumber) {
        const answer = confirm(
          'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?',
        )

        if (answer) {
          attempts = 10
          secretNumber = randomIntFromInterval(1, 100)
          round()
        } else {
          finish()
        }
      }
    }
  }

  round()
}

guessUserNumber()
