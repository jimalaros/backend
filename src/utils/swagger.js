const swaggerOptions = {
    definition: {
        openapi: "3.0.3",
        info: {
            title: "BSALE - OpenAPI 3.0",
            description: "",
            version: "1.0.0",
        },
        servers: [
            {
                url: "http://localhost:4000",
            },
        ],
        tags: [
            {
                name: "Products",
                description: "All products stored in the database",
            },
            {
                name: "Categories",
                description: "All categories stored in the database",
            },
        ],
        paths: {
            "/products": {
                get: {
                    tags: ["Products"],
                    summary: "To see all the products in the database",
                    responses: {
                        200: {
                            description: "Successful operation",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
            "/products/{id}": {
                get: {
                    tags: ["Products"],
                    summary: "To show a product by its id",
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of the product",
                            required: true,
                            schema: {
                                type: "integer",
                                example: 1,
                            },
                        },
                    ],
                    responses: {
                        404: {
                            description: "Not Found",
                        },
                        200: {
                            description: "Ok",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
            "/categories": {
                get: {
                    tags: ["Categories"],
                    summary: "To see all the products grouped by categories in the database",
                    responses: {
                        200: {
                            description: "Ok",
                        },
                        500: {
                            description: "Internal Server Error",
                        },
                    },
                },
            },
        },
    },
    apis: ["./routes/*.js"],
};

module.exports = swaggerOptions;