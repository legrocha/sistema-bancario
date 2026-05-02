export type TipoTransacao =
  | 'DEPOSITO'
  | 'SAQUE'
  | 'TRANSFERENCIA_DEBITO'
  | 'TRANSFERENCIA_CREDITO';

export interface TransacaoProps {
  id: string;
  tipo: TipoTransacao;
  valor: number;
  data: Date;
  descricao?: string;
}