
import { Cliente } from "./Cliente.js";

export class PixRegistry {
  private static mapa = new Map<string, Cliente>();

  static registrar(chave: string, cliente: Cliente) {
    this.mapa.set(chave, cliente);
  }

  static buscar(chave: string): Cliente | undefined {
    return this.mapa.get(chave);
  }

  static remover(chave: string) {
    this.mapa.delete(chave);
  }
}