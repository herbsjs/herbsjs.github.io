---
id: assist
title: Herbs Assist
sidebar_label: Assist
slug: /project/assist
custom_edit_url: null
---

# Herbs Assist

Herbs Assist is an AI assistant that helps developers create use cases and specs using OpenAI Codex. It simplifies the workflow by generating natural language specifications and Herbs spec and use case files based on the provided information.

<video controls width="720" height="405">
  <source src="/assets/herbs-assist-full.mp4"/>
</video>

## Prerequisites

To use Herbs Assist, you need to have the following:

- The Herbs JS library installed
- Your OpenAI Codex keys

For more information on how to get your keys, please refer to the [OpenAI Codex documentation](https://beta.openai.com/docs/models/codex).

## Usage

To use Herbs Assist, follow these steps:

1. On your terminal or command-line interface, type `herbs assist`.

    Make sure you have your OpenAI Codex keys set as environment variables. 
    In case you don't, Herbs Assist will prompt you to set them.

2. Use Case name and folder/group prompt

    When prompted, enter a name for the use case and specify the folder or group where it will be saved.

3. Specification prompt

    Herbs Assist will generate a natural language specification based on the use case name. It is just a suggestion, so you can edit and save it before proceeding to the next step.

    This specification file will not be saved in the project folder. It is just a temporary file that will be used to generate the Herbs Spec file.

    Don't forget to save and reload the specification before proceeding to the next step.

4. Herbs Spec prompt

    Once the specification is saved, Herbs Assist will generate the Herbs Spec file based on the specification.

    Don't forget to save and reload the Herbs spec file before proceeding to the next step.

5. Herbs Use Case prompt

    Once the Herbs spec file is saved, Herbs Assist will generate the Herbs use case file based on the Spec file.

## Advanced Usage

If you want to "debug" Herbs Assist, you can check the generated files in the `./assist` folder. Make sure to include this folder in your `.gitignore` file.

## Conclusion

Herbs Assist makes it easy to generate use cases and specifications for the Herbs JS library, using natural language and OpenAI Codex. With a few simple steps, you can keep your focus on your domain and let Herbs Assist do the rest.