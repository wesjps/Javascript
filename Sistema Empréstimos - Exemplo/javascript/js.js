let valorEmprestimo;
let taxaDeJuros;
let numMeses;
const listaClientes = [];

function cadastrarCliente(nomeCliente,sobrenomeCliente,idadeCliente){
	cliente = {
        nomeCliente : prompt("Digite seu nome: "),
        sobrenomeCliente : prompt("Digite seu sobrenome: "),
        idadeCliente : parseInt(prompt("Digite sua idade: ")),
    	taxaDeJuros : definirTaxa(idadeCliente),

        adicionarCliente : function(){
            confirmacao = prompt("Confirma adição do cliente?");
            if(confirmacao === "sim"){
            listaClientes.push(cliente);
            }else{
                console.log("Cliente não cadastrado. Tchau!!");
            }
        }

        }
    }

        
        



function excluirCliente(indiceCliente){
    indiceCliente = prompt("Digite o número do cliente a ser excluído: ");
    listaClientes.splice(indiceCliente,1);
    console.log("Cliente excluido com sucesso");
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


function editarCliente(indiceCliente){

    indiceCliente = parseInt(prompt("Digite o número do cliente: "));
        confirmacao = prompt("Alterar Nome?");
                if(confirmacao === "sim"){
                   for (x of listaClientes[indiceCliente]) {cliente.nomeCliente = prompt("Digite o nome: ");}
                }
                confirmacao = prompt("Alterar sobrenome?");
                if(confirmacao === "sim"){
                    this.cliente.sobrenomeCliente = prompt("Digite o sobrenome: ");
                }
                confirmacao = prompt("Alterar idade?");
                if(confirmacao === "sim"){
                    this.cliente.idadeCliente = prompt("Digite a idade: ");
                }
            
        }
    
    

function listarClientes(){
    
        console.table(listaClientes);
    
}

let confirmacao = prompt ("Deseja cadastrar?");
while (confirmacao === "sim"){
    cadastrarCliente();
    cliente.adicionarCliente();
    confirmacao = prompt ("Cadastrar outro cliente?");
}

let deNovo = prompt ("Exibir clientes?");
if (deNovo === "sim"){
    listarClientes();
}
editarCliente();
excluirCliente();
listarClientes();
