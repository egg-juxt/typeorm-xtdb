import { BaseEntity, Entity, PrimaryGeneratedColumn, PrimaryColumn, Column } from "typeorm"

@Entity()
export class User extends BaseEntity {

    @PrimaryColumn({name: "_id"})
    id: string//Number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    static findByName(firstName: string, lastName: string) {
        return this.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany()
    }

    static findOlderThan(age: Number) {
        return this.createQueryBuilder("user")
            .where("user.age >= :age", { age })
            .getMany()
    }
}
