// Dado n, pegue a soma dos dígitos de n. Se esse valor tiver mais de um dígito, continue reduzindo dessa maneira até que um número de um dígito seja produzido. A entrada será um inteiro não negativo.

// EXEMPLO

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digitalRoot = (number) => {
  let result = Array.from(number.toString());

  while (result.length > 1) {
    result = result
      .map((num) => parseFloat(num))
      .reduce((acc, curr) => acc + curr);

    result = Array.from(result.toString());
  }

  return parseFloat(result);
};

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(999999999999999));
