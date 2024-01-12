//array vagas
const vagas = []

function listarVagas(){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        //1.nome,quantida de candidatos
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " ("+vaga.candidatos.length +" candidatos) \n"
        return textoFinal
    }, "")
    alert(vagasEmTexto)
}

function novaVaga(){
    const nome = prompt("Informe um nome para a vaga: ")
    const descricao = prompt("Informe uma descrição para a vaga: ")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga: ")
    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações? \n"+
        "nome"+ nome + "\nDescrição:"+descricao+"\nData Limite: "+ dataLimite
    )
    if(!confirmacao){
        const novaVaga = {nome, descrição, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga Criada!")
    }
}

function exibirVaga(){
    const indice = prompt("Informe o índice da vaga que quer exibir: ")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + "\n - " +candidato
    },"")
    alert(
        "Vaga nº " + indice +
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos:" + candidatosEmTexto
      )
}
