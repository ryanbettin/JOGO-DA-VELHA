import { Jogador } from './Jogador';
import { Tabuleiro } from './Tabuleiro';
import * as readline from 'readline';

class JogoDaVelha {
    private tabuleiro: Tabuleiro;
    private jogador1: Jogador;
    private jogador2: Jogador;
    private turnoJogador1: boolean;
    private rl: readline.Interface;

    constructor() {
        this.tabuleiro = new Tabuleiro();
        this.jogador1 = new Jogador('X');
        this.jogador2 = new Jogador('O');
        this.turnoJogador1 = true;
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    public iniciarJogo(): void {
        this.tabuleiro.limparTabuleiro();
        console.log('Bem-vindo ao Jogo da Velha!');
        console.log('Instruções: Insira a linha e a coluna para fazer sua jogada (ex: 1 2).');
        this.loopJogo();
    }

    private loopJogo(): void {
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
            } else if (this.tabuleiro.verificarEmpate()) {
                this.tabuleiro.imprimirTabuleiro(); // Imprime o tabuleiro antes do anúncio do empate
                console.log("O jogo terminou em empate!");
                this.finalizarJogo();
            } else {
                this.turnoJogador1 = !this.turnoJogador1;
                this.loopJogo();
            }
        });
    }

    private finalizarJogo(): void {
        this.rl.question('Jogar novamente? (s/n): ', resposta => {
            if (resposta.trim().toLowerCase() === 's') {
                this.iniciarJogo();
            } else {
                console.log('Obrigado por jogar!');
                this.rl.close();
            }
        });
    }
}

const jogo = new JogoDaVelha();
jogo.iniciarJogo();
