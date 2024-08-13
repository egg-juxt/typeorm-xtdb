import { Client }  from 'pg'
// const { Client } = pg
const client = new Client("postgres://postgres@localhost:5432/postgres")
client.connect().then(async () => {
    const res = await client.query('SELECT $1::int as message', ['(1+1)'])
    console.log(res.rows[0].message + 1) // Hello world!

    // await client.query({
    //     text: 'INSERT INTO "user"("_id", "firstName", "lastName", "age") VALUES ($1, $2, $3, $4)',
    //     values: ["test-user-1","Timber","Saw",25]
    // });

    await client.end()
})
