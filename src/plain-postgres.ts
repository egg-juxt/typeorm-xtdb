import postgres = require('postgres')
import types = require('postgres/types')

const sql = postgres({ 
    host: 'localhost',
    port: 5433,
    username: "postgres",
    password: "",
    database: "postgres",
    fetch_types: false,
    debug: true,
});

(async () => { 
    const id = 'test-postgres1'
    const name = 'Pepe'
    const age = 12

    // const result = await sql`
    //   insert into "user"
    //     (_id, "firstName", age)
    //   values 
    //     (${ id },
    //      ${ name },
    //      ${ age })
    // `.describe()

    // const result = await sql`
    //   select ${ sql.typed(null, 25) } = 1
    // `

    const result = await sql`
      select * from information_schema.columns
    `

    

    
    console.log(result)

    // const users = await sql`
    //   select
    //     name,
    //     age
    //   from users
    // `

    // const users = await sql`
    //   select
    //     name,
    //     age
    //   from users
    //   where age >= ${ age }
    // `

    // console.log("Users found:", users);

})()

