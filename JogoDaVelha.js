"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Jogador_1 = require("./Jogador");
const Tabuleiro_1 = require("./Tabuleiro");
const readline = __importStar(require("readline"));
class JogoDaVelha {
    constructor() {
        this.tabuleiro = new Tabuleiro_1.Tabuleiro();
        this.jogador1 = new Jogador_1.Jogador('X');
        this.jogador2 = new Jogador_1.Jogador('O');
        this.turnoJogador1 = true;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciarJogo() {
        this.tabuleiro.limparTabuleiro();
        console.log('Bem-vindo ao Jogo da Velha!');
        console.log('Instruções: Insira a linha e a coluna para fazer sua jogada (ex: 1 2).');
        this.loopJogo();
    }
    loopJogo() {
        this.tabuleiro.imprimirTabuleiro();
        console.log(`Vez do jogador ${this.turnoJogador1 ? this.jogador1.getSimbolo() : this.jogador2.getSimbolo()}`);
        this.rl.question('Escolha uma linha e uma coluna (exemplo: 1 2): ', (entrada) => {
            let [linha, coluna] = entrada.split(' ').map(num => parseInt(num) - 1);
            if (!this.tabuleiro.marcarCelula(linha, coluna, this.turnoJogador1 ? this.jogador1.getSimbolo() : this.jogador2.getSimbolo())) {
                console.log("Jogada inválida ou célula já ocupada. Tente novamente.");
                this.loopJogo();
                return;
            }
            if (this.tabuleiro.verificarVencedor(this.turnoJogador1 ? this.jogador1.getSimbolo() : this.jogador2.getSimbolo())) {
                this.tabuleiro.imprimirTabuleiro(); // Imprime o tabuleiro antes do anúncio do vencedor
                console.log(`Parabéns, jogador ${this.turnoJogador1 ? '1' : '2'} (${this.turnoJogador1 ? this.jogador1.getSimbolo() : this.jogador2.getSimbolo()}) venceu!`);
                this.finalizarJogo();
            }
            else if (this.tabuleiro.verificarEmpate()) {
                this.tabuleiro.imprimirTabuleiro(); // Imprime o tabuleiro antes do anúncio do empate
                console.log("O jogo terminou em empate!");
                this.finalizarJogo();
            }
            else {
                this.turnoJogador1 = !this.turnoJogador1;
                this.loopJogo();
            }
        });
    }
    finalizarJogo() {
        this.rl.question('Jogar novamente? (s/n): ', resposta => {
            if (resposta.trim().toLowerCase() === 's') {
                this.iniciarJogo();
            }
            else {
                console.log('Obrigado por jogar!');
                this.rl.close();
            }
        });
    }
}
const jogo = new JogoDaVelha();
jogo.iniciarJogo();
