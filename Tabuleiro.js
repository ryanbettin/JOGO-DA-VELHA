"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabuleiro = void 0;
class Tabuleiro {
    constructor() {
        this.celulas = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.limparTabuleiro();
    }
    limparTabuleiro() {
        this.celulas = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
    }
    imprimirTabuleiro() {
        for (let linha of this.celulas) {
            console.log(linha.join(' | '));
            console.log('---------');
        }
    }
    marcarCelula(linha, coluna, simbolo) {
        if (this.celulas[linha][coluna] === ' ') {
            this.celulas[linha][coluna] = simbolo;
            return true;
        }
        return false;
    }
    verificarVencedor(simbolo) {
        // Verificar linhas
        for (let linha = 0; linha < 3; linha++) {
            if (this.celulas[linha][0] === simbolo && this.celulas[linha][1] === simbolo && this.celulas[linha][2] === simbolo) {
                return true;
            }
        }
        // Verificar colunas
        for (let coluna = 0; coluna < 3; coluna++) {
            if (this.celulas[0][coluna] === simbolo && this.celulas[1][coluna] === simbolo && this.celulas[2][coluna] === simbolo) {
                return true;
            }
        }
        // Verificar diagonais
        if (this.celulas[0][0] === simbolo && this.celulas[1][1] === simbolo && this.celulas[2][2] === simbolo) {
            return true;
        }
        if (this.celulas[0][2] === simbolo && this.celulas[1][1] === simbolo && this.celulas[2][0] === simbolo) {
            return true;
        }
        return false;
    }
    verificarEmpate() {
        for (let linha = 0; linha < 3; linha++) {
            for (let coluna = 0; coluna < 3; coluna++) {
                if (this.celulas[linha][coluna] === ' ') {
                    return false; // Ainda há jogadas possíveis
                }
            }
        }
        // Se todas as células estão ocupadas e não há vencedor, é empate
        return !this.verificarVencedor('X') && !this.verificarVencedor('O');
    }
}
exports.Tabuleiro = Tabuleiro;
