const express = require('express');
const amqplib = require('amqplib');
const {EmailService} = require('./services')
async function connectqueue(){
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue('noti-queue');
        channel.consume('noti-queue',async  (msg) => {
            // console.log(msg);
            // console.log(`${Buffer.from(msg.content)}`);
            const object = JSON.parse(`${Buffer.from(msg.content)}`)
            console.log(object);
            await EmailService.sendmail('AirlineNoti@gmail.com',object.recepient,object.subject,object.body)
            channel.ack(msg)
        });
        
    } catch (error) {
        console.log(error);
    }
}
const app = express();
const {serverconfig,Logger} = require("./config")
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
const apiroutes = require("./routes")

app.use("/api",apiroutes)
app.listen(serverconfig.PORT,async ()=>{
    console.log(`server listening on ${serverconfig.PORT}`);
    Logger.info(`server listening on ${serverconfig.PORT}`,"root",{})
    await connectqueue()
    console.log("up");
   
})