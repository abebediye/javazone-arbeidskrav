import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Javazone 2024 API",
        version: "1.0.0",
    },
    servers: [
        {
            url: process.env.HOST || "http://localhost:3000",
            description:
                process.env.ENVIRONMENT == "development"
                    ? "Development server"
                    : "Production server",
        },
    ],
};

const options = {
    definition: swaggerDefinition,
    apis: ["./routes/*.js"],
};

export default swaggerJSDoc(options);
