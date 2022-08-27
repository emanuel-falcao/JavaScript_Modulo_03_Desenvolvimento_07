/* Com os conceitos aprendidos, crie um programa de calculadora que: 

receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 
*/

console.log("Desenvolvimento 07 - CalculadoraNode");
var readlineSync = require('readline-sync')
var numero_01 = parseFloat(readlineSync.question("Digite o Primeiro numero: "));
let operacao = readlineSync.question("Digite a Operacao: +,-,* ou /");
var numero_02 = parseFloat(readlineSync.question("Digite o Segundo numero: "));

if (operacao == "+") {
		var soma = numero_01+numero_02;
			console.log("A soma eh: " + soma)
} else if (operacao == "-") {
		var subtracao = numero_01-numero_02;
			console.log("A subtracao eh: " + subtracao)
} else if (operacao == "*") {
		var multiplicacao = numero_01*numero_02;
			console.log("A multiplicacao eh: " + multiplicacao)
}	else if (operacao == "/") {
		var divisao = numero_01/numero_02;
		var modulo= numero_01 % numero_02;
  // var final = modulo - divisao;
			console.log("A divisao eh: " + divisao + " e o resto " + modulo)
} else {
	console.log("Operacao Invalida.")
}