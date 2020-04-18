import express from 'express';
import routes  from './routes';


class App{
    constructor(){
        this.server = express();

        this.middlewares();
        this.routes();
    }


    middlewares(){
        //enviar e receber requisições pelo modo json
        this.server.use(express.json())
    }

    routes(){
        //utilizando o arquivo de rotas
        this.server.use(routes)
    }
}

export default  new App().server;
