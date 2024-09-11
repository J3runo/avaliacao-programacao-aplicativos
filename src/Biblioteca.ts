import leia from "readline-sync";
import Livro from "./Livro"; 
export default class Biblioteca {
    private livros: Livro[] = [];
    
    addLivro(): void {
        var isbn = leia.question("Digite o ISBN do livro: ");
        var titulo = leia.question("Digite o titulo do livro: ");
        var autor = leia.question("Digite o autor do livro: ");
        
        
        var livro = new Livro(isbn, titulo, autor);
        this.livros.push(livro);
        
        console.log("Livro adicionado com sucesso!!!");
    }
    
    removerLivro(): void {
        var isbn = leia.question("Digite o ISBN do livro a ser removido: ");
        
        var index = this.livros.findIndex(livro => livro.isbn === isbn);
        if (index !== 1) {
            this.livros.splice(index, 1);
            console.log("Livro removido com sucesso!");
        } else {
            console.log("Livro não encontrado.");
        }
    }
    
    buscarLivro(): void {
        var isbn = leia.question("Digite o ISBN do livro a ser buscado: ");
        
        var livro = this.livros.find(livro => livro.isbn === isbn);
        if (livro) {
            console.log("Livro encontrado:", livro.toString());
        } else {
            console.log("Livro não encontrado.");
        }
    }
    
    mostrarDetalhes(): void {
        if (this.livros.length > 0) {
            this.livros.forEach(livro => {
                console.log(livro.toString());
            });
        } else {
            console.log("Nenhum livro disponível na biblioteca.");
        }
    }
}
 

