import express from 'express';
import dotenv from 'dotenv';
import { handler as ssrHandler } from '../dist/server/entry.mjs';

const app = express();

dotenv.config();

app.use(express.static('dist/client/'));

app.use(ssrHandler);

app.listen(process.env.PORT);
