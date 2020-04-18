#Comandos comumente utilizados no Back-end

Iniciar um repositório node
```yarn```

Instalação do Express, elecria abstrações de rotas, middlewares e muitas outras funções para facilitar a criação tanto de API's quanto SPA's.
```yarn add express```

##Nodemon
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
