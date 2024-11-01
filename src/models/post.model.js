import mongoose from "mongoose";
const Schema= mongoose.Schema;
const postSchema = Schema({
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    // author:{
    //     type:Schema.Types.ObjectId,
    //     ref:'User'
    // },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});

// creating a different model provides a scalability // quering the model independently storing large arrays may exceed mongodbs document size limit
//displaying reviews of only one particular user
// mongodb - one to many relationships
// one to few relationships
//product.insert many
//type of product can be array
// reference to one model in other model here type is written as Schema.types.ObjectId
// ref tells which model to use during population
// console me obejct ka pura detail dikhta h aur while jab mongoose me save kr lete h tab sirf obectid dikhti h 
//populate method use karte h jab sab kuch chahiye ho
// db.insert many -array create karke insert karna padhta h
// gte finding movies after particular year
// update one // update many
//findoneupdate
// find and modify method

// const bike = new User({name:"aadhya",description:"aidsdoijfo"})
// bike.save().then(data => {
//     console.log("saved successfully")
// }).catch(err=>{
//     console.log(err);
// })

// min max validations // default validations
// jab table me values daal rhe h tab validations hote jate h but when we are updating we should tell mongoose that we still want validations

// pre save or post save middleware functions
//postSchema.pre('save',async function(){
//console.log("about to save");
// })

const Post = mongoose.model("Post", postSchema);
export default Post;
