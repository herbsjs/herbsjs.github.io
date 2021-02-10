---
id: introDoc3
title: Architecture guides
sidebar_label: Architecture guidelines
slug: /introduction/architecture-guidelines

---

## Architectural guidelines

HerbsJS is an evolutionary and open source library, so we would love to see you contribute to it, making the library our best working tool. So we created some architectural guides that define HerbsJS to help you when it comes to consuming and contributing to the project:

- **Modular** (Write programs that do one thing and do it well) - Libs need to be lean, with a single big goal and do this well.

- **Primitive libs and "glue" libs** - The herbsJS ecosystem is divided into two parts, the primitive libs, which work directly at the core of the application and the glue libs, which adapt/communicate the primary libs with the external layers of the software.

- **(Your) Configuration Convention** - The libs are flexible and have the possibility to receive many different configurations, this makes it much easier to build good tests.

- **Emit meta-data (Write programs to work together)** - Especially the primary libs need to send metadata about everything that is happening there, so you can more easily create the secondary libs or connect third party libraries. In addition, this makes the code much easier to understand, audit and log.

- **Tests** - all, yes, all software here needs to be testable, we strongly believe in the benefit that well-tested software brings, that is why herbsJS tries its best to embrace this cause, receive on your calls the possibility of dependency injections and thus bring insulation with external layers, thus facilitating the software's ability to test exactly what it needs to test.
