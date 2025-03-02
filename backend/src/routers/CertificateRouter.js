const express = require('express')
const {certificate_img} = require('../middleware/multer/multer')
const { UploadCertificate, getCertificate, deleteCertificate,getCertificateById,updateCertificate } = require('../controllers/CertificateController')




const CertificateRouter = express.Router()


CertificateRouter.post('/certificateupload',  certificate_img.single('image'), UploadCertificate )
CertificateRouter.get('/getcertificate', getCertificate)
CertificateRouter.get('/getcertificateById/:id', getCertificateById)
CertificateRouter.put('/updatecertificate/:id', certificate_img.single('image'), updateCertificate)
CertificateRouter.delete('/deletecertificate/:id', deleteCertificate)

module.exports = {CertificateRouter}