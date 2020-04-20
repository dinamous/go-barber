
# Comandos comumente utilizados no Back-end

Iniciar um repositório node
```yarn```

Instalação do Express, elecria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação tanto de API's quanto SPA's.
```yarn add express```

## Nodemon

Instalar biblioteca de abstração javascript, como imports
```yarn add sucrase nodemon -D```
Para fazer com que o sucrase funcione adicione o código abaixo ao packege.json

```javascript
"scripts":{
    "dev": "nodemon src/server.js"
  }
```

E então crie um arquivo de configuração nodemon.json na raiz do projeto

```javascript
{
    "execMap":{
        "js":"sucrase-node"
    }
}
```

## EsLint (Necessário extensão VsCode)

Biblioteca de padronização de formatação, encode.

```bash
yarn add eslint -D
yarn eslint --init
```

No console selecione as seguintes opções em cada pergunta:
-'How would you like to use ESLint?' => To check syntax, find problems, and enforce code style
-'What type of modules does your project use?' => JavaScript modules (import/export)
-'Which framework does your project use?' => None of these
-'Does your project use TypeScript?' => N
-'Where does your code run?' (*)Node
-'How would you like to define a style for your project?' => Use a popular style guide
-'Which style guide do you want to follow?' => Airbnb: <https://github.com/airbnb/javascript>
-'What format do you want your config file to be in?' => Javascript
-'Would you like to install them now with npm?' => Y

Após completar a instalação das dependências, apague o arquivo package-lock.json
Em seguida rode `yarn` na raiz do projeto, para atualizar as dependências.
Para ativar a autocorreção do EsLint, navegue para o arquivo de configurações do VSCode.(ctrl+shift+P , digite "Settings JSON")
E adicione esta linha:

```json
    "eslint.packageManager":"yarn",
    "eslint.validate": [
        "javascript",
        "javascriptreact"
    ],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
```

No arquivo .eslintrc.js, adicione as seguintes regras:

```json
    rules: {
        "class-methods-use-this":"off",
        "no-param-reassign":"off",
        "camelcase":"off",
        "no-unused-vars":["error",{"argsIgnorePattern":"next"}],
    },
```

## Prettier (Necessário extensão VsCode)

Para instalar as dependencias digite o seguinte comando:

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Adicione o Prettier como extensão do eslintrc.js de modo que fique assim:

```json
    "extends": [
        'airbnb-base',
        'prettier'
    ],
plugins:['prettier'],
```

Crie um arquivo .prettierrc e adicione este código:

```json
{
    "singleQuote":true,
    "trailingComma":"es5"
}
```

Para fazer com que todos os arquivo sejam corrigidos:

```yarn eslint --fix src --ext .js```


## EditorConfig (Necessário extensão VsCode)
Após instalação da extensão, na raiz do projeto, com botão direito, gere um .editorconfig e verifique se seu conteudo está de acordo:

```json
    root = true

    [*]
    indent_style = space
    indent_size = 4
    charset = utf-8
    trim_trailing_whitespace = true
    insert_final_newline = true
```
