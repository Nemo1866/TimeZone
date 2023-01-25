const express=require("express")
const app=express()
const timeZone=require("moment-timezone")


app.get("/time",(req,res)=>{
    const time1="America/Newyork"
    const time2="Europe/London"
    const time3="Asia/Tokyo"
    const time4="Australia/Sydney"
    const time5="Africa/Johannesburg"

    const timeZone1=timeZone().tz(time1).format("YYYY-MM-DD HH:mm:ss")
    const timeZone2=timeZone().tz(time2).format("YYYY-MM-DD HH:mm:ss")
    const timeZone3=timeZone().tz(time3).format("YYYY-MM-DD HH:mm:ss")
    const timeZone4=timeZone().tz(time4).format("YYYY-MM-DD HH:mm:ss")
    const timeZone5=timeZone().tz(time5).format("YYYY-MM-DD HH:mm:ss")

    res.json({
        time1:timeZone1,
        time2:timeZone2,
        time3:timeZone3,
        time4:timeZone4,
        time5:timeZone5
    })

})





app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})

