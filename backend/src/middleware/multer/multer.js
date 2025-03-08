const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', '..', '..', 'public', 'images', 'blog_img'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});


const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|webp/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png,webp) are allowed'));
  }
};



const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: fileFilter,
});


// gallery multer
const memory = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', '..', '..', 'public', 'images', 'gallery_img'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});


const imagesFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|webp/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png,webp) are allowed'));
  }
};



const gallery = multer({
  storage: memory,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: imagesFilter,
});

// gallery multer
const location = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', '..', '..', 'public', 'images', 'service_img'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});


const filterImg = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|webp/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png,webp) are allowed'));
  }
};



const service_img = multer({
  storage: location,
  limits: { fileSize: 2 * 1024 * 1024 }, 
});


const disk = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', '..', '..', 'public', 'images', 'certificate_img'))
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); 
  },
});


const certificateFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|webp/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png, webp) are allowed'));
  }
};



const certificate_img = multer({
  storage: disk,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: certificateFilter,
});



module.exports = {gallery , upload, service_img, certificate_img};


