---
id: introDoc3
title: Architecture guides
sidebar_label: Architecture guidelines
slug: /introduction/architecture-guidelines

---


## Guidelines arquiteturais

O herbsJS é uma biblioteca evolutiva e open source, portanto gostaríamos muito de te ver contribuindo com ela, fazendo da biblioteca ser a nossa melhor ferramenta de trabalho, enquanto desenvolvedores de software. Portando criamos alguns guias arquiteturais que definem bem o herbsJS e te ajudarão na hora de consumir e contribuir para o projeto:

- **Modular** (Write programs that do one thing and do it well) - As libs precisam ser enxutas, com um único grande objetivo e fazer isto bem.

- **Libs primitivas e libs "glue"** - O ecosistema do herbsJS é dividido em duas partes, as libs primitivas, que trabalham diretamente no core da aplicação e as libs colas, que fazem a adaptação/comunicação das libs primárias com as camadas externas do software.

- **(Sua) Convenção sobre Configuração** - As libs são flexíveis e possuem possibilidade de receber injeções de configurações diversas, isso facilita muito na hora de construir bons testes.

- **Emitir Meta-dados (Write programs to work together)** - Principalmente as libs primárias, precisam emitir metadados sobre tudo o que está acontecendo ali, assim você poderá criar mais facilmente as libs secundárias ou conectar bibliotecas de terceiros. Além de que isso transforma o código muito mais fácil de entender, auditar e logar.

- **Testes** - TODO, sim, TODO software aqui dentro precisa ser testável, acreditamos MUITO no benefício de que um software bem testado trás. E por isso o herbsJS tenta ao máximo abraçar essa causa, receber em suas chamadas, a possibilidade de injeções de depêndencia e assim trazer isolamento com camadas externas, facilitanto assim a capacidade do software testar exatamente o que ele precisa testar.
