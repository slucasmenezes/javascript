// peso / altura * altura

var tdPeso = document.getElementById('peso-2');
var tdAltura = document.getElementById('altura-2');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var paciente = {"peso" : tdPeso.textContent, "altura" : tdAltura.textContent};


if(paciente.altura != 0 ){
	var imc = paciente.peso / (paciente.altura * paciente.altura) // 25

	var tdImc = document.getElementById("imc-2");
	tdImc.textContent = imc;

console.log(imc);	
} else{
	console.log("Não executei porque a altura é igual a zero");
}


//Primeiro treino de script if e else
	//Exercícios
	//se salário mensal for mario que 0 e menor que 100 -> 5%
	//se não cair na condição anterior e o salário for menor que 2000 -> 10%
	//se não cair nas outras duas -> 15%
// var ehEstagiario = true;
// var ehCLT = true;

// if (ehEstagiario || ehCLT) {

// var salarioMensal = 2500;

// if (salarioMensal > 0 && salarioMensal < 1000){
	
// 	var bonus = salarioMensal * 0.05;

// 	console.log("salário > 0 e < que 1000");

// 	console.log(bonus);
// }
// else if (salarioMensal < 2000){

// 	var bonus = salarioMensal * 0.10;

// 	console.log("salário < que 2000");

// 	console.log(bonus);		
	
// }else{
// 	var bonus = salarioMensal * 0.15;

// 	console.log("Não caiu em nenhuma das outras");
// 	console.log(bonus);
// }
// };
