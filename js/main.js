


function validaIdade(idade){
  
  if(idade>=18){
    return true;
  }else{
    return false;
  }
  
}

var idade = prompt("Qual sua idade");

console.log(validaIdade(idade));


/*
function soma(n1,n2){
    return n1+n2;
}

console.log(soma(7,3));


function setReplace(frase,trocar,novo){

    return frase.replace(trocar,novo);
}


console.log(setReplace('Vai Argentina','Vai','Perdeu'));




var d = new Date();

alert(d.getMonth()+1);


var count;

    for(count=0;count<=5;count++){
        console.log(count);
    }


var count  = 0;

    while(count < 5){
        console.log(count);
        count = count+1;
    }


var idade = prompt('Qual a sua idade?');

    if(idade >= 18){
        alert('maior de idade');
    }else{
        alert('menor de idade !');
    }




var frutas = [
    {
    nome:"Banana",
    cor:"amarela"
    },
    {
    nome:"Maçã",
    cor:"vermelha"  
    },
    {
    nome:"Cajarana",
    cor:"amarela"  
    }
];

console.log(frutas[1].nome);


var lista = ['pêra','maçã','goiaba'];

lista.push('uva');

//lista.pop();

console.log(lista.toString());

console.log(lista.join('|'));




var nome = 'Victor Gabriel';
var idade = 19;
var idade2 = 20;

//alert(`Bem Vindo ${nome} você possue ${idade} anos!`);

//alert(idade+idade2);

console.log(idade+idade2);
//substitui e deixa a string maiuscula.
console.log(nome.replace('Gabriel','Martins').toUpperCase());
*/