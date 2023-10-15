import { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { deflate } from 'zlib';

export default function carousel(){
    const myimages=[
        {id: '1', image: './carousel/fechadura-digital.jpg'}, 
        {id: '2', image: './carousel/casa-inteligente.jpg'}, 
    ]
    return(
        <div>
            <Swiper 
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                width={1920}
                loop = {true}
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                    {myimages.map((item)=>(
                        <SwiperSlide key={item.id}>
                            <div className="slideitem">
                            <img  src={item.image}  alt='Slide' />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    )

}