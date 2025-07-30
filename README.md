# QAHUB - Cenários de Teste Genéricos

Este repositório é parte integrante do projeto **QAHUB**, uma plataforma web desenvolvida para simplificar e organizar a automação de testes de software. Nosso objetivo é centralizar, validar e promover a colaboração em cenários de testes automatizados genéricos, utilizando frameworks populares como Selenium, Cypress e Playwright, todos implementados em JavaScript.

Aqui você encontrará uma coleção de exemplos de testes que podem servir como ponto de partida ou referência para suas próprias automações, seguindo boas práticas e padrões de qualidade.


## Propósito do Repositório

O `qahub-scenarios` serve como o coração do catálogo de cenários do QAHUB, oferecendo:

* **Centralização de Conhecimento:** Um único local para encontrar cenários de teste comuns.
* **Padronização:** Exemplos que seguem convenções de código e estrutura.
* **Validação:** Cenários que podem ser analisados pela ferramenta de validação de código do QAHUB.
* **Colaboração:** Um ambiente para a comunidade contribuir e aprimorar os cenários existentes.


## Estrutura do Repositório

A organização dos cenários segue uma hierarquia lógica para facilitar a navegação e a localização.

```
qahub-scenarios/
├── selenium-js/
│   └── autenticacao/
│       └── login-sucesso/
│           ├── login_sucesso_test.js
│           ├── login_sucesso.feature
│           └── README.md
├── cypress-js/
│   └── autenticacao/
│       └── login-sucesso/
│           ├── login_sucesso_test.js
│           ├── login_sucesso.feature
│           └── README.md
├── playwright-js/
│   └── autenticacao/
│       └── login-sucesso/
│           ├── login_sucesso_test.js
│           ├── login_sucesso.feature
│           └── README.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md (Este arquivo)

```
## Como Contribuir

A comunidade é parte fundamental do QAHUB! Incentivamos contribuições para expandir e aprimorar este catálogo de cenários.

Para contribuir:

1.  **Faça um Fork** deste repositório para sua conta GitHub.
2.  **Clone** o fork para sua máquina local.
3.  **Crie uma nova branch** para sua contribuição (ex: `feat/novo-cenario-cadastro`).
4.  **Desenvolva seu cenário** seguindo a estrutura de pastas e as convenções de nomenclatura.
    * Certifique-se de incluir o arquivo `.js` com o código de teste, o `.feature` (se aplicável) e um `README.md` detalhado.
5.  **Teste** seu cenário localmente para garantir que funcione como esperado.
6.  **Faça Commit** de suas alterações com mensagens claras e descritivas.
7.  **Envie (Push)** suas alterações para o seu fork no GitHub.
8.  **Abra um Pull Request (PR)** para este repositório, descrevendo sua contribuição.


## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE). Sinta-se à vontade para usar, modificar e distribuir o código, respeitando os termos da licença.


## Contato e Suporte

Se tiver dúvidas, sugestões ou precisar de suporte, por favor, abra uma [Issue neste repositório](https://github.com/lucasfernandopinto/qa-hub/issues) (substitua `seu-usuario` pelo seu nome de usuário do GitHub).