import type { TipoTransacao, TransacaoProps } from './types.js';

export class Transacao {
  public readonly id: string;
  public readonly tipo: TipoTransacao;
  public readonly valor: number;
  public readonly data: Date;
  public readonly descricao?: string | undefined;

  constructor(props: TransacaoProps) {
    this.id = props.id;
    this.tipo = props.tipo;
    this.valor = props.valor;
    this.data = props.data;
    this.descricao = props.descricao;
  }

  static criarTransferencia(valor: number): [Transacao, Transacao] {
    const agora = new Date();

    const debito = new Transacao({
      id: crypto.randomUUID(),
      tipo: 'TRANSFERENCIA_DEBITO',
      valor,
      data: agora,
    });

    const credito = new Transacao({
      id: crypto.randomUUID(),
      tipo: 'TRANSFERENCIA_CREDITO',
      valor,
      data: agora,
    });

    return [debito, credito];
  }

  toJSON() {
    return {
      id: this.id,
      tipo: this.tipo,
      valor: this.valor,
      data: this.data,
      descricao: this.descricao,
    };
  }
}


