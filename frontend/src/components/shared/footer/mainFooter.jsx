import Container from '@/components/ui/Container';
import { CalenderIcon, EmailIcon, FacebookIcon, InstagramIcon, LocationIcon, PhoneIcon, YoutubeIcon } from '@/components/ui/icon';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function MainFooter() {

  const { pathname } = useRouter();

  const path = '/'

  return (
    <footer className={`${pathname !== path ? 'bg-[#252525] text-white' : 'bg-[#ffffff] text-tertiary'}   py-14 relative`}>

      <Container>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:h-[60vh]" style={{
          zIndex: 999
        }}>

          {/* About Us Section */}
          <div>
            <h2 className={`${pathname !== path ? 'text-white' : ' text-tertiary'} text-lg md:text-4xl font-semibold mb-8 font-secondery`}>About Us</h2>
            <p className="text-sm md:text-lg ">
              Blush & Glow Beauty Bar is your go-to destination for luxurious beauty services. Our team of professionals is dedicated to enhancing your natural beauty with personalized care.
            </p>

            <Link href="/appointment">
              <button

                className="group hover:bg-primary bg-white transition-all py-2 mt-10 px-8 flex gap-2 justify-center items-center rounded-full"
                style={{
                  boxShadow: '1px 1px 8px gray',
                }}
              >
                <span className="flex justify-center items-center text-2xl group-hover:text-primary text-white transition-all w-8 h-8 md:w-10 md:h-10 group-hover:bg-white bg-primary rounded-full ml-[-20px]">
                  <CalenderIcon />
                </span>
                <span className="text-md md:text-lg transition-all group-hover:text-white text-primary font-secondery">
                  Make An Appointment
                </span>
              </button>
            </Link>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className={`${pathname !== path ? 'text-white' : ' text-tertiary'}text-lg md:text-4xl font-semibold mb-8 font-secondery`}>Quick Links</h2>
            <ul className="space-y-6 text-sm md:text-xl">
        
              <li><Link className="hover:underline" href="/about"> About </Link></li>
              <li><Link className="hover:underline" href="/imageShowcase"> Gallery </Link></li>
              <li><Link className="hover:underline" href="/blog">Blog</Link></li>
              <li><Link className="hover:underline" href="/faq">FAQs </Link></li>
              <li><Link className="hover:underline" href="/privacy-policy">Privacy Policy </Link></li>
              <li><Link className="hover:underline" href="/terms-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>
         

          {/* Contact Us Section */}
          <div className=" gap-20 w-full">
            <h1 className={`${pathname !== path ? 'text-white' : ' text-tertiary'}text-lg md:text-4xl font-semibold mb-8 font-secondery`}>Contact us</h1>
            <p className="flex  gap-2 text-sm md:text-xl"><span className="mt-1"><LocationIcon /></span><span><a href=" https://www.google.com/maps/place/Blush+%26+Glow+Beauty+Bar/@43.6961831,-79.2929566,17z/data=!4m14!1m7!3m6!1s0x38d840a6f5aec37:0x1292455a177a54ce!2sBlush+%26+Glow+Beauty+Bar!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v!3m5!1s0x38d840a6f5aec37:0x1292455a177a54ce!8m2!3d43.6961831!4d-79.2929566!16s%2Fg%2F11s1sbcm3v?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D">5 Massey Square, East York, ON M4C 5L6, canada.</a></span></p>
            <p className="flex  gap-2 py-6 text-sm md:text-xl"><span className="mt-1"><PhoneIcon /></span><a href="cellto">Call: +1 (647)-607-2276</a></p>
            <p className="flex  gap-2 text-sm md:text-xl"><span className="mt-1"><EmailIcon /></span><a href="mailto:blushglowbar@gmail.com">blushglowbar@gmail.com</a></p>

            <ul className='flex gap-10 pt-10'>
              <li className='text-3xl hover:text-primary transition-all'><a href="#"><FacebookIcon /></a></li>
              <li className='text-3xl  hover:text-primary transition-all'><a href="#"><InstagramIcon /></a></li>
              <li className='text-4xl  hover:text-primary transition-all'><a href="#"><YoutubeIcon /></a></li>
            </ul>

          </div>

          {/* Map Section */}
          <div className="w-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d721.1727982288214!2d-79.292957!3d43.696183!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d840a6f5aec37%3A0x1292455a177a54ce!2sBlush%20%26%20Glow%20Beauty%20Bar!5e0!3m2!1sen!2sbd!4v1720508571658!5m2!1sen!2sbd"
              className="w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </Container>
      <div className='invisible md:visible banner animate-slide-left-right absolute -top-20 left-0 -ml-20 py-6' style={{
        zIndex: 0
      }}>
        <img src="/images/home/footer.png" alt="" />
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-md">
        &copy; {new Date().getFullYear()} Blush & Glow Beauty Bar. All rights reserved.
      </div>
    </footer>
  );
}

