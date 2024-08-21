function verifica() {
    let ano = document.getElementById('ano')
    let data = new Date();
    let hoje = data.getFullYear()
    let res = document.getElementById('resultado')
    let resul = document.getElementById('result')
    let conta = (hoje - ano.value)
    let sexo = document.getElementsByName('sexo')
    let genero = '';
    let amo = document.getElementById('amor')

    if (ano.value.length == 0) {
        alert('INVÁLIDO!')
    } else if (ano.value > hoje) {
        alert('INVÁLIDO!')
    } else {
        res.innerHTML=`Você tem ${conta} anos!`
    }
    
    if (sexo[0].checked) {
        genero = 'homem'
    } else if (sexo[1].checked) {
        genero = 'mulher'
    }
    let palavra = genero == 'homem' ? 'um' : 'uma'
    resul.innerHTML=`Você é ${palavra} ${genero}!`
    
    if (genero == 'mulher' && ano.value == 1978) {
        amo.innerHTML='É a minha mãe!'
    } else if (genero == 'homem' && ano.value == 1976) {
        amo.innerHTML='É meu pai!'
    } else if (genero == 'mulher' && ano.value == 2002) {
        amo.innerHTML='É minha irmã (chata)!'
    } else {
        amo.innerHTML='Obrigada por participar!'
    }
}