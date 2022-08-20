function validarInput(){
	let nome = document.getElementById("nome-usuario").value;
	let email = document.getElementById("email").value;
	
	if(!(nome.length > 5) || !nome.includes(" ")){
		alert("Verifique o preenchimento do campo indicado")
		document.getElementById("nome-usuario").style.borderColor = "red";
		
	}else if(!(email.length > 10) || !email.includes("@") || !email.includes(".com")){
		alert("Verifique o preenchimento do campo indicado")
		document.getElementById("email").style.borderColor = "red";
		
	}else{
		document.getElementById("nome-usuario").style.borderColor = "green";
		document.getElementById("email").style.borderColor = "green";
	}
}