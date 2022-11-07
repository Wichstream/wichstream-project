import "dotenv/config";

import http from "http";

import server from "./server";

import { createConnection } from "typeorm";

http.createServer({}, server).listen(5000, '0.0.0.0', () => {
  console.log(`Server is running...`);
});

createConnection()
  .then(async () => {
    server.listen(() => {
      console.log(`CONNECTED TO DB AND SERVER START ON 5000`);
    });
  })
  .catch((error) => console.log(error));
