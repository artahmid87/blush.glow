const {Categories} = require('../database/model/serviceModel')
const fs = require('fs'); 
const sharp = require("sharp");
const path = require("path");
const { PricePlan } = require('../database/model/price.db');

const CreateCategories =async (req, res, next) =>{
    try {
        const {title} = req.body
        
        if(!title){
            return res.status(404).send('Category data not Found')
        }

        const data =  await Categories.create({title})
        return res.status(200).send(data)
        
    } catch (error) {
        next(error)
    }
}

const getCategories =async (req, res, next)=>{
    try {
        const categories = await Categories.findAll()
        return res.status(200).send(categories)
    } catch (error) {
        next(error)
    }
}
const singleCategory =async (req, res, next)=>{
    try {
        const {id} = req.params
        const categories = await Categories.findOne({
            where:{
                id:id
            }
        })
        if(!categories){
            return res.status(404).send("Categories Not found!")
        }
         
        return res.status(200).send(categories)
    } catch (error) {
        next(error)
    }
}
const updateCategories =async (req, res, next)=>{
    try {
        const { id } = req.params; 
    const { title } = req?.body;




    const categories = await Categories.findOne({
      where: {
        id: id
      }
    });


        // console.log(categories)
        if(!categories){
            return res.status(404).send("Categories Not found!")
        }

        const data =  await Categories.update(
            { title},
            { where: { id:id } }
          );
         
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

const deleteCategories = async (req, res, next) => {
    try {
        const { id } = req.params;


        if (!id) {
            return res.status(400).send("Category ID is required.");
        }

      await Categories.destroy({
            where: {
                id: id,
            },
        });

     
        return res.status(200).send("Category deleted successfully!");
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
};



const CreatePricePlan =async (req, res, next) =>{
    try {
        const { title, price,CategoryId } = req?.body; 
        console.log(CategoryId)
    
        
        if (!title || !price || req?.file?.path === undefined) {
          if (req?.file?.path) fs.unlinkSync(req?.file?.path); 
          return res.status(404).send({
            message: "Something went wrong!"
          });
        }
    
        await sharp(req.file.path)
        .resize({ width: 500 })   
        .jpeg({ quality: 80 })    
        .toFile(req.file.destination +  '/op-' + req.file.originalname);      
    
    
    
        const pricePlan = await PricePlan.create({
           title, 
           price,
           image:'op-' + req.file.originalname,
           CategoryId,
        });
    
       
      
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error('Failed to delete the uploaded image:', err);
            } else {
                console.log('Uploaded image deleted successfully.');
            }
        });
    
        return res.status(200).send(pricePlan); 
    
      } catch (error) {
        next(error); 
      }
}

const getPrice = async (req, res, next) => {
    try {
        const pricePlan = await PricePlan.findAll({
            include: [{
                model: Categories,
                as: 'categories', 
                attributes: ['id', 'title'], 
            }],
            
        });
        return res.status(200).send(pricePlan);
    } catch (error) {
        next(error);
    }
};


const singlePricePlan =async (req, res, next)=>{
    try {
        const {id} = req.params
        const price = await PricePlan.findOne({
            include: [{
                model: Categories,
                as: 'categories', 
                attributes: ['id', 'title'], 
            }],
            where:{
                id:id
            }
        })
        if(!price){
            return res.status(404).send("Categories Not found!")
        }
         
        return res.status(200).send(price)
    } catch (error) {
        next(error)
    }
}

const updatePricePlan = async (req, res, next) => {
    try {
        const { id } = req.params; 
    
        const { title, price,CategoryId } = req?.body;
       const image = req?.file?.originalname
    
    
        const pricepaln = await PricePlan.findOne({
          where: {
            id: id
          }
        });

      console.log(pricepaln)


        if (!title || !price || !pricepaln || !req?.file?.path) {
            fs.unlinkSync(req?.file?.path); 
            return res.status(404).send({
                message: "Something went wrong!"
            });
        }



        await sharp(req.file.path)
            .resize({ width: 500 })   
            .jpeg({ quality: 80 })   
            .toFile(req.file.destination + '/up-' + req.file.originalname);

        await PricePlan.update(
            { title, price, image:'up-' +  req.file.originalname, CategoryId },
            { where: { id } }
        );

 
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error('Failed to delete the uploaded image:', err);
            } else {
                console.log('Uploaded image deleted successfully.');
            }
        });

      
        fs.unlink(req.file.destination + '/' + pricepaln.toJSON().image, (err) => {
            if (err) {
                console.error('Failed to delete the old image:', err);
            } else {
                console.log('Old image deleted successfully.');
            }
        });
    
        return res.status(200).json({ message: 'Price updated successfully' });
    
      } catch (error) {
        next(error); 
      }
}

const deletePrice =async (req, res, next)=>{
    try {
        const { id } = req.params; 
    
        const price = await PricePlan.findOne({
          where: {
            id: id
          }
        });
    
        if (!price) {
          return res.status(404).send("Blog not found!"); 
        }
    
        await price.destroy();
    
        fs.unlink(path.join(__dirname, '..', '..', 'public', 'images','service_img', price.image), (err) => {
          if (err) {
              console.error('Failed to delete the old image:', err);
          } else {
              console.log('Old image deleted successfully.');
          }
      });
        return res.status(200).send("Delete successfully");
    
      } catch (error) {
        next(error); 
      }
}




module.exports = {CreateCategories, getCategories, updateCategories, deleteCategories, singleCategory, CreatePricePlan, deletePrice, getPrice, singlePricePlan, updatePricePlan, }