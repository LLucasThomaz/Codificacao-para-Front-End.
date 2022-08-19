let valor = 5;

switch(valor){
	case 0:
		console.log("O valor é" ,valor);
		break;
	case 1:
		console.log("O valor é" ,valor);
		break;
	case 2:
		console.log("O valor é" ,valor);
		break;
	case 3:
		console.log("O valor é" ,valor);
		break;
	default:
		console.log("O valor não foi encontrado nas condições");
		break;
}

let media = 8;

switch(media > 0 && media <7){
	case false:
		console.log("Reprovado!");
		break;
	default:
		console.log("Aprovado!");
		break;
		
}

let indice = 10;

while(indice < 15){
	console.log("O indice é menor que 15" ,indice);
	indice++;
}

do{
	console.log("O indice é menor que 15" ,indice);
	indice++;
}while(indice < 15);

function adicionarPrato(){
	
	let pedido = document.getElementById("numero-prato");
	let total = document.getElementById("total");
	let saldoAnterior = 0;
	
	switch(pedido.value){
		
		case "1":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 10;
			break;
		case "2":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 10;
			break;
		case "3":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 8;
			break;
		case "4":
			saldoAnterior = total.innerText;
			total.innerHTML = parseFloat(saldoAnterior) + 15;
			break;
		default:
			alert("O valor digitado não corresponde a um prato");
			break;
	}
}