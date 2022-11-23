"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const http_1 = __importDefault(require("http"));
const server_1 = __importDefault(require("./server"));
const typeorm_1 = require("typeorm");
const PORT = process.env.PORT || 8080;
http_1.default.createServer({}, server_1.default).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
(0, typeorm_1.createConnection)()
    .then(async () => {
    server_1.default.listen(() => {
        console.log(`CONNECTED TO DB AND SERVER START ON 5000`);
    });
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map