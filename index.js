const prompt = require("prompt-sync")();
const plays = ["tesoura", "papel", "pedra"];
const counters = {
  userWins: 0,
  pcWins: 0,
};
let breakLoop;
while (breakLoop != "N") {
  console.clear();
  let userRounds = prompt("Quantas rodadas você quer jogar?");
  for (let index = 0; index < userRounds; index++) {
    const userPlay = validation("Digite pedra, papel e tesoura: ");
    const pcPlay = plays[Math.trunc(Math.random() * 3)];
    if (
      (userPlay === "tesoura" && pcPlay === "papel") ||
      (userPlay === "papel" && pcPlay === "pedra") ||
      (userPlay === "pedra" && pcPlay === "tesoura")
    ) {
      console.log(`Você GANHOU a rodada ${index + 1}!`);
      console.log(
        `Você jogou: ${userPlay.toUpperCase()} e o PC jogou: ${pcPlay.toUpperCase()}!`
      );
      counters.userWins++;
    } else if (userPlay === pcPlay) {
      console.log(`Você EMPATOU a rodada ${index + 1}!`);
      console.log(
        `Você jogou: ${userPlay.toUpperCase()} e o PC jogou: ${pcPlay.toUpperCase()}!`
      );
    } else {
      console.log(`Você PERDEU a rodada ${index + 1}!`);
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
    console.log("Você ganhou a maioria das rodadas! Parabéns!!");
  } else if (counters.pcWins > counters.userWins) {
    console.log(
      "O PC ganhou a maioria das rodadas D: Mas não se desanime você pode tentar novamente"
    );
  } else {
    console.log(
      "Você e o PC empataram!!! Incrível disputa! Você pode jogar novamente para tentar conquistar a máquina."
    );
  }
  breakLoop = prompt("Deseja continuar? [N] para sair.")
    .trim()
    .slice(0, 1)
    .toUpperCase();
}

function validation(question) {
  let response = prompt(question).toLowerCase().trim();
  while (!plays.includes(response)) {
    console.log("Favor colocar Pedra, Papel ou Tesoura");
    response = prompt(question).toLowerCase().trim();
  }
  return response;
}
