const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
});

UserSchema.pre("save", function (next) {
    const saltRounds = 10
    // check if password has been modified
    if (this.modifiedPaths().includes("password")) {
        bcrypt.genSalt(saltRounds, (err, salt) =>{
            if (err) return next(err)
            bcrypt.hash(this.password, salt , (err,hash) => {
                if(err) return next(err)
                this.password = hash;
                next()
            })   
        })
    } else {
        next ()
    }
})

UserSchema.pre("save", function(next) {
    if (this.isNew) {
        try {
            const doc = User.findOne({
                $or : [{usename : this.username}, {email : this.email}]
            })
    
            if (doc) {
                return next(
                    new ErrorRequest (
                        "A user with the name or email already exists"
                    )
                )
            };
            
        } catch (err) {
            return next((err.statuscode = 400));
        }
    }
})

module.exports = User = mongoose.model("User", UserSchema)
