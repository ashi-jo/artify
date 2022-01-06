const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Category = require("../models/category");
const mongoose = require("mongoose");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  async function seedCateg(titleStr) {
    try {
      const categ = await new Category({ title: titleStr });
      await categ.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }
  await seedCateg("Bags");
  await seedCateg("Journaling Supplies");
  await seedCateg("Jewellery");
  await seedCateg("Home & Living");
  await seedCateg("Candles");
  await seedCateg("Travel");
  await seedCateg("Art & Craft supplies");
  await closeDB();
}

seedDB();
