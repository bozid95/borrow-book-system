import swaggerJSDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/**/*.js", "./swagger/*.js"],
};

const swaggerDoc = swaggerJSDoc(options);

export default swaggerDoc;
