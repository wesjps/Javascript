const inicio = document.querySelector("#topic1");
const topic2 = document.querySelector("#topic2");
const topic3 = document.querySelector("#topic3");
const topic4 = document.querySelector("#topic4");
const topic5 = document.querySelector("#topic5");
const topic6 = document.querySelector("#topic6");
const topic7 = document.querySelector("#topic7");
const topic8 = document.querySelector("#topic8");
const topic9 = document.querySelector("#topic9");
const imgCentral = document.querySelector("#imgCentral");
const titLateral = document.querySelector("#titLateral");
const li1 = document.querySelector("#li1");
const li2 = document.querySelector("#li2");
const li3 = document.querySelector("#li3");
const passos = document.querySelector("#passos");
const accordion = document.querySelector("#blackAccord");



inicio.addEventListener('click', () => {
    imgCentral.src = "../images/trocaPneuFurado.jpg";
    titLateral.innerHTML = topic1.innerHTML;
    li1.innerHTML = "Certifique-se que o carro está estacionado em um local seguro e estável";
    li2.innerHTML = "Certifique-se que você não ficará próximo ao tráfego ao trocar o pneu";
    li3.innerHTML = "Sinalize bem o local utilizando o Triângulo de Sinalização e não se esqueça de ligar o pisca-alerta";
    accordion.style.display = "";
});

topic2.addEventListener('click', () => {
    imgCentral.src = "../images/freio-de-mao.jpg";
    titLateral.innerHTML = topic2.innerHTML;
    li1.innerHTML = "Puxe o freio de mão";
    li2.innerHTML = "Coloque o câmbio em modo P (caso seu carro seja automático) ou em primeira marcha (caso seja manual)";
    li3.innerHTML = "Coloque uma pedra na frente das rodas dianteiras e traseiras, para evitar que o carro se movimente";
    accordion.style.display = "";
});

topic3.addEventListener('click', () => {
    imgCentral.src = "../images/macaco.jpg";
    titLateral.innerHTML = topic3.innerHTML;
    li1.innerHTML = "Pegue o macaco e coloque-o sob a lataria do carro, ao lado do pneu furado";
    li2.innerHTML = "Lembre-se de encaixá-lo na canaleta, uma parte metálica projetada justamente para recebê-lo";
    li3.innerHTML = "Caso não encontre o local correto, basta ler o manual de instruções";
    accordion.style.display = "";
});

topic4.addEventListener('click', () => {
    imgCentral.src = "../images/calota.jpg";
    titLateral.innerHTML = topic4.innerHTML;
    li1.innerHTML = "Em sentido anti-horário, gire a chave de roda e deixe os parafusos soltos, sem desprendê-los totalmente";
    li2.innerHTML = "Ao deixar ao pneu em contato com o chão a retirada da calota será mais fácil, já que somente os parafusos serão girados e não a roda";
    li3.innerHTML = "Não deixe para afrouxar os parafusos com o carro já levantado";
    accordion.style.display = "";
});

topic5.addEventListener('click', () => {
    imgCentral.src = "../images/carro-levantado.jpg";
    titLateral.innerHTML = topic5.innerHTML;
    li1.innerHTML = "Com o auxílio do macaco, levante o veículo, para que o pneu murcho seja retirado e o estepe encaixado";
    li2.innerHTML = "Conforme for suspendendo o carro, certifique-se de que ele esteja estável. Do contrário, desça o macaco e corrija o problema";
    li3.innerHTML = "Faça esta parte com calma, para evitar qualquer acidente";
    accordion.style.display = "";

});

topic6.addEventListener('click', () => {
    imgCentral.src = "../images/rodaretirada.jpg";
    titLateral.innerHTML = topic6.innerHTML;
    li1.innerHTML = "Ainda no sentido anti-horário, continue a girar os parafusos, até que estejam soltos o suficiente para serem removidos";
    li2.innerHTML = "Remova o pneu furado e coloque-o sob o veículo (caso o macaco ceda, ele servirá como um amortecedor para o veículo)";
    li3.innerHTML = "Pegue o estepe para substituição";
    accordion.style.display = "";

});

topic7.addEventListener('click', () => {
    imgCentral.src = "../images/estepe1.jpeg";
    titLateral.innerHTML = topic7.innerHTML;
    li1.innerHTML = "Com o estepe em mãos, encaixe-o no eixo, deixando as cavidades dos parafusos bem alinhadas";
    li2.innerHTML = "Lembre-se de que a válvula da câmara de ar deve estar virada para fora, nunca em direção ao veículo";
    li3.innerHTML = "Atente-se bem aos encaixes dos vãos por onde entrarão os parafusos";
    accordion.style.display = "";
});

topic8.addEventListener('click', () => {
    imgCentral.src = "../images/estepe.jpg";
    titLateral.innerHTML = topic8.innerHTML;
    li1.innerHTML = "Coloque os parafusos em seus devidos lugares e, com a chave de roda, dê uma volta em cada um";
    li2.innerHTML = "Em seguida, aperte todos até o fim";
    li3.innerHTML = "Quando o carro estiver novamente no chão, aperte os parafusos uma vez mais";
    accordion.style.display = "";
});

topic9.addEventListener('click', () => {
    imgCentral.src = "../images/trocafim.jpg";
    titLateral.innerHTML = topic9.innerHTML;
    li1.innerHTML = "Após fixar todos os parafusos, baixe o macaco, retire-o e coloque a calota no lugar";
    li2.innerHTML = "Guarde o pneu furado no porta-malas";
    li3.innerHTML = "Lembre-se de verificar o estepe regularmente para garantir que sempre esteja em condições de uso";
    accordion.style.display = "";

});

