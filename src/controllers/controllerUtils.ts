import { Response } from "express";

/**
 * 
 * @param response 
 * @param statusCode 
 * @param body 
 */
export function buildResponse( response:Response, statusCode:number, body: any ): Response {
    response.status(statusCode).json( body );
    return response;
}