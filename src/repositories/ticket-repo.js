const CrudRepository = require("./crud-repo")
const {Tickets} = require("../models")

class TicketsRepo extends CrudRepository {
   constructor(){
       super(Tickets)
  }
 async getpendingstickets(){
    const response = await Tickets.findAll({
        where:{
            status:'pending'
        }
    })
    return response;
  }
}

module.exports = TicketsRepo;