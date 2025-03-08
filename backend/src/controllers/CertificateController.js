const sharp = require('sharp'); 
const fs = require('fs'); 
const path = require('path'); 
const Certificate = require('../database/model/certificate.db');

const UploadCertificate = async (req, res, next) => {


    try {

        await sharp(req.file.path) 
            .jpeg({ quality: 60 }) 
            .webp({ quality: 60 })  
            .png({ quality: 60 })   
            .toFile(req.file.destination +  '/op-' + req.file.originalname);      

      
        const image = await Certificate.create({
            title: req.body.title,  
            image:'op-' + req.file.originalname  
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


const getCertificate = async (req, res, next) => {
    try {
      
        const images = await Certificate.findAll({
            order: [['createdAt', 'DESC']] 
        });
        return res.status(200).send(images); 
    } catch (error) {
        next(error); 
    }
};


const getCertificateById = async (req, res, next) => {
    try {
        const { id } = req.params; 

     
        const singleCertificate= await Certificate.findOne({
            where: {
                id: id
            }
        });

       
        if (!singleCertificate) {
            return res.status(404).send("Image not Found with this ID");
        } else {
            return res.status(200).send(singleCertificate); 
        }
        
    } catch (error) {
        next(error); 
    }
};


const updateCertificate = async (req, res, next) => {
    try {
        const { id } = req.params; 
        const { title } = req.body; 

        
        const gallery = await Certificate.findOne({ where: { id } });

    
        if (!title || !gallery || !req?.file?.path) {
            fs.unlinkSync(req?.file?.path); 
            return res.status(404).send({
                message: "Something went wrong!"
            });
        }



        await sharp(req.file.path)  
        .jpeg({ quality: 60 }) 
        .webp({ quality: 60 })  
        .png({ quality: 60 }) 
            .toFile(req.file.destination + '/up-' + req.file.originalname);

        await Certificate.update(
            { title, image:'up-' + req.file.originalname},
            { where: { id } }
        );

 
        fs.unlink(req.file.path, (err) => {
            if (err) {
                console.error('Failed to delete the uploaded image:', err);
            } else {
                console.log('Uploaded image deleted successfully.');
            }
        });


        fs.unlink(req.file.destination + '/' + gallery.toJSON().image, (err) => {
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


const deleteCertificate = async (req, res, next) => {
    try {
        const { id } = req.params; 

    
        const singleCertificate = await Certificate.findOne({
            where: {
                id: id
            }
        });

        await singleCertificate.destroy(); 

        fs.unlink(path.join(__dirname, '..', '..', 'public', 'images','certificate_img', singleCertificate.image), (err) => {
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
    UploadCertificate, 
    getCertificateById, 
    deleteCertificate, 
    getCertificate, 
    updateCertificate 
}; 
