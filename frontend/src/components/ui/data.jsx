const { FacialIcon, EyebrowIcon, WaxingIcon, MakeupIcon, HairIcon, BotoxIcon, FilterICon, HairRemoveIcon } = require("./icon");

export const HomeServiceData = [
    {
        id: 1,
        icon: <FacialIcon />,
        title: 'Facials',
        details: "Revitalize and nourish your skin with our customized facials, designed to enhance your natural glow and leave you feeling refreshed."
    },
    {
        id: 2,
        icon: <MakeupIcon />,
        title: 'Threading',
        details: "Achieve perfectly shaped brows and a polished look with our precise threading services, tailored to suit your style."
    },
    {
        id: 3,
        icon: <HairIcon />,
        title: 'Waxing',
        details: "Experience smooth, flawless skin with our gentle and effective waxing services for a silky finish."
    },
    {
        id: 4,
        icon: <EyebrowIcon />,
        title: 'Microblading',
        details: "Transform your brows with expert microblading, creating natural, defined, and long-lasting arches."
    },
    {
        id: 5,
        icon: <BotoxIcon />,
        title: 'Botox',
        details: "Rejuvenate your appearance with our botox treatments, reducing fine lines and wrinkles for a youthful glow."
    },
    {
        id: 6,
        icon: <FilterICon />,
        title: 'Fillers',
        details: "Enhance your facial contours with dermal fillers, adding volume and smoothness for a refreshed look."
    },
    {
        id: 7,
        icon: <HairRemoveIcon />,
        title: 'Laser Hair Removal',
        details: "Enjoy long-lasting smoothness with our advanced laser hair removal treatments, designed for all skin types."
    }
    
]

export const ServiceData = [
    {
        id: 1,
        icon: <FacialIcon />,
        title: 'FACIAL',

        pricingPlan: [
            {
                name: "Regular Facial",
                price: "$50"
            },
            {
                name: "Antiaging Facial ",
                price: "$70"
            },
            {
                name: "Acne Treatment",
                price: "$70"
            },
            {
                name: "Microdermabrasion",
                price: "$70"
            },
            {
                name: "Hydra Facial",
                price: "$90"
            },
            {
                name: "Face Lifting",
                price: "$90"
            },
            {
                name: "Chemical Peel",
                price: "$80"
            },
            {
                name: "Microneedling",
                price: "$100"
            },
        ]
    },
   
    {
        id: 2,
        icon: <EyebrowIcon />,
        title: 'THREADING',
        pricingPlan: [
            {
                name: "Eye Brows",
                price: "$8"
            },
            {
                name: "Upper Lips",
                price: "$5"
            },
            {
                name: "Full Face",
                price: "$20"
            },
        ]
    },
    {
        id: 3,
        icon: <WaxingIcon />,
        title: 'WAXING',
        pricingPlan: [
            {
                name: "Under Arm",
                price: "$12"
            },
            {
                name: "Half Arm",
                price: "$15"
            },
            {
                name: "Full Arm",
                price: "$20"
            },
            {
                name: "Half Leg",
                price: "$25"
            },
            {
                name: "Full Leg",
                price: "$50"
            },
            {
                name: "Bikini",
                price: "$20"
            },
            {
                name: "Brazilian",
                price: "$35"
            },

        ]
    },

]

export const scheduleValue = [
    {
        id: 1,
        value: "",
        title: 'Services'
    },
    {
        id: 2,
        value: "Facial",
        title: 'Facial'
    },
    {
        id: 3,
        value: "Threading",
        title: 'Threading'
    },
    {
        id: 4,
        value: "Waxing",
        title: 'Waxing'
    },
]




export const FeatureData = [
    {
        id: 1,
        icon: <FacialIcon />,
        title: 'Facial',
        details: 'Vivamus nec ligula et leo sodales pellentesque id sed lectus. Aliquam viverra velit sagittis pharetra venenatis'
    },
    {
        id: 2,
        icon: <EyebrowIcon />,
        title: 'Threading',
        details: 'Vivamus nec ligula et leo sodales pellentesque id sed lectus. Aliquam viverra velit sagittis pharetra venenatis'
    },
    {
        id: 3,
        icon: <WaxingIcon />,
        title: 'Waxing',
        details: 'Vivamus nec ligula et leo sodales pellentesque id sed lectus. Aliquam viverra velit sagittis pharetra venenatis'
    },

]

export const CertificateData = [
    {
        
        id: 1,
        image: '/images/certificate/5.jpg',
        title:'Beauty Therapy'

    },
    {
       
        id: 2,
        image: '/images/certificate/3.jpg',
        title:'Ontario College Diploma'

    },
    {
        id: 3,
        image: '/images/certificate/4.jpg',
        title:'Advanced Esthetics'

    },
    {
      
        id: 4,
        image: '/images/certificate/1.jpg',
        title:'Cosmetology Hobbies'

    },
   
    {
        id: 5,
        image: '/images/certificate/2.jpg',
        title:'Hydra Peel'

    },
    
   
]

export const BookingTime = [
     '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM',
]