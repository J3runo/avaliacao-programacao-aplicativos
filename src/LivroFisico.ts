import Livro from './Livro';

export default class LivroFisico extends Livro {
    
    constructor(
        titulo: string,
        autor: string,
        isbn: string,
        quantidadePaginas: number,
       
        ) {
            super(isbn, titulo, autor);
            this.quantidadePaginas = quantidadePaginas;
            
        }
        private quantidadePaginas: number;

    
    atualizarQuantidade(novaQuantidade: number): void {
        if (novaQuantidade < 0) {
            console.log('Quantidade não pode ser negativa.');
        } else {
            this.quantidadePaginas = novaQuantidade;
        }
    }

    toString(): string {
        return `${super.toString()}, Quantidade: ${this.quantidadePaginas}`;
    }
}
