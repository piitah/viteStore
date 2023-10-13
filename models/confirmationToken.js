const mongoose = require("mongoose")

const Schema = mongoose.Schema

const confirmationTokenSchema = new Schema({
    user : {
        type: Schema.ObjectId,
        ref: User
    },
    token: {
        type: String,
        required:true
    }
})

const confirmationTokenModel = mongoose.model("ConfirmationToken", confirmationTokenSchema)

module.exports = confirmationTokenModel