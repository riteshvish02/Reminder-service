const { StatusCodes } = require("http-status-codes")
const {TicketRepo} = require("../repositories")
const {MAILER} = require('../config')
const AppError = require("../utils/errors/app-error")

const ticketRepo = new TicketRepo()

async function sendmail(mailfrom,mailto,subject,text){
    try {
        const response = await MAILER.sendMail(
            {
                from:mailfrom,  // sender address
                to:mailto,  // list of receivers
                subject: subject, // Subject line
                text: text, // plain text body
                html: `<b>${text}</b>`, // html body
              }
        )
        return response
    } catch (error) {
        // console.log(error.name);
        throw new AppError("can't create a new ticket object", StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

async function createTicket(data){
    try {
        const response = await ticketRepo.Create(data) 
        return response
    } catch (error) {
        console.log(error);
        throw new AppError("can't create a new ticket object", StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

async function getpendingemails(){
    try {
        const response = await ticketRepo.getpendingstickets(data) 
        return response
    } catch (error) {
        // console.log(error.name);
        throw new AppError("can't create a new ticket object", StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

module.exports = {
    sendmail,
    createTicket,
    getpendingemails
}