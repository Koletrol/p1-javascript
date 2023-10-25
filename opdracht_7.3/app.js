let num1 = 0;

function numUp() {
  let answer = (num1 += 1);
  console.log(answer);

  if (answer > 9) {
    num1 = 0;
  } else {
  }
}
