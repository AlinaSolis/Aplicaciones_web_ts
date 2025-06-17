import mongoose from 'mongoose';

const connectDBMongo = async (): Promise<void> => {
  const mongoUri = "mongodb+srv://alina:alina_07@cluster0.ymqfpgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  try {
    await mongoose.connect(mongoUri);
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error en la conexión a MongoDB:", error);
  }
};

export default connectDBMongo;