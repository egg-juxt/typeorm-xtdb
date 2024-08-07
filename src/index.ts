import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    const user = new User()
    user.id = "test-user-1"
    user.firstName = "Timber"
    user.lastName = "Saw"
    user.age = 25
    await AppDataSource.manager.save(user)
    console.log("Saved a new user with id: " + user.id)

    console.log("Loading users from the database...")
    const users = await AppDataSource.manager.find(User)
    console.log("Loaded users: ", users)

    console.log("Finding user by name...")
    const usersByName = await User.findByName('Pepe', 'Leches')
    console.log("Found users: ", usersByName)

    console.log("Finding user by age...")
    const usersByAge = await User.findOlderThan(4)
    console.log("Found users: ", usersByAge)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
