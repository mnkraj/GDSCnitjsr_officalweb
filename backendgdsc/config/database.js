const mongoose = require("mongoose");

const connectDB = async () => {
  try {

  const conn = await mongoose.connect("mongodb+srv://sahilkumardas96089:yRuuy26yeg86oQR0@cluster0.qlqyvfw.mongodb.net/medtech", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


    console.log(`MongoDB Connected:${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
