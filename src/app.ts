import express from "express";
import router from "./routes/index.route";
import { appPort } from "./config";

import "./database";

export const init= async () =>{
    const app = express();

    //configure middlewares
    app.use( express.json() );
    app.use( express.urlencoded( { extended: false }  ) );

    //configure routes
    app.use(router);
    
    app.listen( appPort, ()=>{
        console.log( `Init ts Microservice with typescript on port ${appPort}` );
    })
}

