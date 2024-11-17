const express = require('express')
const { UploadImage, getGallery, getGalleryById, updateGallery, deleteGallery } = require('../controllers/GalleryController')
const {gallery} = require('../middleware/multer/multer')


const galleryRouter = express.Router()


galleryRouter.post('/galleryUpload',  gallery.single('path'), UploadImage )
galleryRouter.get('/getGallery', getGallery)
galleryRouter.get('/getGelleryById/:id', getGalleryById)
galleryRouter.put('/updateGallery/:id', gallery.single('path'), updateGallery)
galleryRouter.delete('/deleteGallery/:id', deleteGallery)

module.exports = {galleryRouter}