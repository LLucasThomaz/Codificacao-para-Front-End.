let marca1 = "VW";
let marca2 = "GM";
let marca3 = "Fiat";

console.log(marca1, marca2, marca3);

let VW = ["GOL", "POLO", "VIRTUS", "GOLF", "AMAROK"];

if(VW[5] == "AMAROK"){
	console.log("Meu carro é uma " + VW[4])
}else{
	console.log("Não! Seu carro é uma BMW X4 M.")
};

let GM = ["S10", "ONIX", "CAMARO", "PRISMA", "CRUZE"];

if(GM[5] == "CAMARO"){
	console.log("Meu carro é um " +GM[2])
}else{
	console.log("Não! Seu carro é uma BMW X4 M.")
};

let Fiat = ["UNO", "500", "MOBI", "TORO", "PULSE"];

if(Fiat[5] == "UNO"){
	console.log("Meu carro é um " + Fiat[0])
}else{
	console.log("Não! Seu carro é uma BMW X4 M.")
};

let frutas = ["banana", "maçã", "goiaba", "melão", "melancia", "uva", "laranja", "limão", "carambola", "caja"];

for(i = 0; i < frutas.length; i++){
	if(frutas[i] == "melão"){
		console.log("Comprei " + i, frutas[i])
	}else{
		console.log("Amor! Não encontrei a(o) " + frutas[i])
	}
}

console.log(frutas.length);

let animais = ["Cachorro", "Gato", "Tubarão", "Leão", "Preguiça", "Jacare", "Aguia", "Galinha", "Porco", "Cavalo"];

let lista = document.getElementById("lista");

console.log(lista)

for(i = 0; i < animais.length; i++){
	
	if(i > 0 && (i % 2) == 0){
		lista.innerHTML += "<li>" + animais[i] + "</li>";
	}

}
