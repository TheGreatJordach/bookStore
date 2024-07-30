import {EntityRepository, Repository} from "typeorm";
import {User} from "../app/users/entities/user.entity";

/**
 * @deprecated @EntityRepository is deprecated. Use newFunction instead.
 */
@EntityRepository(User)
export class UserRepository extends Repository<User>{
}
