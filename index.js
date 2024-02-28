let form1, form2;

function main(){
	form1 = document.getElementById('verificarPassword');
	form2 = document.getElementById('crearPassword');

	form1.addEventListener('submit', verificar, false);
	form2.addEventListener('submit', crear, false);
	
	form1[0].addEventListener('input', resetearOutput, false);
}

window.onload=main;

function verificar(event){
	event.preventDefault();
	const contraseña = form1[0].value;
	const salida = form1[1];

	salida.innerHTML = (contraseña.length >= 8)? parrafo('Tiene 8 o más carácteres.', 'bien') : parrafo('Tiene menos de 8 carácteres.', 'mal');
	salida.innerHTML += (tieneNumLetras(contraseña))? parrafo('Tiene números y letras.', 'bien') : parrafo('Debe tener números y letras.', 'mal');
	salida.innerHTML += (dinamica(contraseña))? parrafo('Tiene mayúsculas y minúsculas.', 'bien') : parrafo('Debe contener mayúsculas y minúsculas.', 'mal');
	salida.innerHTML += (tieneSignos(contraseña))? parrafo('Tiene signos y otros carácteres.', 'bien') : parrafo('No contiene signos ni carácteres especiales.', 'mal');
}

function parrafo(frase, calif){
	return `<p class='${calif}'>${frase}</p>`;
}

function tieneNumLetras(word){
	let letra=false, num=false;
	for(let i=0; i<word.length; i++){
		if(isNaN(word[i])){
			letra=true;			
		}
		else{
			num=true;
		}
	}
	return (letra && num);
}

function tieneSignos(word){
	const signos = ['\\' , '|' , '@' , '#' , '~' , '€' , '¬' , 'ª' ,'º','!','"','\'','·','$','%','&','/','(',')','=','?','¿','¡','+','*','[',']','{','}','-','_','.',':',',',';'];
	let hasSigned = false;
	signos.forEach((value)=>{
		if(word.includes(value)){
			hasSigned=true;
			return;
		}
	});
	return hasSigned;
}

function dinamica(word){
	let mayus=false, minus=false;
	for(let i=0; i<word.length; i++){
		if(!isNaN(word[i])) continue;
		mayus=(word[i].localeCompare(word[i].toUpperCase())===0)? true : mayus;
		minus=(word[i].localeCompare(word[i].toLowerCase())===0)? true : minus;
	}
	return (mayus && minus);
}

function resetearOutput(e){
	form1[1].innerHTML='';
}

function crear(event){
	event.preventDefault();
	const alfabeto = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'ñ' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z', '\\' , '|' , '@' , '#' , '~' , '€' , '¬' , 'ª' ,'º','!','"','\'','·','$','%','&','/','(',')','=','?','¿','¡','+','*','[',']','{','}','-','_','.',':',',',';'];
	let password='';

	for(let i=0; i<parseInt(form2[1].value); i++){
		password+=alfabeto[randNum()];
	}

	form2[0].innerHTML=password;
}

function randNum(){
	return Math.floor(Math.random()*89)
}
