const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    console.log(process.env.DB_CNN);
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true
    });
    console.log("se inicio correctamente");
  } catch (error) {
    console.log(error);
    throw new Error("error al iniciar BD", error);
  }
};

module.exports = {
  dbConection,
};
