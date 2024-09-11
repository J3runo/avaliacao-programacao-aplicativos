import leia from "readline-sync";
import Biblioteca from './Biblioteca'; 

var biblioteca = new Biblioteca();

var opcao: number = 0;

do {
    console.log("----------MENU-------------");
    opcao = leia.keyInSelect(
        ["ADICIONAR LIVRO", "REMOVER LIVRO", "BUSCAR LIVRO", "MOSTRAR DETALHES", "SAIR"]);

    switch (opcao) {
        case 0:
            console.log("----------ADICIONANDO LIVRO-----------");
            biblioteca.addLivro();
            break;
        case 1:
            console.log("------REMOVER LIVRO---------");
            biblioteca.removerLivro();
            break;
        case 2:
            console.log("------BUSCAR LIVRO---------");
            biblioteca.buscarLivro();
            break;
        case 3:
            console.log("------MOSTRAR DETALHES---------");
            biblioteca.mostrarDetalhes();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} while (opcao !== 4);
