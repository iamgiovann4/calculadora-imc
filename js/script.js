function dados() {
    const nomePerson = document.getElementById('nome').value;
    const alturaPerson = document.getElementById('altura').value;
    const pesoPerson = document.getElementById('peso').value;

    const imc = pesoPerson / (alturaPerson * alturaPerson);

    if (imc < 16) {
        document.getElementById('resultado').value = nomePerson + ', seu IMC é ' + Math.trunc(imc) + '.\n\nVocê está muito abaixo do peso!!!';
    } else if (imc <= 18.5) {
        document.getElementById('resultado').value = nomePerson + ', seu IMC é ' + Math.trunc(imc) + '.\n\nVocê está abaixo do peso!!!';
    } else if (imc <= 25) {
        document.getElementById('resultado').value = nomePerson + ', seu IMC é ' + Math.trunc(imc) + '.\n\nVocê está saudável!!!';
    } else if (imc <= 30) {
        document.getElementById('resultado').value = nomePerson + ', seu IMC é ' + Math.trunc(imc) + '.\n\nVocê está acima do peso!!!';
    } else if (imc <= 35) {
        document.getElementById('resultado').value = nomePerson + ', seu IMC é ' + Math.trunc(imc) + '.\n\nVocê está obeso grau I!!!';
    } else if (imc <= 40) {
        document.getElementById('resultado').value = nomePerson + ', seu IMC é ' + Math.trunc(imc) + '.\n\nVocê está obeso grau II (severa)!!!';
    } else if (imc >= 40) {
        document.getElementById('resultado').value = nomePerson + ' seu IMC é ' + Math.trunc(imc) + '.\n\nVocê está obeso grau II (severa)!!!';
    } else {
        document.getElementById('resultado').value = '';
    }

    console.log(Math.trunc(imc));
}