import mongoose from "mongoose";

//Lấy dữ liệu của các bảng nếu có database
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const APIDataSchema = new Schema({
  user: ObjectId,
  apiID: Number,
  reqData: Object,
  resData: Object
});

const APIData = mongoose.model('APIData', APIDataSchema)