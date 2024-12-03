const express = require('express');
const setupSwagger = require('./swagger'); // Swagger konfiguratsiyasini chaqirish

const app = express();

// Route'larni qo'shish (masalan, planetlar va yulduzlar)
const planetRoutes = require('./routes/planet.routes'); // planet routes faylini import qilish
const starRoutes = require('./routes/star.routes'); // star routes faylini import qilish

app.use('/planets', planetRoutes);  // Planetlar uchun router
app.use('/stars', starRoutes);      // Yulduzlar uchun router

// Swagger-ni sozlash
setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
