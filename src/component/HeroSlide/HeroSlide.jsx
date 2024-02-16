import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom'


import './HeroSlide.scss'
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import tmdbApi, { movieType, category } from '../../api/tmdbApi'
import apiConfig from '../../api/apiConfig';

function HeroSlide() {

    SwiperCore.use([Autoplay])

    const [heros, setHeros] = useState([])

    useEffect(
        () => {
            const params = { page: 5 }
            try {
                const getHero = async () => {
                    const res = await tmdbApi.getMoviesList(movieType.popular, { params })
                    setHeros(res.results)
                }
                getHero()
            } catch {
                console.log('error')
            }
        },
        []
    )

    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 2000 }}
            >
                {
                    heros.map((item, i) => (

                        <SwiperSlide key={i} >
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                            {/* <HeroSlideItem item={item} /> */}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}


export const HeroSlideItem = props => {
    const item = props.item
    const bg = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    const link = '/movie/' + item.id

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="slide-content">
                <div className="slide-info">
                    <div className="name">{item.title || item.original_title}</div>
                    <p className="des">{item.overview}</p>
                    <div className="btn-control">
                        <Link to={link} className="btn-control__item btn-control__item-mb">
                            <Button>Watch Now</Button>
                        </Link>
                        <Link to={link} className="btn-control__item btn-control__item-mb">
                            <Button type={true}>Watch Trailer</Button>
                        </Link>
                    </div>
                </div>
                <div className="slide-img">
                    <img className='img' src={`${bg}`} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSlide;