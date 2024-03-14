// Classe Tabuleiro representa o tabuleiro do jogo da velha.
export class Tabuleiro {
    
    private celulas: string[][] = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    
    constructor() {
        
        this.limparTabuleiro();
    }

    
    public limparTabuleiro(): void {
        this.celulas = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }

    
    public imprimirTabuleiro(): void {
        for (let linha of this.celulas) {
            console.log(linha.join(' | ')); 
            console.log('---------');       
        }
    }


    public marcarCelula(linha: number, coluna: number, simbolo: string): boolean {
        if (this.celulas[linha][coluna] === ' ') {
            this.celulas[linha][coluna] = simbolo;
            return true;
        }
        return false;
    }

    
    public verificarVencedor(simbolo: string): boolean {
        
        
        for (let linha = 0; linha < 3; linha++) {
            if (this.celulas[linha][0] === simbolo && this.celulas[linha][1] === simbolo && this.celulas[linha][2] === simbolo) {
                return true;
            }
        }
    
        
        
        for (let coluna = 0; coluna < 3; coluna++) {
            if (this.celulas[0][coluna] === simbolo && this.celulas[1][coluna] === simbolo && this.celulas[2][coluna] === simbolo) {
                return true;
            }
        }
    
        
        
        if (this.celulas[0][0] === simbolo && this.celulas[1][1] === simbolo && this.celulas[2][2] === simbolo) {
            return true;
        }
        if (this.celulas[0][2] === simbolo && this.celulas[1][1] === simbolo && this.celulas[2][0] === simbolo) {
            return true;
        }
    
        return false; 
        
    }

   
    
    public verificarEmpate(): boolean {
        for (let linha = 0; linha < 3; linha++) {
            for (let coluna = 0; coluna < 3; coluna++) {
                if (this.celulas[linha][coluna] === ' ') {
                    return false;
                    
                }
            }
        }
    
        
        return !this.verificarVencedor('X') && !this.verificarVencedor('O');
    }
}
