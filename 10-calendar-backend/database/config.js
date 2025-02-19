const mongoose = require("mongoose");

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      // useUnifiedTopology: true,
      // useCreateIndex: true
    });
    console.log("se inicio correctamente");
  } catch (error) {
    console.log(error);
    throw new Error("error al iniciar BD");
  }
};

module.exports = {
  dbConection,
};
