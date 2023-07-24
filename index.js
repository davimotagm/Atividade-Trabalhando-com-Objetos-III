let pessoa = {
    nome: "",
    anoDeNascimento: 0,
    cidade: ""
}

function dandoValorAPessoa(nomeDaPessoa, anoNascimentoDaPessoa, cidadeDaPessoa) {
    pessoa.nome = nomeDaPessoa,
        pessoa.anoDeNascimento = anoNascimentoDaPessoa,
        pessoa.cidade = cidadeDaPessoa

    return pessoa;
}

function apresentar(pessoa) {
    let idade = (2023 - pessoa.anoDeNascimento)
    return `${pessoa.nome} possui ${idade} anos de idade e atualmente está morando em ${pessoa.cidade}.`
}

// const novaPessoa = dandoValorAPessoa("João", 1990, "São Paulo");
// console.log(apresentar(novaPessoa));

let elevador = {
    andarAtual: 0,
    totalDeAndares: 0,
    capacidadeDoElevador: 0,
    ocupacaoAtual: parseInt(0),
};

function entrar(local) {
    if (local.ocupacaoAtual >= local.capacidadeDoElevador) {
        return "Elevador lotado";
    } else {
        local.ocupacaoAtual++
        return `Ocupação atual em: ${local.ocupacaoAtual}`;
    }
}

function sair(local) {
    if (local.ocupacaoAtual > 0) {
        local.ocupacaoAtual--
        return `Ocupação atual em: ${local.ocupacaoAtual}`
    } else {
        return local.ocupacaoAtual
    }
}

function subir(local) {
    if (local.andarAtual >= local.totalDeAndares) {
        return "O elevador já se encontra no último andar"
    } else {
        local.andarAtual++
        return `Estamos no andar: ${local.andarAtual}`
    }
}

function descer(local) {
    if (local.andarAtual > 0) {
        local.andarAtual--
        return `Estamos no andar: ${local.andarAtual}`
    } else {
        return local.andarAtual
    }
}

let televisao = {
    canalAtual: 0,
    volume: 0
};

function aumentarVolume(objeto) {
    let volumeMax = 10;
    if (objeto.volume >= volumeMax) {
        return "Volume no máximo"
    } else {
        objeto.volume++
        return `Volume esta em: ${objeto.volume}`
    }
}

function diminuirVolume(objeto) {
    let volumeMin = 0
    if (objeto.volume <= volumeMin) {
        return "Volume no mínimo"
    } else {
        objeto.volume--
        return `Volume esta em: ${objeto.volume}`
    }
}

function mudarCanalParaCima(objeto) {
    let canalMax = 100;
    if (objeto.canalAtual >= canalMax) {
        return "Este já é o último canal"
    } else {
        objeto.canalAtual++
        return `O canal atual é: ${objeto.canalAtual}`
    }
}

function mudarCanalParaBaixo(objeto) {
    let canalMin = 0;
    if(objeto.canalAtual <= canalMin) {
        return "Este é o primeiro canal"
    } else {
        objeto.canalAtual--
        return `O canal atual é: ${objeto.canalAtual}`
    }
};

function consultarCanal(objeto) {
    return objeto.canalAtual
}

function consultarVolume(objeto) {
    return objeto.volume
}

console.log(consultarCanal(televisao))
console.log(consultarVolume(televisao))