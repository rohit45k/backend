import  express  from "express";
import {connect} from "../config/database.js"
import jobModel from "../models/jobModel.js";

export const getAllJobs = async(req,res)=>{
    try{
        const jobs = await jobModel.find();
        res.json(jobs)
    }
    catch(error){
        res.status(500).json({
            error :"Internal Server Error"
        })
    }
}

export const postaJob = async(req,res)=>{
    const {
            jobTitle,
            email,
            username,
            applicationDeadlineDate,
            specialisms,
            // jobtype,
            // offeredSalary,
            // careerLevel,
            // experience,
            // gender,
            // industry,
            // qualification,
            // country,
            // city,
            // completeAddress,
            // findOnMap,
            // latitude,
            // longitude,
            jobDescription,
        } = req.body;
        try{
            const newJob = await jobModel.create({
                jobTitle,
                email,
                username,
                applicationDeadlineDate,
                specialisms,
                // jobtype,
                // offeredSalary,
                // careerLevel,
                // experience,
                // gender,
                // industry,
                // qualification,
                // country,
                // city,
                // completeAddress,
                // findOnMap,
                // latitude,
                // longitude,
                jobDescription,
            })
            res.json(newJob)
        }
        catch(error){
            console.log(error)
            res.status(500).json({
                error : "Internal Server Error"
            })
        }
  
}