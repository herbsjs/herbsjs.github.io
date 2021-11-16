---
id: herbs2rpl
title: Herbs2rpl
sidebar_label: Herbs2rpl
slug: /glues/herbs2rpl
---


![Herbs REPL](https://raw.githubusercontent.com/herbsjs/herbs2repl/main/doc/render1607020056527.gif)

## Getting started
### Installing
 ```
  npm install herbs2repl
 ```
 
### Using

`srs/domain/usecases/_uclist.js`:
```javascript
module.exports = (injection) => {
    return [
        { usecase: require('./createItem').createItem(injection), tags: { group: 'Items' } },
        { usecase: require('./updateItem').updateItem(injection), tags: { group: 'Items' } },
        ...
     ]
}
```

`srs/infra/repl/index.js`:
```javascript
const usecases = require('../../domain/usecases/_uclist')
const repl = require('herbs2repl')

const main = async (injection) => {
    
    // list of all use cases, initialized
    const ucs = usecases(injection)

    // your user for the REPL session
    const user = {
        canAddItem: true, canCreateList: true, canDeteleList: false,
        canGetLists: true, canUpdateItem: true, canUpdateList: true
    }

    repl(ucs, user, {groupBy: "group"})
}

main().then()
```

Then run on your terminal:

     $ node ./src/infra/repl

## Contribute
Come with us to make an awesome *herbs2repl*.

Now, if you do not have the technical knowledge but intend to help us, do not feel shy, [click here](https://github.com/herbsjs/herbs2repl/issues) to open an issue and collaborate with ideas. This contribution could be a criticism or a compliment (why not?)

If you would like to help contribute to this repository, please see [CONTRIBUTING](https://github.com/herbsjs/herbs2repl/blob/main/.github/CONTRIBUTING.md)

## License

**herbsshelf** is released under the
[MIT license](https://github.com/herbsjs/herbs2repl/blob/main/LICENSE.md)