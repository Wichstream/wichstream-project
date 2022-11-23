"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1626737786922 = void 0;
class init1626737786922 {
    constructor() {
        this.name = "init1626737786922";
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "active_session" 
            ("id" varchar PRIMARY KEY NOT NULL, "token" text NOT NULL, "userId" text NOT NULL, "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
        await queryRunner.query(`CREATE TABLE "user" (
        "id" varchar PRIMARY KEY NOT NULL, 
        "username" text NOT NULL, 
        "email" text NOT NULL,
        "description" text,
        "contact" text,
        "contry" text,
        "facebook" text,
        "twitter" text,
        "instagram" text,
        "password" text NOT NULL, 
        "date" datetime NOT NULL DEFAULT (CURRENT_TIMESTAMP))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "active_session"`);
    }
}
exports.init1626737786922 = init1626737786922;
//# sourceMappingURL=1626737786922-init.js.map