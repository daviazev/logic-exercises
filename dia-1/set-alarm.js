// Escreva uma função chamada setAlarm que receba dois parâmetros. O primeiro parâmetro, empregado , é verdadeiro sempre que você estiver empregado e o segundo parâmetro, férias é verdadeiro sempre que você estiver de férias.

// A função deve retornar true se você estiver empregado e não estiver de férias (porque essas são as circunstâncias em que você precisa definir um alarme). Deve retornar false caso contrário. Exemplos:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

const setAlarm = (employed, vacation) => {
  return employed && !vacation;
};

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
console.log(setAlarm(true, false));
