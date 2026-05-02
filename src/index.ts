
import { Cliente } from "./entities/Cliente.js";
import { ContaCorrente } from "./entities/ContaCorrente.js";
import { ContaPoupanca } from "./entities/ContaPoupanca.js";


function main() {


  // Criando clientes
  
  const cliente1 = new Cliente("c1", "Luis", "123.456.789-00");
  const cliente2 = new Cliente("c2", "Eduardo", "987.654.321-00");


  // Criando contas
  
  const contaLuis = new ContaCorrente("001", cliente1, 500); // limite cheque especial
  const contaEduardo = new ContaPoupanca("002", cliente2);

  const contas = [contaLuis, contaEduardo];


  // Registrando PIX
  
  cliente1.adicionarChavePix("luis@email.com");
  cliente2.adicionarChavePix("eduardo@email.com");


  // Operações básicas
 
  console.log("Depositando 1000 na conta de Luis...");
  contaLuis.depositar(1000);

  console.log("Sacando 200 da conta de Luis...");
  contaLuis.sacar(200);

 
  // Transferência direta
  
  console.log("Transferindo 300 de Luis para Eduardo...");
  contaLuis.transferir(300, contaEduardo);

  
  // Transferência via PIX
  
  console.log("Transferindo 100 via PIX (Luis -> Eduardo)...");
  contaLuis.transferirPorPix(100, "eduardo@email.com", contas);

  
  // Poupança rendendo juros
  
  console.log("Aplicando juros de 5% na conta de Aduardo...");
  contaEduardo.renderJuros(0.05);

 
  // Exibindo saldos
 
  console.log("\n=== SALDOS ===");
  console.log("Luis:", contaLuis.getSaldo());
  console.log("Eduardo:", contaEduardo.getSaldo());

  
  // Extratos
  
  console.log("\n=== EXTRATO LUIS ===");
  console.log(contaLuis.getExtrato());

  console.log("\n=== EXTRATO EDUARDO ===");
  console.log(contaEduardo.getExtrato());

  
  // Serialização segura
  
  console.log("\n=== JSON SEGURO ===");
  console.log(JSON.stringify(contaLuis, null, 2));
  console.log(JSON.stringify(contaEduardo, null, 2));
}

main();