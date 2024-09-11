import Livro from './Livro';


export default class Ebook extends Livro {
    private _tamanhoArquivo: number; 

    constructor(
        isbn: string,
        titulo: string,
        autor: string,
        tamanhoArquivo: number
    ) {
        super(isbn, titulo, autor);
        this._tamanhoArquivo = tamanhoArquivo;
    }

   
    get tamanhoArquivo(): number {
        return this._tamanhoArquivo;
    }

    
    set tamanhoArquivo(tamanho: number) {
        if (tamanho <= 0) {
            console.log("O tamanho do arquivo deve ser maior que zero.");
        } else {
            this._tamanhoArquivo = tamanho;
        }
    }

    
    atualizarTamanho(tamanho: number): void {
        this.tamanhoArquivo = tamanho; 
    }


    
}
