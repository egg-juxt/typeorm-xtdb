import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { PostgresDriver } from "typeorm/driver/postgres/PostgresDriver"

class XtdbDriver extends PostgresDriver {
    constructor(connection?: DataSource) {
        super(connection);
    }

    isReturningSqlSupported(): boolean {
        return false;
    }
}

const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433, // 5432,
    username: "postgres",
    password: "",
    database: "postgres",
    synchronize: false, // true,
    logging: "all",
    entities: [User],
    migrations: [],
    subscribers: [],
});

appDataSource.driver = new XtdbDriver(appDataSource);

export const AppDataSource = appDataSource;