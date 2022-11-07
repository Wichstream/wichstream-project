import 'dotenv/config';

import http from 'http';

import server from './server';

import { createConnection } from "typeorm";

const { PORT } = process.env;

http.createServer({
}, server)
  .listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

createConnection()
  .then(async () => {
    server.listen(() => {
      console.log(`CONNECTED TO DB AND SERVER START ON ${PORT}`);
    });
  })
  .catch((error) => console.log(error));