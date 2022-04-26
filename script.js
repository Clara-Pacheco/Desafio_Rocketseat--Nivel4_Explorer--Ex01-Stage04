/*Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações! */

let num1 = Number(prompt("Digite o primeiro número"))
let num2 = Number(prompt("Digite o segundo número"))

alert(`A soma dos números é ${num1 + num2}`)
alert(`A subtração dos números é ${num1 - num2}`)
alert(`A multiplicação dos números é ${num1 * num2}`)
alert(`A divisão dos números é ${num1 / num2}`)
alert(`O resto da divisão dos dois números é ${num1 % num2}`)

if ((num1 + num2) % 2 == 0) {
  alert(`A soma de ${num1} e ${num2} é um valor par!`)
} else {
  alert(`A soma de ${num1} e ${num2} é um valor ímpar!`)
}

if (num1 === num2) {
  alert('Os números digitados são iguais')
}else {
  alert('Os números digitados são diferentes')
}



