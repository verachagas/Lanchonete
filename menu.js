

let opcao = Number(prompt(`
    Escolha uma opção 
    ==========================
    [1] Salgado
    [2] Bebidas
    [3] Lanches
    [4] Sobremesas
    [5] sair
    ==========================

    `))
switch (opcao) {
    case 1:

        let sacolaSalgado = Number(prompt(`Qual o salgado deseja comprar
        Escolha uma opção 
        ==========================
        [1] Esfiha
        [2] Empada
        [3] Hamburguer
        [4] Coxinha
        [5] sair
        ==========================`))
        switch (sacolaSalgado) {

            case 1:
                let unidadeCoxinha = Number(prompt("Quntas coxinha você deseja comprar?"))
                let totalCompra = unidadeCoxinha * 5
                alert
                    (`${unidadeCoxinha} Unid
    Total =${totalCompra}`)
                break;
                
            case 2:
                break;

        }

    case 2:


        let sacolaBebida = Number(prompt(`Qual a bebida deseja comprar
    Escolha uma opção 
    ==========================
    [1] Refrigerante
    [2] Água
    [3] Suco
    [4] Vitamina
    [5] sair
    ==========================`))

        break;

    case 3:


        let sacolaLanche = Number(prompt(`Qual o lanche deseja comprar
    Escolha uma opção 
    ==========================
    [1] Cachorro Quente
    [2] Beirute
    [3] Hamburguer
    [4] X-Salada
    [5] sair
    ==========================
    `))
        break;

    case 4:

        let sacolaSobremesa = Number(prompt(`Qual a sobremesa deseja comprar
    Escolha uma opção 
    ==========================
    [1] Mousse 
    [2] Torta Holandesa
    [3] Palha Italiana
    [4] Bomba de Chocolate
    [5] sair
    ==========================`))
        break;

    case 5:
        alert("Sistema finalizado")
        break;

    default:
        alert("Não existe essa opção!")
        break;

}