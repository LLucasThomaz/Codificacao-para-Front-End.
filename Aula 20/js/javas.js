function validarInput(){
	let nome = document.getElementById("nome-usuario").value;
	let email = document.getElementById("email").value;
	let telefone = document.getElementById("telefone").value;
	let senha = document.getElementById("senha").value;
	
	if(!(nome.length > 5) || !nome.includes(" ")){
		alert("Verifique o preenchimento do campo indicado")
		document.getElementById("nome-usuario").style.borderColor = "red";
		
	}else if(!(email.length > 10) || !email.includes("@") || !email.includes(".com")){
		alert("Verifique o preenchimento do campo indicado")
		document.getElementById("email").style.borderColor = "red";
	
	}else if(!(telefone.length > 11)){
		alert("Verifique o preenchimento do campo indicado")
		document.getElementById("telefone").style.borderColor = "red";
		
	}else if(!(senha.length > 12)){
		alert("Verifique o preenchimento do campo indicado")
		document.getElementById("senha").style.borderColor = "red";
	
	}else{
		document.getElementById("nome-usuario").style.borderColor = "green";
		document.getElementById("email").style.borderColor = "green";
		document.getElementById("telefone").style.borderColor = "green";
		documente.getElementById("senha").style.borderColor = "green";
	}
}