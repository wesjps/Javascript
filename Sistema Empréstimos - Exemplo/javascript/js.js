let valorEmprestimo;
let taxaDeJuros;
let numMeses;
const listaClientes = [];

function cadastrarCliente(nomeCliente,sobrenomeCliente,idadeCliente){
	nomeCliente = prompt("Digite seu nome: ");
    sobrenomeCliente = prompt("Digite seu sobrenome: ");
    idadeCliente= parseInt(prompt("Digite sua idade: "));
	taxaDeJuros = definirTaxa(idadeCliente);
    const novoCliente = [];
    novoCliente [0] = nomeCliente;
    novoCliente [1] = sobrenomeCliente;
    novoCliente [2] = idadeCliente;
    novoCliente [3] = taxaDeJuros;
    listaClientes.push(novoCliente);
}

function excluirCliente(indiceCliente){
    /* pegar o índice do cliente que deseja excluir
    indiceCliente = ?? */

    listaClientes.splice(indiceCliente,1);
}

function simulacaoEmprestimo(valorEmprestimoCliente,numMesesCliente){
    valorEmprestimoCliente= prompt("Digite o valor desejado: ");
    valorEmprestimo = valorEmprestimoCliente;
    numMesesCliente = prompt("Em quantos meses deseja pagar? ");
    numMeses = numMesesCliente;

    /*buscar taxa de juros no cadastro do cliente logado, e calcular o valor a ser pago*/

}


function definirTaxa(idadeCliente){

	if(idadeCliente >= 18 && idadeCliente <= 25){
		return 0.09;
	} else if(idadeCliente >= 26 && idadeCliente <= 35){
	   return 0.08;
    } else if(idadeCliente >= 36 && idadeCliente <= 50){
	   return 0.07;
    }else{
	   return 0.06;
    }	  
}


function editarCliente(indiceCliente,nomeCliente,sobrenomeCliente,idadeCliente){

    /* pegar o índice do cliente que deseja editar
    indiceCliente = ?? */

    confirmar = prompt("Editar Nome? ");
    if(confirmar == sim){
            nomeCliente = prompt("Digite o nome do cliente");
            /* listaClientes [indiceCliente[0]]  = nomeCliente*/    
        }
    confirmar = prompt("Editar Sobrenome? ");
        if(confirmar == sim){
            sobrenomeCliente = prompt("Digite o sobrenomenome do cliente");
            /* listaClientes [indiceCliente[1]] = sobrenomeCliente */    
        }
    confirmar = prompt("Editar Idade? ");
        if(confirmar == sim){
            idadeCliente = prompt("Digite a idade do cliente");
            /* listaClientes [indiceCliente[2]] = idadeCliente*/
            taxaDeJuros = definirTaxa(idadeCliente);
            /* listaClientes [indiceCliente[3]] = taxaDeJuros*/
        }
    }

function listarClientes(){
    
        console.table(listaClientes);
    
}

let confirmacao = prompt ("Deseja cadastrar?");
while (confirmacao === "sim"){
    cadastrarCliente();
    confirmacao = prompt ("Deseja cadastrar?");
}

let deNovo = prompt ("Exibir clientes?");
if (deNovo === "sim"){
    listarClientes();
}