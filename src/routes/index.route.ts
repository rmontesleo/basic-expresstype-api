import { Router, Response } from "express";
import noteRouter from "./notes.router";
import { appMessage } from '../config';

const router = Router();

router.use('/notes',noteRouter);

// Default route
router.get('/', ( _request, response:Response ) =>{
    response.send( `${appMessage}` );
});


export default router;