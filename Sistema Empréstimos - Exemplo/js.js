let taxaDeJuros;
let numMeses;
const listaClientes = [];
const botaoLista = document.querySelector("#gerarLista");
let listaDeClientes = document.querySelector("#clienteListado");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
let nomeDigitado = document.querySelector("#nomeCl");
let sobrenomeDigitado = document.querySelector("#sobrenomeCl");
let idadeDigitada = document.querySelector("#idadeCl");
const valorEmprestimo = document.querySelector("#valorEmp");
const prazoEmp = document.querySelector("#prazoEmp");
const idCliente = document.querySelector("#idEditarCliente");
const botaoSimular = document.querySelector("#botaoSimular");
const botaoConfEdit = document.querySelector("#botaoConfEdit");
const nomeEditarCliente = document.querySelector("#nomeEditarCliente");
const sobrenomeEditarCliente = document.querySelector("#sobrenomeEditarCliente");
const idadeEditarCliente = document.querySelector("#idadeEditarCliente");
const botaoLog = document.querySelector("#botaoSair");

const tabelaClientes = document.querySelector("#tabelaClientes");

if (botaoLista !== null) {
    botaoLista.addEventListener('click', () => listarClientes());
}
if (botaoCadastrar !== null) {
    botaoCadastrar.addEventListener('click', () => {

        if (document.querySelector('#nomeCl').value !== "" && document.querySelector('#sobrenomeCl').value !== "" && document.querySelector('#idadeCl').value !== "") {

            cadastrarCliente();
            document.querySelector('#nomeCl').value = "";
            document.querySelector('#sobrenomeCl').value = "";
            document.querySelector('#idadeCl').value = "";



        }
    });
}
if (botaoSimular !== null) {
    botaoSimular.addEventListener('click', () => {

        if (document.querySelector('#valorEmp').value !== "" && document.querySelector('#prazoEmp').value !== "" && document.querySelector('#idadeCl').value !== "") {
            simulacaoEmprestimo();
            document.querySelector('#valorEmp').value = "";
            document.querySelector('#prazoEmp').value = "";
            document.querySelector('#idadeCl').value = "";
        }
    });
}
if (botaoConfEdit !== null) {
    botaoConfEdit.addEventListener('click', () => {
        editarCliente();
        // adicionar função limpar campos
    });
}



function cadastrarCliente(nomeCliente, sobrenomeCliente, idadeCliente) {
    cliente = {
        nomeCliente: nomeDigitado.value,
        sobrenomeCliente: sobrenomeDigitado.value,
        idadeCliente: idadeDigitada.value,
    }
    listaClientes.push(cliente);
    listarClientes();
}

function simulacaoEmprestimo(valorEmprestimoCliente, numMesesCliente, idadeCliente) {
    valorEmprestimoCliente = parseInt(valorEmprestimo.value);
    numMesesCliente = prazoEmp.value;
    idadeCliente = idadeDigitada.value;
    txJur = definirTaxa(idadeCliente);

    let prest = (valorEmprestimoCliente * (txJur / (1 - ((1 + txJur) ** (numMesesCliente * -1)))));

    let tableRef = document.getElementById('simTable').getElementsByTagName('tbody')[0];
    let newRow = tableRef.insertRow();

    let newCell = newRow.insertCell(0);
    let newText = document.createTextNode(`${(valorEmprestimoCliente).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(1);
    newText = document.createTextNode(`${(prest).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(2);
    newText = document.createTextNode(`${(numMesesCliente)} meses`);
    newCell.appendChild(newText);

    newCell = newRow.insertCell(3);
    newText = document.createTextNode(`${(txJur * 100).toFixed(1)}% ao mês`);
    newCell.appendChild(newText);

}


function definirTaxa(idadeCliente) {
    if (idadeCliente >= 18 && idadeCliente <= 25) {
        return 0.009;
    } else if (idadeCliente >= 26 && idadeCliente <= 35) {
        return 0.008;
    } else if (idadeCliente >= 36 && idadeCliente <= 50) {
        return 0.007;
    } else {
        return 0.006;
    }
}



function listarClientes() {

    console.table(listaClientes);

    let tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

    // Insere uma nova linha
    let newRow = tableRef.insertRow();
    newRow.setAttribute('id',listaClientes.indexOf(cliente))

    // Insere a primeira célula
    let newCell = newRow.insertCell(0);

    // Insere o índice na célula em questão
    let newText = document.createTextNode(`${listaClientes.indexOf(cliente)}`);
    newCell.appendChild(newText);

    // Insere o nome na célula
    newCell = newRow.insertCell(1);
    newText = document.createTextNode(`${cliente.nomeCliente}`);
    newCell.appendChild(newText);

    // Insere o sobrenome na célula
    newCell = newRow.insertCell(2);
    newText = document.createTextNode(`${cliente.sobrenomeCliente}`);
    newCell.appendChild(newText);

    // Insere a idade na célula
    newCell = newRow.insertCell(3);
    newText = document.createTextNode(`${cliente.idadeCliente}`);
    newCell.appendChild(newText);

    // Crie e insere o botão EXCLUIR
    newCell = newRow.insertCell(4);
    let button2 = document.createElement('button');
    button2.setAttribute('type', 'button');
    button2.setAttribute('onclick', 'excluirCliente(this.parentNode.parentNode.id)')
    button2.appendChild(document.createTextNode('EXCLUIR'));
    newCell.appendChild(button2);

}



function excluirCliente(num) {
    var a = document.getElementById(num)
    a.remove();

}


function login() {
    var content = botaoLog.innerHTML
    if (content == "Sair"){
        botaoLog.innerHTML = "Entrar";
    }else{
        botaoLog.innerHTML = "Sair";
    }
}