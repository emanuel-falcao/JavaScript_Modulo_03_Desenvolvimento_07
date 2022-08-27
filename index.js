/* Com os conceitos aprendidos, crie um programa de calculadora que: 

receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. 
Para isso, você deve ter o Node.js instalado. Após fazer essa migração, coloque seu código no arquivo "index.js", 
teste e tire um print.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao 
lado para que outros desenvolvedores possam analisá-lo.
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
		console.log("A divisao eh: " + divisao)
} else {
	console.log("Operacao Invalida.")
}