//this will contain the data of the user in the form of schema.
//it also explains the different fields of use and how it will stored in the mongodb.

const mongoose = require('mongoose');




const userSchema = new mangoose.schema({
    name:{
        type:String,
        required:true
    },

    userId:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:10 ,
        lowercase:true
    },
    usertype:{
        type:String,
        required:true,
        default:"CUSTOMER",
        enum:["CUSTOMER","ADMIN"]
    }
},{timestamps:true});

/*define the collections name where it will be stored
*/
 module.exports = mongoose.model("user",userSchema);