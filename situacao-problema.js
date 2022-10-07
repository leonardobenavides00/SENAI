// variável, seu valor pode ser alterado no decorrer do programa
let prompt=require("prompt-sync")();
let pecaNome;


for (let indice = 0; indice < 10; indice++) {
	let pecaNome=prompt("Qual é o nome da peça? ");
	let numeroLetras = pecaNome.length;
	if (numeroLetras>=3) {
	let pecaPeso=prompt("Qual é peso da peça em gramas? ");
	if (pecaPeso>=100) {
console.log ("Peça cadastrada");
	} else console.log ("Cadastro negado: a peça possui mais do que 100g. \n");
} else console.log ("Erro: o nome da peça possui menos que 3 caractéres. \n");
}
console.log ("FIM DO PROGRAMA");