import  dotenv from "dotenv";

dotenv.config();

/**
 * Define all variables you need for your application
 */
export const appPort = process.env.APPLICATION_PORT || 8080;


export const appMessage = process.env.APP_MESSAGE || 'app message not set'