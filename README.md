Sistema bancário

Descrição - Apresentação de lógica em TypeScript de um sistema bancário com classes como Cliente, Conta e Transação

- Existe a relação de Associação entre Cliente e Conta, pois um cliente pode ter nenhuma ou diversas contas e cada conta pertence a um único cliente.
- Foi utilizada a relação de composição entre Conta e Transação, pois existe um forte acoplamento. Não existe histórico(extrato) sem a conta.
- Foi utilizada Herança entre a classe abstrata Conta e suas filhas, Conta Corrente e Conta Poupança.
- Foi feita uma simulação de criação de clientes, contas e movimentações como saque, depósito, transferências e pix no arquivo index.ts

Para rodar o programa utilizar o comando “npx tsx src/index.ts” 
