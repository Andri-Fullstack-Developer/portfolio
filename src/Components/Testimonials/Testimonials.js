import React from 'react'
import './Testimonials.css'
import Avt1 from '../../assets//avatar1.jpg'
import Avt2 from '../../assets//avatar2.jpg'
import Avt3 from '../../assets//avatar3.jpg'
import Avt4 from '../../assets//avatar4.jpg'

// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data =[
  {
    avatar: Avt1,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quae, sint quod ipsam accusantium ipsa distinctio placeat vitae eveniet. Odio laboriosam impedit neque dolores ipsum velit illo sapiente officiis iste.'
  },
  {
    avatar: Avt2,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quae, sint quod ipsam accusantium ipsa distinctio placeat vitae eveniet. Odio laboriosam impedit neque dolores ipsum velit illo sapiente officiis iste.'
  },
  {
    avatar: Avt3,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quae, sint quod ipsam accusantium ipsa distinctio placeat vitae eveniet. Odio laboriosam impedit neque dolores ipsum velit illo sapiente officiis iste.'
  },
  {
    avatar: Avt4,
    name: 'Tina',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quae, sint quod ipsam accusantium ipsa distinctio placeat vitae eveniet. Odio laboriosam impedit neque dolores ipsum velit illo sapiente officiis iste.'
  }
]

export default function Testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 1,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
              <h5 className='client__nama'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}
