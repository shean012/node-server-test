import mongoose from 'mongoose'
const Schema = mongoose.Schema

const UserSchema = new Schema({
  nickName: String,
  age: Number,
  role: String
})

export default mongoose.model('UserSchema', UserSchema)