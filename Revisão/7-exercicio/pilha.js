const baralho = []
let opcao = ""

do {
    opcao = prompt(
        "Cartas no baralho: " + baralho.length +
        "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
    )
    switch (opcao) {
        case '1':
            const novaCarta = prompt("Qual é a carta?")
            baralho.push(novaCarta)
            break
        case '2':
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada){
                alert("Não tem nenhuma carta no baralho")
            }else{
                alert('Você puxou um(a)'+ cartaPuxada)
            }
        case '3':
            alert("saindo")
            break
        default:
            alert("opçao inválida")
            break
    }
} while (opcao !== "3");
