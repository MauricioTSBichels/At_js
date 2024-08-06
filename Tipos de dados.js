let cidade="São paulo"
let estado="São paulo"
let localização

localização=cidade + ", " + estado
console.log(localização)

let altura=5
let largura=15
let area1,périmetro1,mult1,div1,resto1,hipo1,num1

area1=altura*largura
périmetro1=(altura*2)+(largura*2)
mult1=altura*largura
div1=altura/largura
resto1=altura%largura
num1=(altura*altura)+(largura*largura)
hipo1=num1/num1

console.log(area1,périmetro1,mult1,div1,resto1,hipo1)

let frio=true,quente=false

if (frio==true){
 console.log("Esta frio")    
}
else {
 console.log("Não esta frio")    
}

frio=false

if (frio==true){
 console.log("Esta frio")    
}
else {
 console.log("Não esta frio")    
}

if (frio==false&&quente==true) {
 console.log("Esta quente")    
} else if (frio==true&&quente==false) {
    console.log("Esta frio")    
}

let livro1 = {
    título:"titulo legal",
    autor:"pedrinho",
    anopublicação: 2019
};

livro1.editora= "editora qualquer";

console.log(livro1)

let cores=["vermelho","azul","verde"];

cores.push("amarelo")
cores.pop();

console.log(cores)

let dataAtual = new Date();
let dataNascimento = new Date('1990-08-06');

let idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
let mesAtual = dataAtual.getMonth();
let mesNascimento = dataNascimento.getMonth();

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && dataAtual.getDate() < dataNascimento.getDate())) {
    idade--;
}

console.log("Idade:", idade);

function calculaArea(largura, altura) {
    return largura * altura;
}

let area = calculaArea(5, 10);
console.log("Área do retângulo:", area);

function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacao("Seu Nome");

let aluno = {
    nome: "João",
    idade: 20,
    curso: "Engenharia",
    apresentacao: function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e curso ${this.curso}.`);
    }
};

aluno.apresentacao();

let numeros = [1, 2, 3, 4, 5];

let numerosDobrados = numeros.map(num => num * 2);

let numerosMaioresQueDois = numeros.filter(num => num > 2);

console.log("Números dobrados:", numerosDobrados);
console.log("Números maiores que 2:", numerosMaioresQueDois);