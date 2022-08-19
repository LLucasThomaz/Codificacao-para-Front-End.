let atribuicao = "atribuição";
console.log(atribuicao);

let x = 10;
let y = 15;
console.log("O operador de adição retorna", x+y);
console.log("O operador de subtração retorna", x-y);
console.log("O operador de mutiplicação retorna", x*y);
console.log("O operador de divisão retorna", x/y);

let numero1 = 10;
let numero2 = 3;
console.log("O operador de exponenciação retorna", numero1**numero2);
console.log("O operador de modulo(resto de divisão) retorna", numero1%numero2);
console.log("Numero1 valia", numero1 );
numero1++;
console.log("Agora vale", numero1);
console.log("Numero2 valia", numero2 );
numero2--;
console.log("Agora vale", numero2);


console.log("--- Operadores de comparação ---");

let primeiroValor = 100;
let segundoValor = "100";

if(primeiroValor == segundoValor){
	console.log("Os valores são iguais", primeiroValor, segundoValor);
}

if(primeiroValor === segundoValor){
	console.log("Os valores são iguais", primeiroValor, segundoValor);
}else{
	console.log("Os valores são iguais mais os tipos são diferentes");
}

let terceiroValor = 200;
let quartoValor = "200";

if(terceiroValor != quartoValor){
	console.log("Os valores são diferentes");
}else{
	console.log("Os valores são iguais");
}

if(terceiroValor !== quartoValor){
	console.log("Os valores são de tipos diferentes");
}else{
	console.log("Os valores são iguais");
}

console.log("--- Operadores de lógicos ---");

let v1 = 10;
let v2 = 20;
let v3 = 30;
let v4 = 40;

if(v1 > v2){
	console.log(v1, "é maior que", v2);
}else if(v1 < v2){
	console.log(v1, "é menor que", v2);
}else{
	console.log(v2, "é maior que", v1);
}

if(v1 > v2){
	console.log(v1, "é maior que ou igual a", v2);
}else if(v1 <= v2){
	console.log(v1, "é menor que ou igual a", v2);
}

// && operador lógico e
// || operador lógico ou

if(v4 > v3 || v1 > v2){
	console.log(v4, "é maior que", v3, "ou", v2, "é maior que", v1);
}else{
	console.log("A condição não é verdadeira");
}

if(!(v3 > v4)){
	console.log(v3, "não é maior que", v4);
}


function modoNoturno(){
	
	
	
	let titulo = document.getElementById("titulo");
	let botao = document.getElementById("botao");
	let goku = document.getElementById("goku");
	
	if(titulo.innerText == "Modo Diurno"){
		document.body.style.backgroundColor = "black";
	
		titulo.innerHTML = "Modo Noturno";
		titulo.style.color = "white";
		
		botao.style.backgroundColor = "white";
		botao.style.color = "black";
		botao.innerHTML = "Ativar modo diurno";
		
		goku.setAttribute('src', 'img/gk05.png')
		
	}else{
		
		document.body.style.backgroundColor = "white"
		
		titulo.innerHTML = "Modo Diurno";
		titulo.style.color = "black";
		
		botao.style.backgroundColor = "black";
		botao.style.color = "white";
		botao.innerHTML = "Ativar modo noturno";
		
		goku.setAttribute('src', 'img/gk.png')
	}

}