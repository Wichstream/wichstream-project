import "dotenv/config";

import http from "http";

import server from "./server";

import { createConnection } from "typeorm";

const PORT = process.env.PORT || 5000;

http.createServer({}, server).listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

createConnection()
  .then(async () => {
    server.listen(() => {
      console.log(`CONNECTED TO DB AND SERVER START ON 5000`);
    });
  })
  .catch((error) => console.log(error));
