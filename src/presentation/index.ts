import { config } from "../../src/config";
import cookieParser from "cookie-parser";
import express from 'express';
import cors from "cors";
import {sync} from "../../src/db";

import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from "./express";

const server = new InversifyExpressServer(container);
const port = config.port;


server.setConfig((app) => {
 app.use(express.json());
 app.use(cookieParser());
 app.use(cors());
});

export const start = () => {
    server.build().listen(port, async () => {
        try {
        await sync();
        console.log(`Server is running at ${port}`);
        } catch(e) {
        console.log(e);
        }
    });
}