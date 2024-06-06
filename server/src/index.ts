require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import express from "express"
import { createServer } from "http";
import {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./data-source";
const { graphqlUploadExpress } = require("graphql-upload-ts");



const main = async () => {
    AppDataSource.initialize()
        .then(() => {
            console.log("Database Connected");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err);
        });

    const app = express();

    app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const httpServer = createServer(app);

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            validate: false,
            //import multiple resolvers
            resolvers: [`${__dirname}/resolver/*.{ts,js}`],
        }),
        context: async ({ req }) => ({ token: req.headers.token }),
        plugins: [
            ApolloServerPluginDrainHttpServer({ httpServer }),
            ApolloServerPluginLandingPageGraphQLPlayground,
        ],
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({
        app,
        cors: {
            origin: [
                "https://studio.apollographql.com",
                "http://localhost:5176",
                "http://localhost:5173",
                "http://localhost:4003",
            ],
            credentials: true,
        },
    });

    const PORT = process.env.PORT || 4003;

    await new Promise((resolve) =>
        httpServer.listen({ port: PORT }, resolve as () => void)
    );

    // Typically, http://localhost:4000/graphql
    console.log(
        `SERVER STARTED  http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
};

main().catch((err) => {
    console.log(err);
});
