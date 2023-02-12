const express = require("express"); 
const cron = require("node-cron");
const router = express. Router();

router.post("/schedule", (_, res) => {
try {
let date = new Date();
let min = date.getMinutes();
let cuurrentdate =date.getDate();
let month = date.getMonth(); 
let hour =date.getHours();
//console.log(`${min} ${cuurrentdate } ${hour} ${month} ${date}`)

cron.schedule( `${min + 1} ${hour} ${cuurrentdate} ${month+1} * `, ()=>{
 console.log("task 1 completed")

}) 
cron.schedule( `${min + 2} ${hour} ${cuurrentdate} ${month+1} * `, ()=>{
    console.log("task 2 completed")
   
}) 
cron.schedule( `${min + 3} ${hour} ${cuurrentdate} ${month+1} * `, ()=>{
    console.log("task 3 completed")
   
}) 

res.status(201).send({msg:"task scheduled"})
}
catch (error)

{ res.status(500).send("Server error")}})

module.exports = router;

