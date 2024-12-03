const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger JSDoc konfiguratsiyasi
const options = {
  definition: {
    openapi: '3.0.0', // OpenAPI versiyasi
    info: {
      title: 'API Documentation', // API nomi
      version: '1.0.0', // API versiyasi
      description: 'API documentation for managing planets and stars', // API ta'rifi
    },
    servers: [
      {
        url: 'http://localhost:3000',  // API manzilingiz
        description: 'Local server', // Server tavsifi
      },
    ],
  },
  apis: ['./routes/*.js'],  // Route fayllaringizga to'g'ri yo'lni berish (masalan: ./routes/*.js)
};

// Swagger spetsifikatsiyasini olish
const swaggerSpec = swaggerJsdoc(options);

// Swagger-ni sozlash funksiyasi
const setupSwagger = (app) => {
  // Swagger UI-ni /api-docs yo'li bilan qo'shish
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = setupSwagger;
