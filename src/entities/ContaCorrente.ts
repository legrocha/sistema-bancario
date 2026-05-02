import { Conta } from "./Conta.js";
import { Cliente } from "./Cliente.js";

export class ContaCorrente extends Conta {
  constructor(
    numero: string,
    cliente: Cliente,
    private limite: number
  ) {
    super(numero, cliente);
  }

  protected podeSacar(valor: number): boolean {
    return this.getSaldo() + this.limite >= valor;
  }
}