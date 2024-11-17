const sharp = require('sharp'); 
const fs = require('fs'); 
const Gallery = require('../database/model/gallery.db.js'); 
const path = require('path'); 


const UploadImage = async (req, res, next) => {


    try {

        await sharp(req.file.path)
            .resize({ width: 500 })   
            .jpeg({ quality: 80 })    
            .toFile(req.file.destination +  '/op-' + req.file.originalname);      

      
        const image = await Gallery.create({
            title: req.body.title,  
            path:'op-' + req.file.originalname  
        });

     
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error('Failed to delete the uploaded image:', err);
            } else {
                console.log('Uploaded image deleted successfully.');
            }
        });

        return res.status(201).json({ message: 'Image uploaded successfully', image });

    } catch (error) {
        next(error); 
    }
};


const getGallery = async (req, res, next) => {
    try {
      
        const images = await Gallery.findAll({
            order: [['createdAt', 'DESC']] 
        });
        return res.status(200).send(images); 
    } catch (error) {
        next(error); 
    }
};


const getGalleryById = async (req, res, next) => {
    try {
        const { id } = req.params; 

     
        const singleGallery = await Gallery.findOne({
            where: {
                id: id
            }
        });

       
        if (!singleGallery) {
            return res.status(404).send("Gallery not Found with this ID");
        } else {
            return res.status(200).send(singleGallery); 
        }
        
    } catch (error) {
        next(error); 
    }
};


const updateGallery = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const { title } = req.body; 

        
        const gallery = await Gallery.findOne({ where: { id } });

    
        if (!title || !gallery || !req?.file?.path) {
            fs.unlinkSync(req?.file?.path); 
            return res.status(404).send({
                message: "Something went wrong!"
            });
        }



        await sharp(req.file.path)
            .resize({ width: 500 })   
            .jpeg({ quality: 80 })   
            .toFile(req.file.destination + '/up-' + req.file.originalname);

        await Gallery.update(
            { title, path:'up-' + req.file.originalname},
            { where: { id } }
        );

 
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error('Failed to delete the uploaded image:', err);
            } else {
                console.log('Uploaded image deleted successfully.');
            }
        });


        fs.unlink(req.file.destination + '/' + gallery.toJSON().path, (err) => {
            if (err) {
                console.error('Failed to delete the old image:', err);
            } else {
                console.log('Old image deleted successfully.');
            }
        });

        return res.status(200).json({ message: 'Image updated successfully'
            
        });

    } catch (error) {
        next(error);
  
    }
};


const deleteGallery = async (req, res, next) => {
    try {
        const { id } = req.params; 

    
        const singleGallery = await Gallery.findOne({
            where: {
                id: id
            }
        });

        await singleGallery.destroy(); 

        fs.unlink(path.join(__dirname, '..', '..', 'public', 'images','gallery_img', singleGallery.path), (err) => {
            if (err) {
                console.error('Failed to delete  image:', err);
            } else {
                console.log(' image deleted successfully.');
            }
        });

        res.status(200).send("Delete successfully"); 

    } catch (error) {
        next(error); 
    }
};


module.exports = { 
    UploadImage, 
    getGallery, 
    getGalleryById, 
    updateGallery, 
    deleteGallery 
}; 
