const { StatusCodes } = require("http-status-codes")
const {EmailService } = require("../services")

const {ErrorResponse,SuccessResponse} = require("../utils/common")
async function create(req, res, next){
    try {
        const response = await EmailService.createTicket({
           subject: req.body.subject,
           content:req.body.content,
           recepient:req.body.recepient,
        })
     SuccessResponse.data = response;
      return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse)
    } catch (error) {   
        ErrorResponse.error = error
        // console.log(error);
        return res
        .status(error.StatusCode)
        .json(ErrorResponse)
        
    }
}

module.exports = {
    create
}
