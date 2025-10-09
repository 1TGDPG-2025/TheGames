// usando o console
console.log('Usando Javascript');
console.log('Outra mensagem');

//variáveis não tem tipo
//para criar variáveis devemos usar as palavras reservadas: let e conts
const heroi = 'Thor';
let forca = 95;
let velocidade = 78;
let vilao = false;

console.log(heroi);
console.log(forca);
console.log(heroi, forca, velocidade, vilao);


// const - não permite que o valor atribuído seja alterado

forca = 60;
console.log(heroi, forca, velocidade, vilao);
// heroi = 'Batman'; não pode pois é uma constante

// criando um vetor
const herois = ['Batman', 'Kratos', 'Aquaman', 'Spiderman', 'Mulher Maravilha', 'Chapolin'];

console.log(herois);
console.log(herois[3]);
console.log(herois[5]);
console.log(herois[500]);

// objeto para montar um conjunto de herois

const objetoHeroi = {
    nome: 'Superman',
    forca: 99,
    velocidade: 99,
    inteligencia: 90,
    voar: true
}

// exibe o objeto completo
console.log(objetoHeroi);
console.table(objetoHeroi)
console.log(objetoHeroi.nome);
console.log(objetoHeroi.voar);

// pegar no documento o elemento html que quero colocar os dados do heroi
// para pegar o elemento html, usaremos o id 
document.getElementById('nomeHeroi').textContent = `Heroi: ${objetoHeroi.nome}`;

document.getElementById('forcaHeroi').textContent = `Força: ${objetoHeroi.forca}`;

document.getElementById('velocidadeHeroi').textContent = 
                `Velocidade: ${objetoHeroi.velocidade}`;

document.getElementById('inteligenciaHeroi').textContent = 
                `Inteligência: ${objetoHeroi.inteligencia}`;

document.getElementById('voarHeroi').textContent = `Ele voa: ${objetoHeroi.voar}`;




