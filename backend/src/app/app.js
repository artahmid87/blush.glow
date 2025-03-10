const express = require('express'); 
const cors = require('cors'); 
const helmet = require('helmet'); 
const hpp = require('hpp'); 
const compression = require('compression');
const path = require('path'); 

const { blogRouter } = require('../routers/BlogRouter.js'); 
const Blog = require('../database/model/blog.db.js'); 
const Appointment = require('../database/model/appointment.js'); 
const { AppointmentRouter } = require('../routers/AppointmentRouter.js'); 
const Admin = require('../database/model/admin.db.js'); 
const adminRouter = require('../routers/adminRouter.js'); 
const Review = require('../database/model/review.db.js'); 
const { ReviewRouter } = require('../routers/reviewRouter.js'); 
const Gallery = require('../database/model/gallery.db.js'); 
const { galleryRouter } = require('../routers/GalleryRouter.js'); 

const app = express(); 
const cookieParser = require('cookie-parser'); 
const {serviceRouter} = require('../routers/ServiceRouter.js');
const  {Categories }  = require('../database/model/serviceModel.js');
const {priceRouter} = require('../routers/PriceRouter.js');
const  {CategoryBlog}  = require('../database/model/BlogCategory.js');
const { BlogCategoryRouter } = require('../routers/BlogCategoryRouter.js');
const { PricePlan } = require('../database/model/price.db.js');
const Holiday = require('../database/model/holiday.db.js');
const { HolidayRouter } = require('../routers/HolidayRouter.js');
const Certificate = require('../database/model/certificate.db.js');
const { CertificateRouter } = require('../routers/CertificateRouter.js');


app.use(cors({origin: "http://localhost:3000",}));
app.use(hpp()); 
app.use(cookieParser()); 

app.use(
    helmet({
        crossOriginResourcePolicy: false, 
    })
);


app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: [
            "'self'", 
            "http://192.168.0.109:3000",
        ],
        scriptSrc: [
            "'self'", 
            "http://192.168.0.109:3000", 
        ],  
        styleSrc: ["'self'"], 
        imgSrc: ["'self'"], 
    },
}));


app.use(compression());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, "../../public"))); 

Categories.hasMany(PricePlan, {
    foreignKey: "CategoryId",
    onDelete: "CASCADE",
    as: "price",
  });
  
  PricePlan.belongsTo(Categories, {
    foreignKey: "CategoryId",
    onDelete: "CASCADE",
    as: "categories",
  });

CategoryBlog.hasMany(Blog, {
    foreignKey: 'CategoryId',
    onDelete: 'SET NULL',
    as: 'blog',
  });
  
  Blog.belongsTo(CategoryBlog, {
    foreignKey: 'CategoryId',
    onDelete: 'SET NULL',
    as: 'categories',
  });

(async () => {
    try {
       await CategoryBlog.sync({force:false})
       await Blog.sync({ alter: false, force: false }); 
       await Appointment.sync({ alter: false, force: false }); 
       await Admin.sync({ force: false }); 
       await  Review.sync({ force: false }); 
       await Gallery.sync({ force: false }); 
       await Categories.sync({ force: false }); 
       await PricePlan.sync({force:false})
       await Holiday.sync({force:false})
       await Certificate.sync({force:false})
     
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  })();

// All router handling from here 
app.use('/', blogRouter); 
app.use('/appointment', AppointmentRouter); 
app.use('/admin', adminRouter); 
app.use('/', ReviewRouter); 
app.use('/', galleryRouter); 
app.use('/', serviceRouter); 
app.use('/', priceRouter); 
app.use('/', BlogCategoryRouter); 
app.use('/', HolidayRouter); 
app.use('/', CertificateRouter); 

module.exports = app; 
