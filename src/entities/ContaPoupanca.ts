import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  protected podeSacar(valor: number): boolean {
    return this.getSaldo() >= valor;
  }

  renderJuros(taxa: number) {
    if (taxa <= 0) throw new Error('Taxa inválida');

    const juros = this.getSaldo() * taxa;
    this.depositar(juros);
  }
}