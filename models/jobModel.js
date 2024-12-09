import { Schema, model } from "mongoose";

const jobSchema = new Schema({
    jobTitle : {
        type : String,
        required : true,
        unique : true,
    },
    
    email :{
        type : String,
        required : true,
        unique : true,
    },
    username : {
        type : String,
        required : true,
    },
    applicationDeadlineDate : {
        type : Date,
        require : true
    },
    specialisms : {
        type : Array,
        require : true
    },
    // jobtype : {
    //     type : Array,
    //     require : true
    // },
    // offeredSalary : {
    //     type: Array,
    //     require : true
    // },
    // careerLevel : {
    //     type : Array,
    //     require : true
    // },
    // experience : {
    //     type : Array,
    //     require : true
    // },
    // gender : {
    //     type : Array,
    //     require : true
    // },
    // industry : {
    //     type : Array,
    //     require : true
    // },
    // qualification : {
    //     type : Array,
    //     require : true
    // },
    
    // country : {
    //     type : Array,
    //     require : true
    // },
    // city : {
    //     type : Array,
    //     require : true
    // },
    // completeAddress : {
    //     type : Array,
    //     require : true
    // },
    // findOnMap : {
    //     type : String,
    //     // require : true
    // },
    // latitude :{
    //     type: String
    // },
    // longitude :{
    //     type: String
    // }
    jobDescription : {
        type : String,
        required : true,
        unique : true,
    },
})

const jobModel =  new model('Job', jobSchema)
export default jobModel
