function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += `\n<div>Você deve falar um número</div>`
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `\n<div>Valor inválido você deve falar um número entre ${menorValor} e ${maiorValor}.</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns!! Você acertou o número secreto</h2>
            <h3>O número secreto era: ${numeroSecreto}.</h3>
            <button id="btn-jogarDeNovo">Jogar novamente</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `\n<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    } else {
        elementoChute.innerHTML += `\n<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    if (numero < menorValor || numero > maiorValor) {
        return true
    } else {
        return false
    }
}

document.body.addEventListener('click', (e) => {
    if (e.target.id == 'btn-jogarDeNovo') {
        window.location.reload()
    }
})