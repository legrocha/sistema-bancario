import { Cliente } from "./Cliente.js";
import { Transacao } from "./Transacao.js";
import { PixRegistry } from "./PixRegistry.js";

export abstract class Conta {
  private saldo: number = 0;
  protected historico: Transacao[] = [];

  constructor(
    public readonly numero: string,
    public readonly cliente: Cliente
  ) {}

  getSaldo(): number {
    return this.saldo;
  }

  protected alterarSaldo(valor: number) {
    this.saldo += valor;
  }

  depositar(valor: number) {
    if (valor <= 0) throw new Error('Valor inválido');

    this.alterarSaldo(valor);

    this.historico.push(
      new Transacao({
        id: crypto.randomUUID(),
        tipo: 'DEPOSITO',
        valor,
        data: new Date(),
      })
    );
  }

  sacar(valor: number) {
    if (valor <= 0) throw new Error('Valor inválido');
    if (!this.podeSacar(valor)) throw new Error('Saldo insuficiente');

    this.alterarSaldo(-valor);

    this.historico.push(
      new Transacao({
        id: crypto.randomUUID(),
        tipo: 'SAQUE',
        valor,
        data: new Date(),
      })
    );
  }

  transferir(valor: number, contaDestino: Conta) {
    if (valor <= 0) throw new Error('Valor inválido');

    // atomicidade simples
    if (!this.podeSacar(valor)) throw new Error('Saldo insuficiente');

    const [debito, credito] = Transacao.criarTransferencia(valor);

    this.alterarSaldo(-valor);
    contaDestino.alterarSaldo(valor);

    this.historico.push(debito);
    contaDestino.historico.push(credito);
  }

  transferirPorPix(valor: number, chave: string, contas: Conta[]) {
    const clienteDestino = PixRegistry.buscar(chave);
    if (!clienteDestino) throw new Error('Chave PIX não encontrada');

    const contaDestino = contas.find(c => c.cliente === clienteDestino);
    if (!contaDestino) throw new Error('Conta destino não encontrada');

    this.transferir(valor, contaDestino);
  }

  protected abstract podeSacar(valor: number): boolean;

  getExtrato() {
    return [...this.historico];
  }

  toJSON() {
    return {
      numero: this.numero,
      saldo: this.saldo,
      cliente: this.cliente.toJSON(),
      extrato: this.historico.map(t => t.toJSON()),
    };
  }
}