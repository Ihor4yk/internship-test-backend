import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Internship Test API",
      version: "1.0.0",
      description: "Backend API documentation",
    },

    tags: [
      { name: "Auth", description: "Authentication endpoints" },
      { name: "Deals", description: "Real estate deals API" },
      { name: "Applications", description: "User applications API" },
    ],

    servers: [
      {
        url: `${process.env.BASE_URL || `http://localhost:${process.env.PORT || 5000}`}/api`,
        description: "Current server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },

  apis: ["./src/docs/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
