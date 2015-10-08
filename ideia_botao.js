//script Botão calcular

function calcularIMC(){
	var formulario = document.getElementById('formulário');

	var kilos = formulario.kilos.value;
	var metros = formulario.metros.value;

	//calcula a altura
	var altura = (metros * 100 + centimetros) / 100;
	var imc = kilos / (altura * altura);

	formulario.imc.value = imc.toFixed(2);
}