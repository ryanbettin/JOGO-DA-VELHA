export class Jogador {
    private simbolo: string;

    constructor(simbolo: string) {
        this.simbolo = simbolo;
    }

    public getSimbolo(): string {
        return this.simbolo;
    }
}