import Connection from "./Connection";
import pgp from 'pg-promise'
import 'dotenv/config'

export default class PostgreSQLConnectionAdapter implements Connection {
    connection: any;

    constructor() {
        const PG = process.env.PG || "";
        this.connection = pgp()(PG);
    }

    async query(stmt: string, params: any): Promise<any> {
        return this.connection.query(stmt, params)
    }
}