import { Resolver, Query, Mutation, Arg, InterfaceType, ObjectType, Field } from "type-graphql";
import { CreateBookInput } from "../inputs/CreateBookInput";
import { UpdateBookInput } from "../inputs/UpdateBookInput";
import { Book } from "../entities/Book";


@InterfaceType()
export abstract class IBookResponse {
    @Field()
    code: number;

    @Field()
    success: boolean;

    @Field({ nullable: true })
    message?: string;
}

@ObjectType({ implements: IBookResponse })
export class BookMutationResponse implements IBookResponse {
    code: number;
    success: boolean;
    message?: string;
}

@Resolver()
export class BookResolver {
    @Mutation((_return) => BookMutationResponse)
    async createBook(@Arg("data") data: CreateBookInput): Promise<BookMutationResponse> {

        const post = new Book()
        post.author = "test";

        await Book.create({
            author: "test"
        }).save();

        return {
            code: 200,
            success: true,
            message: "Create Success",
        };
    }
}