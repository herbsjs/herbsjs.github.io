---
id: herbs2repl
title: REPL - Herbs2REPL
sidebar_label: REPL
slug: /glues/herbs2repl
---

Creates a REPL (Read Evaluate Print Loop) based on Herbs [entities](/docs/entity/getting-started) and [usecases](/docs/usecase/getting-started).

![Herbs REPL](https://raw.githubusercontent.com/herbsjs/herbs2repl/main/doc/render1607020056527.gif)

## Installing
 ```bash
$ npm install herbs2repl
 ```
 
## Using

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

```bash
$ node ./src/infra/repl
```     