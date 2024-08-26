Win = 0;
lose = 0;
function headF() {
  const randomNumber = Math.floor(Math.random() * 2);
//   console.log(randomNumber);

  if (randomNumber === 1) {
    document.querySelector(".result").innerHTML = "You Win!";
    Win++;
    document.querySelector(".winresult").innerHTML = `${Win}`;
  } else {
    document.querySelector(".result").innerHTML = "You loose!";
    lose++;
    document.querySelector(".looseresult").innerHTML = `${lose}`;
  }
}
function tailF() {
  const randomNumber = Math.floor(Math.random() * 2);
//   console.log(randomNumber);
  if (randomNumber === 0) {
    document.querySelector(".result").innerHTML = "You Win!";
    Win++;
    document.querySelector(".winresult").innerHTML = `${Win}`;
  } else {
    document.querySelector(".result").innerHTML = "You loose!";
    lose++;
    document.querySelector(".looseresult").innerHTML = `${lose}`;
  }
}
