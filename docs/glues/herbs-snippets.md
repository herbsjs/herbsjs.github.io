---
id: herbs-snippets
title: Herbs-snippets
sidebar_label: Herbs-snippets
slug: /glues/herbs-snippets
---

This extension for Visual Studio Code adds snippets for [HerbsJS](https://github.com/herbsjs).

-----------

## Usage Example
Type the keywords in snippet e.g., "step" and press enter.
Alternatively, one can also just press Ctrl+Space (Windows, Linux) or Cmd+Space (OSX) to access the available snippets in the editor.

![](https://raw.githubusercontent.com/herbsjs/herbs-snippets/master/docs/example.gif)

-----------

## Snippets

#### ◈ Buchu ◈

| Trigger  | Content |
| -------: | ------- |
| `uc→`   | Generates **Buchu** entire use case `...  usecase("My use case definition", { ...`	|
| `step→`   | Creates a **Buchu** step `"Description of step": step( (ctx) => { return Ok() } )` |
| `ifstep→`   | Creates a **Buchu** conditional Step  `"Description of conditional rule": ifElse( {` |
| `usec→`   | Generates instantiation of **Buchu** use case with all available functions |



#### ◈ Gotu ◈

| Trigger  | Content |
| -------: | ------- |
| `ent→`   | Generates entire **Gotu** entity `entity('user', { prop: field(type) } )`|
| `fie→`   | Creates a **Gotu** entity field `name: field(type)` |
| `fiev→`   | Creates a **Gotu** entity field with **Suma** validation params  `name: field(type, { validation: { presence: true } } } )` |
| `fjs→`   | Generates instantiation **Gotu** Entity `Entity.fromJSON(params)` |

----------


## Installation

1. Install Visual Studio Code
1. Launch VS Code
1. From the command palette Ctrl+Shift+P (Windows, Linux) or Cmd+Shift+P (OSX)
1. Type ext install or just simply select Install Extension
1. Choose the extension - Herbs Snippets
1. Relaunch VS Code

-----------

## Releases 

### 1.0.2

- Fix of the automatic deploy

### 1.0.1

- Fix of **Gotu** snippets
- Improve the documentation

### 1.0.0

- Initial release of Herbs Snippets

**Enjoy!**
