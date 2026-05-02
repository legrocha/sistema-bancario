import { PixRegistry } from './PixRegistry.js';

export class Cliente {
  private chavesPix: Set<string> = new Set();

  constructor(
    public readonly id: string,
    public nome: string,
    private documento: string // sensível
  ) {}

  adicionarChavePix(chave: string) {
    this.chavesPix.add(chave);
    PixRegistry.registrar(chave, this);
  }

  removerChavePix(chave: string) {
    this.chavesPix.delete(chave);
    PixRegistry.remover(chave);
  }

  getChavesPix() {
    return [...this.chavesPix];
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      chavesPix: this.getChavesPix(),
      // documento NÃO exposto
    };
  }
}
