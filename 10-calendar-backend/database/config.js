const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    console.log("Intentando conectar a MongoDB...");
    console.log("URI de conexión:", process.env.DB_CNN);

    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true, // ✅ Activado
    });

    console.log("✅ Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error.message);
    throw new Error("Error al iniciar BD"); // ✅ Corrección
  }
};

module.exports = {
  dbConection,
};
