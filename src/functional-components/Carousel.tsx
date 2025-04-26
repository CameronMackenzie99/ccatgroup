// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// TODO: infer from astro component
type TestimonialsType = {
    name: string;
    company: string;
    text: string;
    image: string;
}[]

const testimonialsSlider = ({ testimonials: testimonials }: {testimonials: TestimonialsType}) => {
    return (
        <Swiper
            slidesPerView={1}
            speed={1000}
            loop={true}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
               768: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={10}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            style={{
                "padding": "2px",
                // @ts-ignore: swiper library injection of style
                "--swiper-pagination-color": "#f5d651",  
            }}
        >
            {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.name} className="pb-8"
                >
                    <div
                    className='bg-dark-900 shadow-sm shadow-gold-300 animate-slide-up p-8 h-full'
                    // style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className='flex gap-4 mb-6 bg-dark-800/5'>
                      <svg
                        className='w-10 h-10 text-primary-500/20 mb-4'
                        fill='currentColor'
                        viewBox='0 0 32 32'
                      >
                        <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                      </svg>
                      <div>
                        <h3 className='text-xl font-semibold text-gold-300'>
                          {testimonial.name}
                        </h3>
                        <p className='text-primary-500'>{testimonial.company}</p>
                      </div>
                    </div>
                    <p className='text-gray-300 text-lg leading-relaxed'>
                      "{testimonial.text}"
                    </p>
                  </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default testimonialsSlider;
