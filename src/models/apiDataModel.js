import mongoose from "mongoose";

//Lấy dữ liệu của các bảng nếu có database
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const APIDataSchema = new Schema({
  user: String,
  apiID: Number,
  pathData: String,
  reqData: Object,
  resData: Object
});

export const APIData = mongoose.model('APIData', APIDataSchema)