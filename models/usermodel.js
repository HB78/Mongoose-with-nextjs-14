import mongoose from "mongoose";

// Calculate today's date using JavaScript
const currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // Months are indexed from 0, so we add 1.
const year = currentDate.getFullYear();
const trueDate = new Date(year, month - 1, day);

// Creation of the PDF model
// Creation of the user schema
const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, min: 2, max: 50, trim: true },
  // Even though timestamps gives us the creation date, we put a more readable date
  date: { type: Date, default: trueDate }
}, { timestamps: true });

const users =  mongoose.model('User', userSchema);

export default users;