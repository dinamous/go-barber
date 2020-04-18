const express = require('express');
const routes = require('./routes');


// const app = express();
// app.use(express.json());
// app.use(routes);
// app.listen(3333);

class App{
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }


    middlewares(){
        //enviar e receber requisições pelo modo json
        this.server.use(express.json());
    }

    routes(){
        //utilizando o arquivo de rotas
        this.server.use(routes);
    }
}

module.exports = new App().server;