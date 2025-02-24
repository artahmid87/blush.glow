const Holiday = require("../database/model/holiday.db");

const OffdayController = async (req, res, next) =>{
    try {
        const {name , fromDate, toDate, fromTime , toTime} = req.body
    
    
    if(!name || !fromDate || !toDate || !fromTime || !toTime ){
        return res.status(404).send("All Field are Required")
    }
  
     const Offday =  await Holiday.create({name, fromDate, toDate, fromTime , toTime})
     res.status(200).send({
      message:"success",
      Offday
     })
        
    } catch (error) {
        next(error)
      }
}

const getAllOffday  =  async (req, res, next) => {
    try {
        const dayOff  = await Holiday.findAll()
        res.status(200).send(dayOff)
     
    } catch (error) {
      next(error);
    }
}


const getSingleOffday = async (req, res, next) => {
  try {
    const { id } = req.params;
    const dayOff = await Holiday.findOne({
      where: {
        id: id,
      },
    });

    if (!dayOff) {
      return res.status(404).json({
        message: "Holiday is not found!",
      });
    }

    res.status(200).json(dayOff);
  } catch (error) {
    next(error);
  }
};



const RemoveOffDay = async(req, res, next) =>{

  try {
    const {id} = req.params
  
  const offday =await Holiday.findOne({
    where:{
      id:id
    }
  })

  if(!offday){
    return res.status(404).send(next("Holiday is Not Found!"))
  }
  

  await Holiday.destroy({
    where:{
      id:id
    }
  })
  res.send("Delete successfully")
  
    
  } catch (error) {
    next(error)
  }
}





module.exports = {OffdayController, getAllOffday,RemoveOffDay,getSingleOffday}