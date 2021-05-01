---
id: whatis
title: What's a Use Case?
sidebar_label: What's a Use Case?
slug: /usecase
---

Conceptually, a use case reflects a single action exposed by the Domain to the end user.

For exemple: _Reopen Ticket_, _Reply Message_, _Add User_

Internally a use case is responsible to control the interaction between entities, repositories and other domain components.

From Clean Architecture book: "Use cases orchestrate the flow of data to and from the entities, and direct those entities to use their Critical Business Rules to achieve the goals of the use case." 

**Best Pratices for a Use Case**

- Be modeled around business domain
- Focused on value
- Keep it simple by telling stories / flows (steps)
- Be reusable
- Be testable
- Have clear acceptance criteria
- Use Ubiquitous language
- Avoid implement field __validations__ using use cases. Prefer Entities for that.
- Enforce use cases are the only entry point to your Domain

### References

- [Clean Architecture book](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)
- [Use Case 2.0](https://www.ivarjacobson.com/sites/default/files/field_iji_file/article/use-case_2.0_final_rev3.pdf)
- [Use Case diagram](http://www.agilemodeling.com/artifacts/useCaseDiagram.htm)
- [Service Layer](https://martinfowler.com/eaaCatalog/serviceLayer.html)