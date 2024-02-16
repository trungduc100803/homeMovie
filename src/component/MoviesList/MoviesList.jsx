import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './MoviesList.scss'
import tmdbApi, {category} from '../../api/tmdbApi';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesList(props) {
    SwiperCore.use([Autoplay])

    const [ movies, setMovies ] = useState([])

    useEffect(
        () => {
            const getMovies = async () => {
                let response = null
                const params = {}
                if(props.type !=  'similar') {
                    switch(props.category) {
                        case category.movie:
                            response = await tmdbApi.getMoviesList(props.type, {params})
                            break;
                        default:
                            response = await tmdbApi.getTvList(props.type, { params })
                    }
                }else {
                    response  = await tmdbApi.similar(props.category, props.id)
                }    
                setMovies(response.results)        
            }
            getMovies()
        },[]
    )

    return (  
        <div className="movies-list">
            <Swiper
                modules={[Autoplay]}
                autoplay={{delay: 2000}}
                grabCursor= {true}
                spaceBetween={22}
                slidesPerView={'auto'}
            >
                {
                    movies.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MoviesCard item={item} category={props.category}/>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>
    )
}




export default MoviesList;