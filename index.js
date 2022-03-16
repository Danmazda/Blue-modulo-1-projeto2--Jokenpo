import chalk from "chalk";
import promptM from "prompt-sync";
const prompt = promptM();
const plays = ["pedra", "papel", "tesoura"];
const counters = {
  userWins: 0,
  pcWins: 0,
};
let breakLoop;
while (breakLoop != "N") {
  console.clear();
  let userRounds = +prompt("Quantas rodadas você quer jogar? ");
  for (let index = 0; index < userRounds; index++) {
    const userPlay =
      plays[validation("Escolha: [1] Pedra, [2] Papel, [3] Tesoura")];
    const pcPlay = plays[Math.trunc(Math.random() * 3)];
    if (
      (userPlay === "tesoura" && pcPlay === "papel") ||
      (userPlay === "papel" && pcPlay === "pedra") ||
      (userPlay === "pedra" && pcPlay === "tesoura")
    ) {
      console.log(chalk.green(`Você GANHOU a rodada ${index + 1}!`));
      console.log(
        `Você jogou: ${userPlay.toUpperCase()} e o PC jogou: ${pcPlay.toUpperCase()}!`
      );
      counters.userWins++;
    } else if (userPlay === pcPlay) {
      console.log(chalk.blue(`Você EMPATOU a rodada ${index + 1}!`));
      console.log(
        `Você jogou: ${userPlay.toUpperCase()} e o PC jogou: ${pcPlay.toUpperCase()}!`
      );
    } else {
      console.log(chalk.red(`Você PERDEU a rodada ${index + 1}!`));
      console.log(
        `Você jogou: ${userPlay.toUpperCase()} e o PC jogou: ${pcPlay.toUpperCase()}!`
      );
      counters.pcWins++;
    }
  }
  console.log(
    `De ${userRounds} rodadas Você ganhou: ${counters.userWins} e o Pc ganhou: ${counters.pcWins}`
  );
  if (counters.userWins > counters.pcWins) {
    console.log(
      chalk.bgGreen.black("Você ganhou a maioria das rodadas! Parabéns!!")
    );
  } else if (counters.pcWins > counters.userWins) {
    console.log(
      chalk.bgRed.white(
        "O PC ganhou a maioria das rodadas D: Mas não se desanime você pode tentar novamente"
      )
    );
  } else {
    console.log(
      chalk.bgBlue.black(
        "Você e o PC empataram!!! Incrível disputa! Você pode jogar novamente para tentar conquistar a máquina."
      )
    );
  }
  breakLoop = prompt("Deseja continuar? [N] para sair.")
    .trim()
    .slice(0, 1)
    .toUpperCase();
}

function validation(question) {
  console.log(question);
  let response = +prompt();
  while (response > plays.length || response < 1) {
    console.log("Favor escolher entre:");
    console.log("[1] Pedra");
    console.log("[2] Papel");
    console.log("[3] Tesoura");
    response = +prompt();
  }
  return response - 1;
}
