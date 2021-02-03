---
id: introDoc2
title: Use Case as Code
sidebar_label: Use Case as Code
slug: /introduction/use-cases
---

Já falamos aqui sobre a complexidade das regras de negócio e como tentamos resolver isso com o herbsJS, porém se você olhar de perto, pode ver que no centro do conceito de clean architecture, notará que os *use cases* são o centro de tudo, é lá que a regra de negócio fica, juntamente das entidades que guiam e modelam o comportamento daquele sistema. O herbsJS nasceu dali, para tentar descrever regras de negócios complexas de maneira fácil para humanos e máquinas lerem.

Aqui podemos ver um exemplo de caso de uso implementado com **buchu**, uma das libs do herbsJS:

``` js
usecase("Add or Update an Item on a to-do List", {
        request: { listId: Number, item: Object },

        authorize: (user) => user.isAdmin ? Ok() : Err(),

        setup: (ctx) => ctx.di = Object.assign({}, dependency, injection),

        "Check if the Item is valid": step((ctx) => {
            const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)
            return item.validate() // Ok or Error
        }),

        "Check if the List exists": step(async (ctx) => {
            const listRepo = new ctx.di.ListRepository(ctx.di)
            const list = await listRepo.first(ctx.req.listId)
            const hasList = (list != null)
            if (!hasList) { return Err("List does not exist. listId: " + ctx.req.listId) }
            return Ok()
        }),

        "Add or Update the Item": ifElse({

            "If the Item exists": step(async (ctx) => {
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                const item = await itemRepo.firstLike(ctx.req.item.name)
                const newItem = (item == null)
                if (!newItem) ctx.ret.item = item
                return Ok(newItem)
            }),

            "Then: Add a new Item to the List": step(async (ctx) => {
                const item = ctx.ret.item = new ctx.di.Item(ctx.req.item)
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                return await itemRepo.save(item) // Ok or Error
            }),

            "Else: Update Item on the List": step(async (ctx) => {
                const item = ctx.ret.item
                item.name = ctx.req.item.name
                item.position = ctx.req.item.position
                const itemRepo = new ctx.di.ItemRepository(ctx.di)
                return await itemRepo.save(item) // Ok or Error
            })
        })
    })
```

Com apenas um método, você pode gerar a documentação daquele usecase:
``` js
console.log(uc.doc())
/*
 {
  type: 'use case',
  description: 'Add or Update an Item on a to-do List',
  steps: [
    {
      type: 'step',
      description: 'Check if the Item is valid',
      steps: null
    },
    {
      type: 'step',
      description: 'Check if the List exists',
      steps: null
    },
    {
      description: 'Add or Update the Item',
      type: 'if else',
      if: [Object],
      then: [Object],
      else: [Object]
    }
  ],
  request: { listId: [Function: Number], item: [Function: Object] }
}*/
```

E com outro, você poderá auditá-lo:

``` js
uc.audit()
/* {
  type: 'use case',
  description: 'Add or Update an Item on a to-do List',
  transactionId: 'c7702d26-aad2-4641-9bc3-409fc5a310f7',
  user: { user: 'John', id: '923b8b9a', isAdmin: true },
  authorized: true,
  return: Ok { value: { item: [Item] } },
  steps: [
    {
      type: 'step',
      description: 'Check if the Item is valid',
      return: [Ok],
      elapsedTime: 64400n
    },
    {
      type: 'step',
      description: 'Check if the List exists',
      return: [Ok],
      elapsedTime: 53700n
    },
    {
      type: 'if else',
      description: 'Add or Update the Item',
      returnIf: [Ok],
      returnThen: [Ok],
      elapsedTime: 119300n
    }
  ],
  elapsedTime: 802300n
}*/
```

## Guidelines arquiteturais

O herbsJS é uma biblioteca evolutiva e open source, portanto gostaríamos muito de te ver contribuindo com ela, fazendo da biblioteca ser a nossa melhor ferramenta de trabalho, enquanto desenvolvedores de software. Portando criamos alguns guias arquiteturais que definem bem o herbsJS e te ajudarão na hora de consumir e contribuir para o projeto:

- **Modular** (Write programs that do one thing and do it well) - As libs precisam ser enxutas, com um único grande objetivo e fazer isto bem.

- **Libs primitivas e libs "glue"** - O ecosistema do herbsJS é dividido em duas partes, as libs primitivas, que trabalham diretamente no core da aplicação e as libs colas, que fazem a adaptação/comunicação das libs primárias com as camadas externas do software.

- **(Sua) Convenção sobre Configuração** - As libs são flexíveis e possuem possibilidade de receber injeções de configurações diversas, isso facilita muito na hora de construir bons testes.

- **Emitir Meta-dados (Write programs to work together)** - Principalmente as libs primárias, precisam emitir metadados sobre tudo o que está acontecendo ali, assim você poderá criar mais facilmente as libs secundárias ou conectar bibliotecas de terceiros. Além de que isso transforma o código muito mais fácil de entender, auditar e logar.

- **Testes** - TODO, sim, TODO software aqui dentro precisa ser testável, acreditamos MUITO no benefício de que um software bem testado trás. E por isso o herbsJS tenta ao máximo abraçar essa causa, receber em suas chamadas, a possibilidade de injeções de depêndencia e assim trazer isolamento com camadas externas, facilitanto assim a capacidade do software testar exatamente o que ele precisa testar.


## Bibliotecas

Hoje o herbs conta com 3 bibliotecas primárias e algumas colas, que você poderá conhecer melhor no nosso repositório oficial do github [herbjs no github](https://github.com/herbsjs)

Porém acho válido aqui destacar as 3 principais bibliotecas do herbsJS: **suma, gotu e buchu**.

- **Suma** - Suma ajuda com validações de valor único. Extensível e código de erros apenas! Suma não valida esquemas ou objetos, apenas valores únicos.

- **Gotu** - Gotu ajuda a definir suas entidades de negócios. Entidades: são o primeiro lugar natural onde devemos ter como objetivo colocar a lógica de negócios em aplicações orientadas a domínio.

- **Buchu** - Biblioteca javascript de casos de usos uniforme, auditável e segura. Influenciado por Clean Architecture e Trailblazer


![Libs herbsJS](/img/herbsjs_libs.png)

Você também pode encontrar mais sobre HerbsJS nas universidade Vórtx ou nosso canal do Youtube.