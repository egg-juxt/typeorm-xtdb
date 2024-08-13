import {type GeneratedAlways, Kysely} from 'kysely'
import {PostgresJSDialect} from 'kysely-postgres-js'
import postgres from 'postgres'

interface Database {
  user: {
    _id: string // GeneratedAlways<number>
    firstName: string
    lastName: string | null
    age: number
  }
}

const sql = postgres({ 
  host: 'localhost',
  port: 5433,
  username: "postgres",
  password: "",
  database: "postgres",
  fetch_types: false,
  debug: true,
});

const db = new Kysely<Database>({
  dialect: new PostgresJSDialect({ 
    postgres: sql
  }),
});

(async () => { 
    console.log("before insert");

    const result = await db
    .insertInto('user')
    .values({
        _id: "test-kysely2",
        firstName: 'Jennifer2',
        lastName: 'Aniston2',
        age: 42
    })
    .executeTakeFirst()

    console.log(result)
    // Insertable<PersonTable>
})()