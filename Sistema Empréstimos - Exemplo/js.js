let taxaDeJuros;
let numMeses;
const listaClientes = [];
const botaoLista = document.querySelector("#gerarLista");
let listaDeClientes = document.querySelector("#clienteListado");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
let nomeDigitado = document.querySelector("#nomeCliente");
let sobrenomeDigitado = document.querySelector("#sobrenomeCliente");
let idadeDigitada = document.querySelector("#idadeCliente");
const valorEmprestimo = document.querySelector("#valorEmp");
const prazoEmp = document.querySelector("#prazoEmp");
const idCliente = document.querySelector("#idCliente");
const botaoSimular = document.querySelector("#botaoSimular");

const tabelaClientes = document.querySelector("#tabelaClientes");


botaoLista.addEventListener('click', () => listarClientes());
botaoCadastrar.addEventListener('click',() =>cadastrarCliente());
botaoSimular.addEventListener('click',() =>simulacaoEmprestimo());

function cadastrarCliente(nomeCliente, sobrenomeCliente, idadeCliente) {
    cliente = {
        nomeCliente: nomeDigitado.value,
        sobrenomeCliente: sobrenomeDigitado.value,
        idadeCliente: idadeDigitada.value,
        taxaDeJuros: definirTaxa(idadeCliente),  
        
    }
    listaClientes.push(cliente);
}

function excluirCliente(indiceCliente) {
    let aux = prompt("Deseja excluir algum cliente?");
    if (aux === "sim") {
        indiceCliente = parseInt(prompt("Digite o número do cliente a ser excluído: "));
        listaClientes.splice(indiceCliente, 1);
        console.log("Cliente excluido com sucesso");
    }
}

function simulacaoEmprestimo(valorEmprestimoCliente, numMesesCliente, txJur) {
    valorEmprestimoCliente = valorEmprestimo.value;
    numMesesCliente = prazoEmp.value;
   // txJur = listaClientes[idCliente.value].taxaDeJuros;
    
    console.log(valorEmprestimoCliente,numMesesCliente);

    /*buscar taxa de juros no cadastro do cliente logado, e calcular o valor a ser pago*/

}


function definirTaxa(idadeCliente) {

    if (idadeCliente >= 18 && idadeCliente <= 25) {
        return 0.09;
    } else if (idadeCliente >= 26 && idadeCliente <= 35) {
        return 0.08;
    } else if (idadeCliente >= 36 && idadeCliente <= 50) {
        return 0.07;
    } else {
        return 0.06;
    }
}


function editarCliente(indiceCliente) {
    let aux = prompt("Deseja editar os dados de algum cliente?");
    if (aux === "sim") {
        indiceCliente = parseInt(prompt("Digite o número do cliente: "));
        confirmacao = prompt("Alterar Nome?");
        if (confirmacao === "sim") {
            listaClientes[indiceCliente].nomeCliente = prompt("Digite o nome: ");
        }
        confirmacao = prompt("Alterar sobrenome?");
        if (confirmacao === "sim") {
            listaClientes[indiceCliente].sobrenomeCliente = prompt("Digite o sobrenome: ");
        }
        confirmacao = prompt("Alterar idade?");
        if (confirmacao === "sim") {
            listaClientes[indiceCliente].idadeCliente = prompt("Digite a idade: ");
        }
    }

}



function listarClientes() {

    console.table(listaClientes);
    let aux = "";
    listaClientes.forEach((cliente) => { aux += `${cliente.nomeCliente} ${cliente.sobrenomeCliente}, ${cliente.idadeCliente} anos. Tx de Juros: ${cliente.taxaDeJuros}` });
    listaClientes.innerHTML = aux;
}




