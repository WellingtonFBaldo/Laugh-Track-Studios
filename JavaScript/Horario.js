debugger;

var data = new Date();

var fundo;

switch(data.getHours()){
	case 0:
		fundo = "#000000";
		break;
	case 1:
		fundo = "#0e0618";
		 break;
	case 2:
		fundo = "#140d28";
		break;
	case 3:
		fundo = "#171139";
		break;
	case 4:
		fundo = "#19144a";
		break;
	case 5:
		fundo = "#1a165d";
		break;
	case 6:
		fundo = "#191970";
		break;
	case 7:
		fundo = "#009dda";
		break;
	case 8:
		fundo = "#00a8e7";
		break;
	case 9:
		fundo = "#00b3f3";
		break;
	case 10:
		fundo = "#00bfff";
		break;
	case 11:
		fundo = "#77b4db";
		break;
	case 12:
		fundo = "#9daab7";
		break;
	case 13:
		fundo = "#b69f94";
		break;
	case 14:
		fundo = "#c79471";
		break;
	case 15:
		fundo = "#d3894d";
		break;
	case 16:
		fundo = "#dc7e23";
		break;
	case 17:
		fundo = "#d3894d";
		break;
	case 18:
		fundo = "#e9ab89";
		break;
	case 19:
		fundo = "#deb199";
		break;
	case 20:
		fundo = "#c4bdba";
		break;
	case 21:
		fundo = "#2f4149";
		break;
	case 22:
		fundo = "#1b2327";
		break;
	case 23:
		fundo = "#0e0618";
		break;
	default:
		alert("Não foi possivel encontrar uma hora!");
		break;
}

try{
    document.getElementById("cabecalho").style.background = fundo;
}catch{
	alert("Não foi possivel trocar a cor da div!");
}